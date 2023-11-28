import React, { useEffect, useRef, useState } from "react";
import Questioner from "./Questioner";
import TypewriterText from "./TypewriterText";
import styles from "./index.module.scss";
import cls from "classnames";
import ReactMarkdown from "react-markdown";

const ChatContainer = ({ message }) => {
  console.log("message", message);

  const indexRef = useRef(1);
  const chatContainerRef = useRef();
  const [messages, setMessages] = useState([
    {
      id: 0,
      content:
        "您好：我是 *POS 精灵*，一个 *AI 助手*，您可以叫我 POSS。我可以给你介绍 POS 系统的功能和使用，也能帮你解答疑问",
      role: "assistant",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const getAnswer = async (userInput) => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://192.168.10.177:8080/chat/generate-response",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userInput }),
        }
      );
      const responseData = await response.json();
      setMessages((cur) => {
        return cur.map((item) => {
          if (item.id === indexRef.current) {
            return {
              id: indexRef.current++,
              content: responseData.data.content,
              role: responseData.data.role,
            };
          }
          return item;
        });
      });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleQuestionSubmit = (newQuestion) => {
    setMessages((cur) => {
      return [
        ...cur,
        {
          id: indexRef.current++,
          content: newQuestion,
          role: "user",
        },
        {
          id: indexRef.current,
          content: newQuestion,
          role: "loading",
        },
      ];
    });
    getAnswer(newQuestion);
  };
  useEffect(() => {
    const tabSubmit = (curInput, curValue) => {
      setMessages((cur) => {
        return [
          ...cur,
          {
            id: indexRef.current++,
            content: curValue,
            role: "user",
          },
          {
            id: indexRef.current,
            content: curValue,
            role: "loading",
          },
        ];
      });
      getAnswer(curInput);
    };
    if (message === "查看当前库存车辆信息") {
      const newInputData = `库存信息：Macan库存10辆, 718 Boxster库存9辆,Cayenne库存7辆,Panamera库存6辆,Taycan库存1辆`;
      tabSubmit(
        `${newInputData}，这是当前库存车辆信息，你能帮我分析解读一下吗？`,
        "查看当前库存车辆信息，并解读"
      );
    } else if (message === "查看当前试驾信息") {
      //   const newInputData = JSON.stringify(
      //     carInfoListData > 4 ? carInfoListData.slice(0, 4) : carInfoListData
      //   );
      //   tabSubmit(
      //     `${newInputData}，这是一个数据集合的json格式数据，你能帮我分析解读一下吗？`,
      //     "查看当前试驾信息，并解读"
      //   );
    } else if (message === "查看今日信息") {
      const newInputData = `今日系统信息：接待手卡数:128,新增客户数:230新增商机数,1262试乘试驾数,888报价单,260新增订单数,12`;
      tabSubmit(
        `${newInputData}，这是今日销售情况的数据集合,你能帮我分析解读一下吗？`,
        "查看今日信息，并解读"
      );
    }
  }, [message]);
  // 自动聚焦滚动，先注释会影响手动滚动
  //   useEffect(() => {
  //     // 添加新内容的函数
  //     function addNewContent() {
  //       // 滚动到底部
  //       chatContainerRef.current.scrollTop =
  //         chatContainerRef.current.scrollHeight;
  //     }

  //     // 示例：在一秒后添加新内容并滚动到底部
  //     setInterval(() => {
  //       addNewContent();
  //     }, 1000);
  //   }, []);
  return (
    <>
      <div className={styles.chatContainer} ref={chatContainerRef}>
        {messages.map((msg) => {
          const content = () => {
            switch (msg.role) {
              case "user":
                return (
                  <div className={styles.questionerMessage}>
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                );
              case "assistant":
                return (
                  <div key={msg.id} className={styles.responderContainer}>
                    <img src="/public/avator.png" width="118" height="124" />
                    <div className={styles.responderMessage}>
                      <TypewriterText text={`${msg.content}`} showMarkdown />
                    </div>
                  </div>
                );
              case "loading":
                return (
                  <div key={msg.id} className={styles.responderContainer}>
                    <img src="/public/avator.png" width="118" height="124" />
                    <div
                      className={cls(
                        styles["loading-responder"],
                        styles.responderMessage
                      )}
                    >
                      <div>正在查询中，请稍后...</div>
                      <img
                        className={styles.loading}
                        src="/public/loading2.gif"
                      />
                    </div>
                  </div>
                );
            }
          };
          return <>{content()}</>;
        })}
      </div>

      <Questioner onSubmit={handleQuestionSubmit} loading={loading} />
    </>
  );
};

export default ChatContainer;
