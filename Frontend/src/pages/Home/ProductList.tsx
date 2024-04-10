import { Box, Flex, Heading, Grid, Text } from "@chakra-ui/react";
import { Section, Card } from "../../components";
import { CardData } from "../../components/Card/Card";
import { useCallback, useEffect, useState } from "react";

export type Product = CardData & {
   productId: number;
   subtype: string;
};

export type ProductListData = {
   heading: string;
   subtypeList: string[];
   productList: Product[];
};

type Props = {
   data: ProductListData;
};

const ProductList = ({ data }: Props) => {
   const [currentSubtype, setCurrentSubtype] = useState(data.subtypeList[0]);
   const [currentProductList, setCurrentProductList] = useState(data.productList);

   const onProductListChange = useCallback(
      (subtype: string) => {
         const tempProductList = data.productList.filter((product) => product.subtype === subtype);
         setCurrentProductList(tempProductList);
      },
      [data.productList],
   );

   useEffect(() => {
      onProductListChange(currentSubtype);
   }, [currentSubtype, onProductListChange]);

   return (
      <Box bgColor={"#fff"}>
         <Section>
            <Flex>
               <Heading mb={"1.4rem"}>{data.heading}</Heading>
            </Flex>
            <Flex
               borderBottom={"1px solid #000"}
               mt={"1rem"}
            >
               {data.subtypeList.map((subtype, index) => {
                  if (subtype === currentSubtype) {
                     return (
                        <Box
                           bgColor={"#000"}
                           color={"#fff"}
                           p={"0.5rem 1rem"}
                           cursor={"pointer"}
                           key={index}
                           fontSize={"1.4rem"}
                           fontWeight={"500"}
                        >
                           {subtype}
                        </Box>
                     );
                  }
                  return (
                     <Box
                        p={"0.5rem 1rem"}
                        cursor={"pointer"}
                        key={index}
                        onClick={() => setCurrentSubtype(subtype)}
                        fontSize={"1.4rem"}
                        fontWeight={"500"}
                     >
                        {subtype}
                     </Box>
                  );
               })}
            </Flex>
            <Grid
               templateColumns="repeat(5, 1fr)"
               gap={"2rem 1rem"}
               alignItems={"stretch"}
               justifyItems={"center"}
               margin={"2rem 0 0"}
            >
               {currentProductList.map((itemData, index) => {
                  return (
                     <Card
                        data={itemData}
                        key={index}
                     />
                  );
               })}
            </Grid>
            <Flex justifyContent={"center"}>
               <Box
                  fontSize={"1.4rem"}
                  border={"1px solid #000"}
                  minWidth={"12rem"}
                  maxWidth={"15rem"}
                  bgColor="#000"
                  color="#fff"
                  transition={"0.2s ease"}
                  cursor={"pointer"}
                  p={"0.5rem 0.3rem"}
                  mt={"3rem"}
               >
                  <Text
                     flexGrow={2}
                     textAlign={"center"}
                     fontWeight={"600"}
                  >
                     Xem thêm
                  </Text>
               </Box>
            </Flex>
         </Section>
      </Box>
   );
};

export default ProductList;
