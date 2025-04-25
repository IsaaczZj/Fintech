import { createContext, useState } from "react";
import DateRange from "./DateRange";
import Meses from "./Meses";

const Header = () => {
  const [title, setTitle] = useState("Resumo");

  return (
    <header className="mb">
      <div className="mb daterange">
        <DateRange />
        <h1 className="box bg-tertiary">{title}</h1>
      </div>
      <Meses />
    </header>
  );
};

export default Header;
