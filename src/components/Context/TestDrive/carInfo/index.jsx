import { useState, useEffect } from "react";
import { Row, Col, Button, Tooltip } from "@pui/react";
import styles from "./index.module.scss";
import { carInfoListData } from "./constant";
import Loading from "/src/components/Loading";
import moment from "moment";

function CarInfo() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getStatus = (status) => {
    if (status === 0) {
      return ["空闲中", "usable"];
    }
    if (status === 1) {
      return ["试乘中", "reserved"];
    }
    return ["试驾中", "using"];
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setList([...carInfoListData]);
    }, 1500);
  }, []);

  return (
    <div className={styles["car-list"]}>
      {list.map((car) => {
        const [text, className] = getStatus(car.status);
        return (
          <div key={list.id} className={styles["car-info"]}>
            <img src={car.imageUrl} alt="" />
            <div className={styles["detail"]}>
              <div className={styles["header"]}>
                <div className={styles["model"]}>{car.model}</div>
                <div className={`${styles["status"]} ${styles[className]}`}>
                  {text}
                </div>
              </div>

              {car.status !== 0 ? (
                <Row>
                  <Col
                    span={12}
                    className={`${styles["key"]} ${styles["highlight"]}`}
                  >
                    客户姓名
                  </Col>
                  <Col
                    span={12}
                    className={`${styles["value"]} ${styles["highlight"]}`}
                  >
                    {car.customerName}
                  </Col>
                </Row>
              ) : null}
              {car.status !== 0 ? (
                <Row>
                  <Col
                    span={12}
                    className={`${styles["key"]} ${styles["highlight"]}`}
                  >
                    BP-ID
                  </Col>
                  <Col
                    span={12}
                    className={`${styles["value"]} ${styles["highlight"]}`}
                  >
                    {car.bpId}
                  </Col>
                </Row>
              ) : null}
              {car.status !== 0 ? (
                <Row className={styles["customer-row"]}>
                  <Col
                    span={12}
                    className={`${styles["key"]} ${styles["highlight"]}`}
                  >
                    最快可用时间
                  </Col>
                  <Col
                    span={12}
                    className={`${styles["value"]} ${styles["highlight"]}`}
                  >
                    {moment(car.latestUsableTime).format("YYYY-MM-DD HH:mm")}
                  </Col>
                </Row>
              ) : null}
              <Row>
                <Col span={12} className={styles["key"]}>
                  车型编码/年款
                </Col>
                <Col span={12} className={styles["value"]}>
                  {car.modelCode} / {car.modelYear}
                </Col>
              </Row>
              <Row>
                <Col span={12} className={styles["key"]}>
                  保时捷代码
                </Col>
                <Col span={12} className={styles["value"]}>
                  <Tooltip placement="topCenter" content="点击查看配置">
                    <Button type="link" style={{ height: "20px" }}>
                      {car.porscheCode}
                    </Button>
                  </Tooltip>
                </Col>
              </Row>
              <Row>
                <Col span={12} className={styles["key"]}>
                  车身颜色/车顶颜色
                </Col>
                <Col span={12} className={styles["value"]}>
                  <Tooltip
                    placement="topCenter"
                    content={`${car.bodyColor} / ${car.topColor}`}
                  >
                    {car.bodyColor} / {car.topColor}
                  </Tooltip>
                </Col>
              </Row>
              <Row>
                <Col span={12} className={styles["key"]}>
                  内饰
                </Col>
                <Col span={12} className={styles["value"]}>
                  <Tooltip placement="topCenter" content={car.innerColor}>
                    {car.innerColor}
                  </Tooltip>
                </Col>
              </Row>
              <Row>
                <Col span={12} className={styles["key"]}>
                  排气
                </Col>
                <Col span={12} className={styles["value"]}>
                  {car.displacement}
                </Col>
              </Row>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CarInfo;
