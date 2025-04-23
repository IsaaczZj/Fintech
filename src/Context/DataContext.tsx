import { createContext, useContext } from "react";

import { useFetch } from "../Hooks/useFetch";

type DataContextType = {
  data: VendasType[] | null;
  loading: boolean;
  error: string | null;
};
type VendasType = {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "pix" | "cartao";
  parcelas: number | null;
  data: string;
};

const DataContext = createContext<DataContextType | null>(null);
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData precisa estar em DataContextProvider");
  return context;
};

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<VendasType[]>(
    "https://data.origamid.dev/vendas/"
  );

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
