import ReactEcharts from "echarts-for-react";
import style from "./style.module.scss";
const InventoryChart = () => {
  const getBarOption = () => {
    let option = {
      xAxis: {
        type: "category",
        name: "库龄(天)",
        data: ["1-30天", "31-90天", "90-200天", "200-300天", "300+天"],
      },
      yAxis: {
        type: "value",
        name: "数量(辆)",
      },
      tooltip: {
        trigger: "item",
      },
      series: [
        {
          barWidth: "20",
          itemStyle: {
            borderRadius: [20, 20, 0, 0],
          },
          name: "库龄",
          data: [
            1,
            8,
            9,
            8,
            {
              value: 14,
              itemStyle: {
                color: "#a90000",
              },
            },
          ],
          type: "bar",
        },
      ],
    };
    return option;
  };
  const getOption = () => {
    let option = {
      title: {
        text: "总数：40",
        left: "center",
        top: "center",
        textStyle: {
          color: "#fff",
          fontSize: 16,
        },
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        data: ["Macan", "718 Boxster", "Cayenne", "Panamera", "Taycan"],
        bottom: 10,
        borderRadius: 5,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          color: "#fff",
          fontSize: 12,
        },
      },
      series: [
        {
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          data: [
            { value: 10, name: "Macan" },
            { value: 9, name: "718 Boxster" },
            { value: 7, name: "Cayenne" },
            { value: 6, name: "Panamera" },
            { value: 1, name: "Taycan" },
          ],
        },
      ],
    };
    return option;
  };
  return (
    <div className={style.inventoryChart}>
      <div className={style.pieChart}>
        <h2>车型分布</h2>
        <ReactEcharts option={getOption()} />
      </div>
      <div className={style.barChart}>
        <h2>库龄分布</h2>
        <ReactEcharts option={getBarOption()} />
      </div>
    </div>
  );
};

export default InventoryChart;
