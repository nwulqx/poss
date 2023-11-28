import { useState, useEffect } from "react";
import cls from "classnames";
import EveryStart from "../EveryStart";
import TypewriterText from "../ChatContent/TypewriterText";
import ChatContainer from "../ChatContent";
import InventoryPage from "../Context/Inventory";
import TestDrive from "../Context/TestDrive";
import Loading from "../Loading";
import styles from "./index.module.scss";
const defaultMessages = {
  home: "查看今日信息",
  inventory: "查看当前库存车辆信息",
  testDrive: "查看当前试驾信息",
};
const tags = [
  {
    label: "今日信息",
    value: "home",
  },
  {
    label: "当前库存",
    value: "inventory",
  },
  {
    label: "试驾信息",
    value: "testDrive",
  },
];

const Chat = ({ setShow, show }) => {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("home");
  const [curTab, setCurTab] = useState();
  const onShow = () => {
    if (show) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  };
  useEffect(() => {
    onShow();
  }, [show]);

  return (
    <div className={styles.chat}>
      <div className={styles.head}>
        <div className={styles.group}>
          <img src="/public/modal_group.png" />
          <div className={styles.text}>
            <h3>
              <TypewriterText text="POSS - 550b" />
            </h3>
            <p>遇到问题，请尽管问我~</p>
          </div>
        </div>
        <div className={styles.close} onClick={() => setShow(false)}>
          <img src="/public/close.png" />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.message}>
          <ChatContainer message={curTab ? defaultMessages[curTab] : ""} />
          <div className={styles.tags}>
            {tags.map(({ value, label }) => {
              return (
                <span
                  className={cls(styles.tag, styles[value])}
                  onClick={() => {
                    onShow();
                    setMessage(value);
                    setCurTab(value);
                  }}
                  key={value}
                >
                  {label}
                </span>
              );
            })}
          </div>
        </div>
        <div className={styles.data}>
          <Loading loading={loading} />
          {message === "home" ? <EveryStart /> : null}
          {message === "inventory" ? <InventoryPage /> : null}
          {message === "testDrive" ? <TestDrive /> : null}
        </div>
      </div>
    </div>
  );
};

export default Chat;
