import { createContext, useEffect, useState } from "react";
import DateRange from "../DateRange";
import Meses from "../Meses";
import { useLocation } from "react-router";
import styles from "./Header.module.css";

const Header = () => {
  const [title, setTitle] = useState("Resumo");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/vendas") {
      setTitle("Vendas");
      document.title = "Fintech | Vendas";
    } else if (location.pathname === "/") {
      document.title = "Fintech | Resumo";

      setTitle("Resumo");
    }
  }, [location]);
  return (
    <header className={`${styles.header} mb`}>
      <div className={`${styles.daterange} mb`}>
        <DateRange />
        <h1 className="box bg-tertiary">{title}</h1>
      </div>
      <Meses />
    </header>
  );
};

export default Header;
