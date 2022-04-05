import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;

const Title = styled.h1`
    color:#FAA711;;
    margin-bottom: 20px;
`;

const Categories = () => {
  return (
    <div><Title>CATEGORIES</Title> 
    <Container>
       
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
    </div>
  );
};

export default Categories;
