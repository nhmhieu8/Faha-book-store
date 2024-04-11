import { Header, Footer } from "../components";

type Props = {
   children: JSX.Element;
};

const Layout = ({ children }: Props) => {
   return (
      <>
         <Header />
         {children}
         <Footer />
      </>
   );
};

export default Layout;
