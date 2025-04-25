import { VendasType } from "../Context/DataContext";

const VendaItem = ({ venda }: { venda: VendasType }) => {
  return (
    <div className="box venda">
      <a style={{ fontFamily: "monospace" }} href="">
        {venda.id}
      </a>
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
