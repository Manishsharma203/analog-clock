import React, { useState } from "react";
import ClockTimeChart from "./components/ClockTimeChart";
import styles from "./styles.module.css";

export default function AnalogClock() {
  const [appSelected, setAppSelected] = useState<string>("");
  const selectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAppSelected(event.target.value);
  };
  return (
    <div className={styles.root}>
      <div className={styles.box}>
        <select onChange={selectHandler} className={styles.dropdown}>
          <option value={""}>Select App..</option>
          <option value="youtube">Youtube</option>
          <option value="twitter">Twitter</option>
        </select>
        <ClockTimeChart appSelected={appSelected} />
      </div>
    </div>
  );
}
