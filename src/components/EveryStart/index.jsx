import styles from "./index.module.scss";
import InventoryChart from "./InventoryChart";
import InventoryBar from "./InventoryBar";

const EveryStart = () => {
  return (
    <div className={styles.main}>
      <div className={styles.common}>
        <div className={styles.title}>销售概况</div>
        <div className={styles.continue}>
          <div className={styles.list}>
            <div className={styles.item}>
              <p>接待手卡数</p>
              <h3>128</h3>
            </div>
            <div className={styles.item}>
              <p>新增客户数</p>
              <h3>230</h3>
            </div>
            <div className={styles.item}>
              <p>新增商机数</p>
              <h3>1262</h3>
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.item}>
              <p>试乘试驾数</p>
              <h3>888</h3>
            </div>
            <div className={styles.item}>
              <p>报价单</p>
              <h3>260</h3>
            </div>
            <div className={styles.item}>
              <p>新增订单数</p>
              <h3>12</h3>
            </div>
          </div>
        </div>
        <div className={styles.bottom} style={{ marginTop: 26 }}>
          <div className={styles.left}>
            <h3>客户来源分布</h3>
            <div className={styles.data} style={{ height: 280 }}>
              <InventoryChart />
            </div>
          </div>
          <div className={styles.right}>
            <h3>商机来源分析</h3>
            <div className={styles.data} style={{ height: 280 }}>
              <InventoryBar />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.common} style={{ marginTop: 15 }}>
        <div className={styles.title}>今日待办</div>
        <div className={styles.continue}>
          <div className={styles.list}>
            <div className={styles.item}>
              <p>邀约跟近</p>
              <h3>12</h3>
            </div>
            <div className={styles.item}>
              <p>试乘试驾回访</p>
              <h3>230</h3>
            </div>
            <div className={styles.item}>
              <p>交车</p>
              <h3>12</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveryStart;
