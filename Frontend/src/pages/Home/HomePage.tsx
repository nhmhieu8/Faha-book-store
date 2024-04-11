import MainContainer from "../../components/MainContainer/MainContainer";
import ProductList from "./ProductList";
import { homeData } from "./mocks/data";

const HomePage = () => {
   return (
      <MainContainer>
         <>
            {homeData.map((data, index) => (
               <ProductList
                  data={data}
                  key={index}
               />
            ))}
         </>
      </MainContainer>
   );
};

export default HomePage;
