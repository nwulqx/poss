import { useState } from "react";
import { Tabs, TabPane } from "@pui/react";
import TestDriveList from "./list";
import styles from "./index.module.scss";
import CarInfo from "./carInfo";

function TestDrive() {
  const [currentTab, setCurrentTab] = useState("carInfo");
  return (
    <>
      <Tabs
        className={styles["test-drive"]}
        hasLine
        activeKey={currentTab}
        onActiveKeyChange={setCurrentTab}
      >
        <TabPane title="试乘试驾车辆信息" tabKey="carInfo">
          <CarInfo />
        </TabPane>
        <TabPane title="试乘试驾列表" tabKey="list">
          <TestDriveList />
        </TabPane>
      </Tabs>
    </>
  );
}

export default TestDrive;
