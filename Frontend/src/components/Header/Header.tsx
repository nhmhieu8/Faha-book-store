import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { Magento } from "@styled-icons/boxicons-logos";
import { Bell, Cart, UserCircle } from "@styled-icons/boxicons-regular";
import MainContainer from "../MainContainer/MainContainer";
import { iconConfig } from "./config";

const rightNavbar = [
   {
      icon: <Bell {...iconConfig} />,
      title: "Thông báo",
   },
   {
      icon: <Cart {...iconConfig} />,
      title: "Giỏ hàng ",
   },
   {
      icon: <UserCircle {...iconConfig} />,
      title: "Tài khoản",
   },
];

const Header = () => {
   return (
      <Box
         bgColor="#fff"
         py="1rem"
      >
         <MainContainer>
            <Flex
               alignItems={"center"}
               justifyContent={"space-between"}
            >
               <Magento size={"7rem"} />
               <Flex
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  gap={"30px"}
               >
                  {rightNavbar.map((item, idx) => (
                     <VStack
                        key={idx}
                        gap={"0"}
                     >
                        {item.icon}
                        <Text fontSize={"1.2rem"}>{item.title}</Text>
                     </VStack>
                  ))}
               </Flex>
            </Flex>
         </MainContainer>
      </Box>
   );
};

export default Header;
