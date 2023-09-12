import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          Meus <span className="green">Serviços</span>
        </h4>
        <h1>O que eu faço</h1>
      </Slide>
      <Cards>

        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Desenvolvedor Full Steck "}
            disc={`Meu nome é Júlio Tenório Soares, tenho 22 anos e sou natural
             de Bom Conselho Pernambuco, Desde pequeno, já muito curioso, tive meu primeiro contato com uma maquina aos 7 anos de idade e desde então, 
             criei minha paixão por elas. Aos 17 anos decidi oque iria fazer da minha vida profissional, PROGRAMAR !
              Quis entender oque acontecia por trás do show dos programas e jogos. Mas só aos 22 anos que comecei minha história com programação, Estou a procura 
              de minha primeira oportunidade, tenho experiência com Html e Css avançado, Bootstrap, Javascript, React.js e Wordpress intermédio.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
