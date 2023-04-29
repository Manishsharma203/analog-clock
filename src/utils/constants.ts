import { ITimeRecord } from "./types";

export const timeRecordsYT: ITimeRecord[] = [
  {
    startTime: new Date("16/Apr/2023 20:10"),
    endTime: new Date("16/Apr/2023 23:59"),
  },
  {
    startTime: new Date("16/Apr/2023 10:15"),
    endTime: new Date("16/Apr/2023 11:10"),
  },
  {
    startTime: new Date("16/Apr/2023 04:30"),
    endTime: new Date("16/Apr/2023 09:10"),
  },
  {
    startTime: new Date("16/Apr/2023 03:10"),
    endTime: new Date("16/Apr/2023 03:30"),
  },
];
export const timeRecordsTWT: ITimeRecord[] = [
  {
    startTime: new Date("16/Apr/2023 12:15"),
    endTime: new Date("16/Apr/2023 20:10"),
  },
  {
    startTime: new Date("16/Apr/2023 01:10"),
    endTime: new Date("16/Apr/2023 04:59"),
  },
];

export const dummyOptions = {
  tooltip: {
    show: false,
  },
  legend: {
    show: false,
  },
  color: ["#d8d8d8"],
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["100%", "80%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 0,
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
      data: [{ value: 100, name: "dummy" }],
    },
  ],
};
