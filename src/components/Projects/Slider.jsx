import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
    img : "https://media.licdn.com/dms/image/v2/D4D2DAQHWFX1KxULCUw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1694647384317?e=1732284000&v=beta&t=zcYW08lf3iHYZ--bEtxWttgKCKAKNXSjFhQiKEQV6pQ",
    disc : "Site de delivery ",
    demo : 'https://cardapio-online-juli.netlify.app/#cardapio'
    },
    {
        img : "https://res.cloudinary.com/dcp1tngv1/image/upload/v1683226080/eu/Captura_de_Tela_5_snxuxz.png",
        disc : "Criador de Tarefas",
        demo : 'https://creat-tarefa.netlify.app/' 
    },
    {
      img : "https://res.cloudinary.com/dcp1tngv1/image/upload/v1683226085/eu/Captura_de_Tela_8_apok6f.png",
      disc : "Projeto Sistema de Chamados ",
      demo : 'https://leafy-creponne-225dc8.netlify.app/'
    },
    {
      img : "https://media.licdn.com/dms/image/v2/D4D22AQGQXBMz_4WNtQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1707920765033?e=1734566400&v=beta&t=7N5mbQHNRrdHLxgvt28uHWiiTlvCRA8XQtqtdY1KTUw",
      disc : "plicação capaz de criptografar textos ",
      demo : 'https://codificador-de-texto-sbto.vercel.app/'
    },

    {
      img : "https://i.postimg.cc/kXg0VRsC/Captura-de-tela-2024-11-15-104500.png",
      disc : "Projeto Portfólio",
      demo : "https://helpful-syrniki-b853a4.netlify.app/pages/home/"
  },
    
    {
        img : "https://res.cloudinary.com/dcp1tngv1/image/upload/v1683226064/eu/Captura_de_Tela_3_rj9y31.png",
        disc : "Projeto Filmaria",
        demo : "https://proje-site-filmes.netlify.app/"
    },
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`