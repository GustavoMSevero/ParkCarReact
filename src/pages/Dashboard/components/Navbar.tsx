import styled from "@emotion/styled";
import React from "react";
import { useNavigate } from "react-router-dom";

// import { Container } from './styles';

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <NavBarContainer>
      <ul>
        <li onClick={() => navigate("/add-parking")}>
          Adicionar Estacionamento
        </li>
        <li onClick={() => navigate("/teste")}>Atualizar Senha</li>
        <li onClick={() => navigate("/teste")}>Clientes</li>
        <li onClick={() => navigate("/teste")}>Vagas</li>
        <li onClick={() => navigate("/teste")}>Convênios</li>
        <li onClick={() => navigate("/teste")}>Financeiro</li>
        <li onClick={() => navigate("/teste")}>Histórico</li>
        <li onClick={() => navigate("/teste")}>Logo</li>
        <li onClick={() => navigate("/teste")}>Reserva</li>
        <li onClick={() => navigate("/teste")}>Dono Estacionamento</li>
        <li onClick={() => navigate("/teste")}>Sair</li>
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
