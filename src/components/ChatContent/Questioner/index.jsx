import React, { useState } from "react";
import styles from "./index.module.scss";
import { Input } from "@pui/react";
import { IconSend } from "@pui/icons";

const Questioner = ({ onSubmit, loading }) => {
  const [question, setQuestion] = useState("");

  const handleSubmit = () => {
    onSubmit(question);
    setQuestion("");
  };
  return (
    <div className={styles.questioner}>
      <Input
        type="text"
        value={question}
        onValueChange={(curValue) => {
          setQuestion(curValue);
        }}
        placeholder="有问题尽管问我～"
        disabled={loading}
        // onEnter={handleSubmit}
        suffixIcon={
          <div onClick={handleSubmit} className={styles["text-align"]}>
            <IconSend loading={loading} />
            <div>发送</div>
          </div>
        }
      />
    </div>
  );
};

export default Questioner;
