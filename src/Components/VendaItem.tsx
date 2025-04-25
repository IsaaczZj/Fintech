import { NavLink } from "react-router";
import { VendasType } from "../Context/DataContext";
import Venda from "../Pages/Venda";

const VendaItem = ({ venda }: { venda: VendasType }) => {

  return (
    <div className="box venda">
      <NavLink to={`/vendas/${venda.id}`} style={{ fontFamily: "monospace" }}>
        {venda.id}
      </NavLink>
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
