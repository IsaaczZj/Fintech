import React from "react";
import fintech from "../../assets/fintech.svg";
import resumo from "../../assets/icons/resumo.svg";
import vendas from "../../assets/icons/vendas.svg";
import webhooks from "../../assets/icons/webhooks.svg";
import configuracoes from "../../assets/icons/configuracoes.svg";
import contato from "../../assets/icons/contato.svg";
import sair from "../../assets/icons/sair.svg";
import FintechSVG from "../../assets/FintechSVG";
import { NavLink } from "react-router";
import styles from "./SideNav.module.css"

const SideNav = () => {
  return (
    <nav className={`${styles.sideNav}`}>
      <FintechSVG title="Logo" />
      <ul>
        <li>
          <span>
            <img src={resumo}/>
          </span>
          <NavLink to="/">Resumo</NavLink>
        </li>
        <li>
          <span>
            <img src={vendas}/>
          </span>
          <NavLink to="/vendas">Vendas</NavLink>
        </li>
        <li>
          <span>
            <img src={webhooks}/>
          </span>
          <a href="">Webhooks</a>
        </li>
        <li>
          <span>
            <img src={configuracoes}/>
          </span>
          <a href="">Configurações</a>
        </li>
        <li>
          <span>
            <img src={contato}/>
          </span>
          <a href="">Contato</a>
        </li>
        <li>
          <span>
            <img src={sair}/>
          </span>
          <a href="">Sair</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
