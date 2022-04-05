
import styled from "styled-components";
// import { featureItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color:#FAA711; 

  ${mobile({ display: "none" })}
`;





const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  margin-top: 50px;
  height: 80%;
  margin-right: 50px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
  color: white
`;

const Desc = styled.p`
  margin: 50px 20px;
  color: white;
  font-weight: 200;
  letter-spacing: 3px;
  margin-left: 5px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  color: white
  background-color: transparent;
  cursor: pointer;
`;

const Features = (item) => {
//   const [slideIndex, setSlideIndex] = useState(0);
//   const handleClick = (direction) => {
//     if (direction === "left") {
//       setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
//     } else {
//       setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
//     }
//   };

  return (
    <Container>
     <InfoContainer>
              <Title>About</Title>
              <Desc>
              There are still 600 million people worldwide that don’t have access to electricity, and over 1 billion people suffer from blackout once in a while. Forbes Renewables was born with the permanent mission to change that, by providing clean, cheaper, no interrupted solar power to families, business, government organisations etc, one at a time!.</Desc>
              <Button>Learn More</Button>
            </InfoContainer>
            <ImgContainer>
              <Image src="https://www.greenbiz.com/sites/default/files/images/articles/featured/green_power.jpg" />
            </ImgContainer>
    </Container>
  );
};

export default Features;
