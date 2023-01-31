import styled from "@emotion/styled";
import { useAtom } from "jotai";
import React from "react";
import { useNavigate } from "react-router-dom";
import { tokenAtom } from "../../../store/token";
import { ownerAtom } from "../../../store/ownerStore";

// import { Container } from './styles';

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const [, setOwner] = useAtom(ownerAtom);
  const [, setToken] = useAtom(tokenAtom as any);

  const doLogout = () => {
    setOwner({});
    setToken("");
    navigate("/login");
  };

  return (
    <NavBarContainer>
      <ul>
        <li onClick={() => navigate("/add-parking")}>
          Adicionar Estacionamento
        </li>
        <li onClick={() => navigate("/update-password")}>Atualizar Senha</li>
        <li onClick={() => navigate("/customer")}>Clientes</li>
        <li onClick={() => navigate("/vaccancy")}>Vagas</li>
        <li onClick={() => navigate("/contract")}>Contratos</li>
        <li onClick={() => navigate("/agreement")}>Convênios</li>
        <li onClick={() => navigate("/financial")}>Financeiro</li>
        <li onClick={() => navigate("/history")}>Histórico</li>
        <li onClick={() => navigate("/logo")}>Logo</li>
        <li onClick={() => navigate("/reservation")}>Reserva</li>
        <li onClick={() => navigate("/owner-parking")}>Dono Estacionamento</li>
        <li onClick={doLogout}>Sair</li>
      </ul>
    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      position: relative;
      padding: 0.75rem 0.25rem;
      font-size: 0.85rem;
      padding-left: 0.75rem;
    }

    li:hover {
      background-color: #e1e1e1;
      cursor: pointer;
    }

    li::after {
      content: "";
      width: 100%;
      height: 1px;
      background-color: #c1c1c1;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
`;
