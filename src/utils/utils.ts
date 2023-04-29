import { IData, ITimeRecord } from "./types";

export const indexToDisplayNumber = (num: number) => {
  if ((num + 1) % 2 === 0) {
    if (num === 23) {
      return 0;
    } else {
      return num + 1;
    }
  } else {
    return null;
  }
};
export const checkMultipleofSix = (num: number) => {
  if (num % 6 === 0) {
    return true;
  } else {
    return false;
  }
};

export const convertIntoTimeSlots = (tr: ITimeRecord[]) => {
  //sorting and creating a easier data-structure with numerial values
  const sortedTimeRecords = tr
    .sort(
      (a, b) =>
        a.startTime.getHours() - b.startTime.getHours() ||
        a.startTime.getMinutes() - b.startTime.getMinutes()
    )
    .map((e) => [
      e.startTime.getHours() + e.startTime.getMinutes() / 60,
      e.endTime.getHours() + e.endTime.getMinutes() / 60,
    ]);

  //creating the data-structure for total day activity with the actiity type
  let outputArr: IData[] = [];
  let initialTime = 0;
  sortedTimeRecords.forEach((e, index) => {
    let diff = Number(e[0]) - initialTime;
    outputArr.push({ value: diff, name: `nonActive-${index}` });
    outputArr.push({
      value: Number((Number(e[1]) - Number(e[0])).toFixed(2)),
      name: `engaged-${index}`,
    });
    initialTime = e[1];
  });
  if (initialTime < 24) {
    let diff = 24 - initialTime;
    outputArr.push({
      value: diff,
      name: `nonActive-${sortedTimeRecords.length}`,
    });
  }
  console.log({ sortedTimeRecords, outputArr });
  return outputArr;
};
export const creatColorsArray = (arr: IData[]) => {
  let result: string[] = [];
  arr.forEach((e: IData) => {
    if (e.name.includes("nonActive")) {
      result.push("#d8d8d8");
    } else {
      result.push("#a699eb");
    }
  });
  console.log({ result });
  return result;
};
