
import styled, { ThemeProvider } from "styled-components";
import { useRef } from "react";
import React, { useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Carousel from "../Carousel";
import Button from "../Button";
import { dark } from "../../styles/Themes";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 70em) {
    width: 85%;
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    & > *:last-child {
      width: 80%;
    }
  }
  @media (max-width: 40em) {
  

    &>*:last-child{
      width: 90%;
    }
  }
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  min-height:60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 50vh;
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  };

  @media (max-width: 40em) {
  font-size: ${(props) => props.theme.fontxl};

  };

  @media (max-width: 30em) {

  font-size: ${(props) => props.theme.fontlg};

  };
`;
const SubTitle = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;


  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  font-size: ${(props) => props.theme.fontmd};

  };

  @media (max-width: 40em) {
  font-size: ${(props) => props.theme.fontmd};

  };

  @media (max-width: 30em) {

  font-size: ${(props) => props.theme.fontsm};

  };
`;
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  font-size: ${(props) => props.theme.fontsm};

  };

  @media (max-width: 40em) {
  font-size: ${(props) => props.theme.fontsm};

  };

  @media (max-width: 30em) {

  font-size: ${(props) => props.theme.fontxs};

  };
`;
const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display:flex;
  align-self: flex-start;


  @media (max-width: 64em) {

   width:100%;
   display:flex;
   align-items:center;
   justify-content:center;

   button{
    margin:0 auto;
   }
  
    };
`;
const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    ScrollTrigger.create({
      trigger: element,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true,
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);
  return (
    <Section id="about" ref={ref}>
      <Container>
        <Box>
          <Carousel />
        </Box>
        <Box>
          <Title>Welcome To The  
            <br />  Weirdos Club.</Title>
          <SubTitle>
            The WEIRDOS CLUB is a private collection of NFTs—unique digital
            collectibles. The Weirdos are stored as ERC-721 tokens on the
            Ethereum blockchain and hosted on IPFS.
          </SubTitle>
          <SubText>
            With more than 200+ hand drawn traits, each NFT is unique and comes
            with a membership to an exclusive group of successful investors.
            Join an ambitious ever-growing community with multiple benefits and
            utilities.
          </SubText>
          <ButtonContainer>
            <ThemeProvider theme={dark}>
              <Button text="JOIN OUR DISCORD" link="#" />
            </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  );
};

export default About;