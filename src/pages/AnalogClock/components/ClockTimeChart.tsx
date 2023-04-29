import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { IData, ITimeRecord } from "../../../utils/types";
import {
  checkMultipleofSix,
  convertIntoTimeSlots,
  creatColorsArray,
  indexToDisplayNumber,
} from "../../../utils/utils";
import styles from "../styles.module.css";
import {
  dummyOptions,
  timeRecordsTWT,
  timeRecordsYT,
} from "../../../utils/constants";

const timeRecords: ITimeRecord[] = [
  {
    startTime: new Date("16/Apr/2023 00:00"),
    endTime: new Date("16/Apr/2023 23:59"),
  },
];
interface IProps {
  appSelected: string;
}
const ClockTimeChart = (props: IProps) => {
  const { appSelected } = props;
  const [appTimeRecords, setAppTimeRecords] = useState<ITimeRecord[]>([]);
  const [clockData, setClockData] = useState<IData[]>([]);
  const [colorsData, setColorsData] = useState<string[]>([]);
  useEffect(() => {
    const timeSlots = convertIntoTimeSlots(appTimeRecords);
    const colors = creatColorsArray(timeSlots);
    setClockData(timeSlots);
    setColorsData(colors);
  }, [appTimeRecords]);
  useEffect(() => {
    switch (appSelected) {
      case "youtube":
        setAppTimeRecords(timeRecordsYT);
        break;
      case "twitter":
        setAppTimeRecords(timeRecordsTWT);
        break;
      default:
        setAppTimeRecords(timeRecords);
        break;
    }
  }, [appSelected]);

  const option = {
    tooltip: {
      show: false,
    },
    legend: {
      show: false,
    },
    color: [...colorsData],
    series: [
      {
        name: "Clock",
        type: "pie",
        radius: ["100%", "80%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "transparent",
          borderWidth: 1,
        },
        label: {
          show: false,
          position: "center",
        },
        labelLine: {
          show: false,
        },
        data: [...clockData],
      },
    ],
  };
  return (
    <div className={styles.container}>
      <ReactECharts
        option={dummyOptions}
        className={styles.circularProgressContainer}
        style={{ width: "100%", height: "100%" }}
      />
      <ReactECharts
        option={option}
        className={styles.circularProgressContainer}
        style={{ width: "100%", height: "100%" }}
      />
      <div className={styles.clock}>
        {Array.from({ length: 24 }).map((e: any, index: number) => (
          <div
            key={index}
            className={styles.hourMarking}
            style={{
              transform: `rotate(${(index + 1) * 15}deg)`,
            }}
          >
            <div
              className={styles.flexCenter}
              style={{
                background:
                  indexToDisplayNumber(index) !== null ? "black" : "#d8d8d8",
              }}
            >
              <span
                className={styles.displayNumber}
                style={{
                  transform: `rotate(-${(index + 1) * 15}deg)`,
                  color: checkMultipleofSix(index + 1) ? "black" : "grey",
                  fontSize: checkMultipleofSix(index + 1) ? "14px" : "10px",
                }}
              >
                {indexToDisplayNumber(index)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ClockTimeChart;
