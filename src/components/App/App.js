import styled from "styled-components";
import Flex from "../Flex/Flex";
import Title from "../Title/Title";
import Console from "../Console/Console";
import Button from "../Button/Button";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
  color: #ffff;
`;

function App() {
  return (
    <AppWrapper>
      <Flex justify={"center"}>
        <Title>Console cmd 2022.</Title>
      </Flex>
      <Flex direction={"column"} margin={"10px 0"}>
        <Console />
        <Button color={"green"} align={"flex-end"}>
          Отправить
        </Button>
      </Flex>
    </AppWrapper>
  );
}

export default App;
