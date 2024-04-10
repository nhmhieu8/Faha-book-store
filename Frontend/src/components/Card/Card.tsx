import { Image, Text, Box } from "@chakra-ui/react";
import { Cart } from "@styled-icons/boxicons-regular";
import "./style.css";

export type CardData = {
   imgSrc: string;
   title: string;
   price: string;
};

type Props = {
   data: CardData;
};

const Card = ({ data }: Props) => {
   return (
      <Box
         maxW="25rem"
         bg={"#fff"}
         boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
         overflow={"hidden"}
      >
         <Image
            src={data.imgSrc}
            alt={`image of ${data.title}`}
         />
         <Box p={"1.7rem 1.2rem"}>
            <Box mb={"4rem"}>
               <Text
                  fontSize="1.4rem"
                  mb={"0.6rem"}
                  className="product-card-title"
                  minHeight={"4.2rem"}
               >
                  {data.title}
               </Text>
               <Text
                  fontSize="1.6rem"
                  fontWeight={"600"}
               >
                  {`${data.price} ₫`}
               </Text>
            </Box>
            <Box
               display={"flex"}
               alignItems={"center"}
               justifyContent={"space-between"}
               width={"100%"}
               fontSize={"1.4rem"}
               border={"1px solid #000"}
               _hover={{
                  bgColor: "#000",
                  color: "#fff",
               }}
               transition={"0.2s ease"}
               cursor={"pointer"}
               p={"0.2rem"}
            >
               <Box p={"0.3rem"}>
                  <Cart size={"2.4rem"} />
               </Box>
               <Text
                  flexGrow={2}
                  textAlign={"center"}
                  fontWeight={"500"}
               >
                  Thêm vào giỏ hàng
               </Text>
            </Box>
         </Box>
      </Box>
   );
};

export default Card;
