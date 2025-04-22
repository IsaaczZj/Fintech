import Header from "./Components/Header";
import SideNav from "./Components/SideNav";
import Resumo from "./Pages/Resumo";
import "./Style.css";
function App() {
  return (
    <div>
      <SideNav />
      <main>
        <Header />
        <Resumo />
      </main>
    </div>
  );
}

export default App;
