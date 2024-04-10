import { Container } from "@chakra-ui/react";

type Props = {
   children: JSX.Element;
};

const MainContainer = ({ children }: Props) => {
   return <Container maxW={"130rem"}>{children}</Container>;
};

export default MainContainer;
