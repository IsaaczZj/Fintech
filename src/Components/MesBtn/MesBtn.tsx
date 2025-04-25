import dayjs from "dayjs";
import React, { CSSProperties } from "react";
import { useData } from "../../Context/DataContext";

import styles from "./MesBtn.module.css";

const MesBtn = ({ n }: { n: number }) => {
  const { setInicio, setFinal } = useData();

  function nomeMes(n: number) {
    const date = dayjs().add(n, "month");
    return date.format("MMMM");
  }
  function setMes(n: number) {
    const date = dayjs().add(n, "month");
    const firtDay = date.startOf("month").format("YYYY-MM-DD");
    const lastDay = date.endOf("month").format("YYYY-MM-DD");

    setInicio(firtDay);
    setFinal(lastDay);
  }

  return (
    <button onClick={() => setMes(n)} className={styles.button}>
      {nomeMes(n)}
    </button>
  );
};

export default MesBtn;
