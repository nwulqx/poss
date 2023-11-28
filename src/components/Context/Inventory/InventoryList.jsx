import { Table } from "@pui/react";
import { data } from "./data";
const formatMoney = (number, places = 2, symbol = "¥", thousand = ",") => {
  let curNumber = number ?? 0;
  if (typeof curNumber === "number") {
    curNumber = curNumber.toFixed(places);
  }
  return (
    symbol +
    curNumber.replace(/(?<=(^\d*))(\d)(?=(\d{3})+(\.\d*)?$)/g, `$2${thousand}`)
  );
};
const columns = [
  {
    title: "年款/车型",
    key: "modelName",
    width: 200,
    rowCellStyle: {
      textAlign: "left",
    },
    headCellStyle: {
      textAlign: "left",
    },
    customCell: ({ modelName, modelYear }) => {
      return <span>{`${modelYear} ${modelName}`}</span>;
    },
  },

  {
    title: "挂牌价",
    key: "priceValue",
    width: 160,
    rowCellStyle: {
      textAlign: "left",
    },
    headCellStyle: {
      textAlign: "left",
    },
    customCell: (record) => formatMoney(record.priceValue),
  },
  {
    title: "库龄",
    key: "stockAge",
    width: 100,
    rowCellStyle: {
      textAlign: "left",
    },
    headCellStyle: {
      textAlign: "left",
    },
    customCell: ({ stockAge }) => (stockAge ? `${stockAge}天` : "-"),
  },
  {
    title: "车辆状态",
    key: "stockStatusDescZh",
    width: 80,
    rowCellStyle: {
      textAlign: "left",
    },
    headCellStyle: {
      textAlign: "left",
    },
  },
];

const InventoryList = () => {
  return (
    <div>
      <Table size="small" data={data} columns={columns} height="320px" />
    </div>
  );
};

export default InventoryList;
