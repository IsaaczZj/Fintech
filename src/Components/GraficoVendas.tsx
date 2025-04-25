import React from "react";
import { VendasType } from "../Context/DataContext";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type VendaDia = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

const GraficoVendas = ({ data }: { data: VendasType[] }) => {
  function tranformData(date: VendasType[]): VendaDia[] {
    const dias = data.reduce((acc:{[key:string]:VendaDia}, item) => {
      const dia = item.data.split(" ")[0];
      if (!acc[dia]) {
        acc[dia] = {
          data: dia,
          pago: 0,
          falha: 0,
          processando: 0,
        };
      }
      acc[dia][item.status] += item.preco

      return acc;
    }, {});


    return Object.values(dias)
  }
  const tranformedData = tranformData(data);

  return (
    <div style={{ height: "300px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={tranformedData}>
          <XAxis dataKey="data" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Legend />
          <Line
            type="monotone"
            dataKey="pago"
            stroke="#8884d8"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="processando"
            stroke="#82ca9d"
            strokeWidth={3}
          />
          <Line type="monotone" dataKey="falha" stroke="#ff0000" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoVendas;
