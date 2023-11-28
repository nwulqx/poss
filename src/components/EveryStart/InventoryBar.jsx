import ReactEcharts from "echarts-for-react";
const InventoryBar = () => {
  const getOption = () => {
    let option = {
      grid: {
        top: "40px",
        bottom: "0px",
        left: "30px",
        right: "20px",
      },
      xAxis: [
        {
          type: "category",
          data: ["来店", "抖音", "微信", "汽车之家", "活动"],
        },
      ],
      yAxis: [
        {
          type: "value",
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              color: "rgba(146, 146, 146, 1)",
            },
          },
        },
      ],
      tooltip: {
        trigger: "item",
      },
      padding: 0,
      height: 200,
      series: [
        {
          barWidth: "18",
          itemStyle: {
            borderRadius: [20, 20, 0, 0],
          },
          data: [
            {
              value: 576,
              itemStyle: {
                color: "rgba(176, 177, 178, 1)",
              },
            },
            {
              value: 267,
              itemStyle: {
                color: "rgba(176, 177, 178, 1)",
              },
            },
            {
              value: 165,
              itemStyle: {
                color: "rgba(176, 177, 178, 1)",
              },
            },
            {
              value: 143,
              itemStyle: {
                color: "rgba(176, 177, 178, 1)",
              },
            },
            {
              value: 111,
              itemStyle: {
                color: "rgba(176, 177, 178, 1)",
              },
            },
          ],
          type: "bar",
        },
      ],
    };
    return option;
  };
  return <ReactEcharts option={getOption()} />;
};

export default InventoryBar;
