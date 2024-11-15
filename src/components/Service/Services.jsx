import React from "react";
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
            Icon={CgWebsite }
            title={"Desenvolvedor de Software | Full Stack "}
            disc={`Sou um desenvolvedor full stack especializado em criar aplicações completas, integrando tecnologias modernas como JavaScript, TypeScript, Node.js, React.js, Next.js e SQL. Tenho experiência em todo o ciclo de desenvolvimento, desde a análise de requisitos e arquitetura de sistemas até a entrega final e manutenção de projetos escaláveis.
                Minha atuação no back-end inclui a criação de APIs RESTful e Postgres, integração com bancos de dados relacionais e não relacionais, e implementação de práticas de segurança e performance. No front-end, destaco minha habilidade em desenvolver interfaces de usuário interativas e acessíveis, otimizadas para uma experiência intuitiva e responsiva.
                Além das competências técnicas, valorizo a colaboração em equipe e a adoção de metodologias ágeis como Scrum e Kanban, garantindo alinhamento com prazos e metas. Estou sempre em busca de aprimorar minhas habilidades, acompanhando tendências do setor e aprendendo novas ferramentas para entregar soluções inovadoras que agreguem valor ao negócio.
                Meu compromisso vai além de apenas desenvolver código; busco criar produtos impactantes que atendam às necessidades dos usuários e superem as expectativas. 🚀`}
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
