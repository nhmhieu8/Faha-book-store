import { Box, Flex, Container, Text, Heading } from "@chakra-ui/react";
import { footerBrand, footerOptions } from "./data";

const Footer = () => {
   return (
      <Box bgColor={"#fff"}>
         <Container
            maxW={"120rem"}
            py={"1rem"}
            bgColor={"#fff"}
         >
            <Flex
               justifyContent={"space-between"}
               alignItems={"stretch"}
            >
               <Flex
                  flexDirection={"column"}
                  gap={"1rem"}
                  maxW={"40rem"}
                  paddingRight={"4rem"}
                  borderRight={"1px solid #000"}
               >
                  <footerBrand.Logo size={"6rem"} />
                  <Text fontSize={"1.3rem"}>{footerBrand.content}</Text>
                  <Flex gap={"1.2rem"}>
                     {footerBrand.socialMedia.map((Platform, idx) => (
                        <Box
                           key={idx}
                           borderRadius={"50px"}
                           border={"2px solid #000"}
                           p={"0.2rem"}
                        >
                           <Platform size={"2.5rem"} />
                        </Box>
                     ))}
                  </Flex>
               </Flex>
               <Flex gap={"4rem"}>
                  {footerOptions.map((option, idx) => (
                     <Box key={idx}>
                        <Heading
                           fontWeight={"500"}
                           mb={"2rem"}
                        >
                           {option.title}
                        </Heading>
                        <Flex
                           flexDirection={"column"}
                           gap={"1rem"}
                        >
                           {option.content.map((item, idx) => {
                              return (
                                 <Flex
                                    key={idx}
                                    alignItems={"center"}
                                    justifyContent={"flex-start"}
                                    gap={"0.5rem"}
                                 >
                                    {item?.icon && <item.icon size={"2.5rem"} />}
                                    <Text fontSize={"1.3rem"}>{item.name}</Text>
                                 </Flex>
                              );
                           })}
                        </Flex>
                     </Box>
                  ))}
               </Flex>
            </Flex>
         </Container>
      </Box>
   );
};

export default Footer;
