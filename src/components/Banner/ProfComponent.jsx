import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram ,  AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";


const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            olá <span className="green">Eu Sou</span>
          </h4>
          <h1 className="green">Júlio Soares</h1>
          <h3>Desenvolvedor de Software | Full Stack </h3>
          <p> Tenho sólida experiência no desenvolvimento de soluções completas, desde o back-end até o front-end, utilizando tecnologias modernas como JavaScript, 
            TypeScript, Node.js, React.js, Next.js e SQL. Minhas habilidades abrangem a criação de APIs robustas, design de interfaces de usuário dinâmicas e responsivas, 
            e a implementação de sistemas escaláveis e bem estruturados.
            Sou apaixonado por entregar produtos de alta qualidade, sempre focado em eficiência, 
            usabilidade e inovação. Meu diferencial está na capacidade de compreender desafios complexos e 
            transformá-los em soluções práticas, colaborando ativamente com equipes para alcançar resultados excepcionais. 🚀</p>
          <button>Vamos Convesa ↓</button>
          <Social>
            <p>Confira o Meu</p>
            <div className="social-icons">
              <span>
                <a href="https://www.instagram.com/julio.sooares/"  target="_blank" rel="noreferrer">
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a href="https://github.com/jjpegado" >
                  <AiFillGithub />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/j%C3%BAlio-soares-984246243/"  target="_blank" rel="noreferrer">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src="https://res.cloudinary.com/dcp1tngv1/image/upload/v1683224525/eu/cortada_1_vkvwoo.png"
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 6rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 17rem;
    border-radius: 50px;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 750px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
