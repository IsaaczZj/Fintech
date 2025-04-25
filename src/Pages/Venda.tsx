import React, { CSSProperties } from "react";
import { useParams } from "react-router";
import { DataContextType, useData, VendasType } from "../Context/DataContext";
import { useFetch } from "../Hooks/useFetch";
import Loading from "../Components/Loading";

type VendaSemData = Omit<VendasType, "data">;

const Venda = () => {
  const { id } = useParams();
  const { data, loading } = useFetch<VendaSemData>(
    `https://data.origamid.dev/vendas/${id}`
  );
  if (loading) return <Loading />;
  if (data === null) return null;
  return (
    <div>
      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">
        Preço:{" "}
        {data.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div className="box mb">Status: {data.status}</div>
      <div className="box mb">Pagamento: {data.pagamento}</div>
      <div className="box mb">Parcelas: {data.parcelas}X</div>
    </div>
  );
};

export default Venda;
