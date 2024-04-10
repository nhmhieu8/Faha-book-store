import { Box } from "@chakra-ui/react";

type Props = {
   children: JSX.Element | JSX.Element[];
};

const Section = ({ children }: Props) => {
   return (
      <Box
         p={"2rem 2rem"}
         m={"1rem 0"}
      >
         {children}
      </Box>
   );
};

export default Section;
