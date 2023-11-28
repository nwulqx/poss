import { useState } from "react";
import cls from "classnames";
import { PUI } from "@pui/react";
import Chat from "./components/Chat";
import "./App.css";
import "./styles/app.scss";

function App() {
  const [show, setShow] = useState(true);
  PUI.setTheme("dark");
  document.body.setAttribute("theme", "dark");

  return (
    <div className="main">
      <div className="poss" onClick={() => setShow(true)}>
        <img src="/group.png" width="118" height="124" />
      </div>
      <div className={cls("chatWarp", { show: show })}>
        <Chat setShow={setShow} show={show} />
      </div>
    </div>
  );
}

export default App;
