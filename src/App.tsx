import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./Components/Header/Header";
import SideNav from "./Components/SideNav/SideNav";
import { DataContextProvider } from "./Context/DataContext";
import Resumo from "./Pages/Resumo/Resumo";
import Vendas from "./Pages/Vendas";
import "./Global.css";
import Venda from "./Pages/Venda";
function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <SideNav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Resumo />} />
              <Route path="/vendas" element={<Vendas />} />
              <Route path="/vendas/:id" element={<Venda />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
