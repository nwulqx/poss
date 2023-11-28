import ReactEcharts from "echarts-for-react";
const InventoryChart = () => {
  const getOption = () => {
    let option = {
      title: {
        text: "客户总数：1026",
        left: "center",
        top: 120,
        textStyle: {
          color: "#fff",
          fontSize: 16,
        },
      },
      padding: 0,
      height: 260,
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "horizontal",
        data: ["新客", "订单客户", "无意向"],
        bottom: 20,
        textStyle: {
          color: "#fff",
        },
      },
      series: [
        {
          type: "pie",
          radius: ["70%", "90%"],
          itemStyle: {
            normal: {
              color: function (colors) {
                const colorList = ["#ef6567", "#f9c956", "#75bedc"];
                return colorList[colors.dataIndex];
              },
            },
          },
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          data: [
            { value: 600, name: "新客" },
            { value: 102, name: "订单客户" },
            { value: 324, name: "无意向" },
          ],
        },
      ],
    };
    return option;
  };
  return <ReactEcharts option={getOption()} />;
};

export default InventoryChart;
