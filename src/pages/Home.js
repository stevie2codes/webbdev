import React from "react";
import styled from "styled-components";
function Home(props) {
  return (
    <div>
      <HomeWrapper>
        <Heading>WEBB DEV LLC</Heading>
        <Button>Explore</Button>
      </HomeWrapper>
    </div>
  );
}

const Button = styled.button`
  padding: 1rem 2.5rem;
  background-color: transparent;
  color: #edebd7;
  border-color: #e3b23c;
  border-radius: 10px;
  width: 100%;
  margin-top: 10px;
`;
const HomeWrapper = styled.div`
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
`;
const Heading = styled.h1`
  font-family: "Work Sans", sans-serif;
  color: #edebd7;
`;

export default Home;
