import { NavLink } from "react-router";
import { VendasType } from "../../Context/DataContext";
import styles from "./VendaItem.module.css";

const VendaItem = ({ venda }: { venda: VendasType }) => {
  return (
    <div className={`${styles.venda} box`}>
      <NavLink to={`/vendas/${venda.id}`}>{venda.id}</NavLink>
      <div>{venda.nome}</div>
      <div>
        {venda.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

export default VendaItem;
