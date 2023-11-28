import { useState, useEffect } from "react";
import { Table, Pagination } from "@pui/react";
import moment from "moment";
import styles from "./index.module.scss";
import { testDriveListData } from "./constant";
import Loading from "/src/components/Loading";

function TestDriveList() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getStatus = (status) => {
    if (status === 0) {
      return ["编辑中", "edit"];
    }
    if (status === 1) {
      return ["等待执行", "pending"];
    }
    if (status === 2) {
      return ["执行中", "executing"];
    }
    if (status === 3) {
      return ["已取消", "cancel"];
    }
    return ["已完成", "finished"];
  };

  const columns = [
    {
      title: "类型(ID)",
      key: "id",
      width: 100,
      customCell: ({ id, type }) => `${type === 0 ? "试乘" : "试驾"}(${id})`,
    },
    {
      title: "车型",
      key: "model",
      width: 100,
      customCell: ({ model }) => `${model}`,
    },
    {
      title: "状态",
      key: "status",
      width: 100,
      customCell: ({ status }) => {
        const [text, className] = getStatus(status);
        return (
          <div className={`${styles["status"]} ${styles[className]}`}>
            {text}
          </div>
        );
      },
    },
    {
      title: "客户姓名(BP-ID)",
      key: "bpId",
      width: 200,
      customCell: ({ customerName, bpId }) => `${customerName} (${bpId})`,
    },
    {
      title: "持续时间",
      key: "duration",
      width: 100,
      customCell: ({ duration }) => `${duration}分钟`,
    },
    {
      title: "里程数",
      key: "distance",
      width: 100,
      customCell: ({ distance }) => `${distance}公里`,
    },
    {
      title: "预约时间",
      key: "startTime",
      width: 200,
      sortable: true,
      customCell: ({ startTime, endTime }) =>
        `${moment(startTime).format("YYYY-MM-DD")} ${moment(startTime).format(
          "HH:mm"
        )}-${moment(endTime).format("HH:mm")}`,
    },
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setList([...testDriveListData]);
    }, 1500);
  }, []);
  return (
    <div className={styles["test-drive-list"]}>
      <Table
        columns={columns}
        data={list}
        defaultSorter={{ key: "startTime", sortType: "desc" }}
      />
      {list.length ? (
        <div className={styles["pagination"]}>
          <Pagination
            align="right"
            type="simple"
            total={6}
            pageSize={10}
            current={1}
          />
        </div>
      ) : null}
    </div>
  );
}

export default TestDriveList;
