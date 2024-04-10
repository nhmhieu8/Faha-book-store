import { Product, ProductListData } from "../ProductList";
import {} from "../ProductList";

const vietnameseBookList: Product[] = [
   {
      productId: 1,
      imgSrc:
         "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Thiếu nhi 1",
      price: "500.000",
      subtype: "Thiếu nhi",
   },
   {
      productId: 2,
      imgSrc:
         "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Văn học 2",
      price: "500.000",
      subtype: "Văn học",
   },
   {
      productId: 3,
      imgSrc:
         "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Thiếu nhi 3 Thiếu nhi 3 Thiếu nhi 3 Thiếu nhi 3 Thiếu nhi 3 Thiếu nhi 3 Thiếu nhi 3 Thiếu nhi 3",
      price: "500.000",
      subtype: "Thiếu nhi",
   },
   {
      productId: 4,
      imgSrc:
         "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Thiếu nhi 4",
      price: "500.000",
      subtype: "Thiếu nhi",
   },
   {
      productId: 5,
      imgSrc:
         "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Khoa học 5",
      price: "500.000",
      subtype: "Khoa học",
   },
   {
      productId: 6,
      imgSrc:
         "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Thiếu nhi 6",
      price: "500.000",
      subtype: "Thiếu nhi",
   },
   {
      productId: 7,
      imgSrc:
         "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Văn học 7",
      price: "500.000",
      subtype: "Văn học",
   },
   {
      productId: 8,
      imgSrc:
         "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Khoa học 8",
      price: "500.000",
      subtype: "Khoa học",
   },
];

const foreignBookList: Product[] = [
   {
      productId: 1,
      imgSrc:
         "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Thiếu nhi 1",
      price: "500.000",
      subtype: "Thiếu nhi",
   },
   {
      productId: 2,
      imgSrc:
         "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Văn học 2",
      price: "500.000",
      subtype: "Văn học",
   },
   {
      productId: 3,
      imgSrc:
         "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Thiếu nhi 3",
      price: "500.000",
      subtype: "Thiếu nhi",
   },
   {
      productId: 4,
      imgSrc:
         "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Thiếu nhi 4",
      price: "500.000",
      subtype: "Thiếu nhi",
   },
   {
      productId: 5,
      imgSrc:
         "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Khoa học 5",
      price: "500.000",
      subtype: "Khoa học",
   },
   {
      productId: 6,
      imgSrc:
         "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Thiếu nhi 6",
      price: "500.000",
      subtype: "Thiếu nhi",
   },
   {
      productId: 7,
      imgSrc:
         "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Văn học 7",
      price: "500.000",
      subtype: "Văn học",
   },
   {
      productId: 8,
      imgSrc:
         "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Khoa học 8",
      price: "500.000",
      subtype: "Khoa học",
   },
];

const stationeryList: Product[] = [
   {
      productId: 1,
      imgSrc:
         "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Thiếu nhi 1",
      price: "500.000",
      subtype: "Thiếu nhi",
   },
   {
      productId: 2,
      imgSrc:
         "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Văn học 2",
      price: "500.000",
      subtype: "Văn học",
   },
   {
      productId: 3,
      imgSrc:
         "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Thiếu nhi 3",
      price: "500.000",
      subtype: "Thiếu nhi",
   },
   {
      productId: 4,
      imgSrc:
         "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Thiếu nhi 4",
      price: "500.000",
      subtype: "Thiếu nhi",
   },
   {
      productId: 5,
      imgSrc:
         "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Khoa học 5",
      price: "500.000",
      subtype: "Khoa học",
   },
   {
      productId: 6,
      imgSrc:
         "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Thiếu nhi 6",
      price: "500.000",
      subtype: "Thiếu nhi",
   },
   {
      productId: 7,
      imgSrc:
         "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Văn học 7",
      price: "500.000",
      subtype: "Văn học",
   },
   {
      productId: 8,
      imgSrc:
         "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Khoa học 8",
      price: "500.000",
      subtype: "Khoa học",
   },
];

const getSubtypeList = (productList: Product[]) =>
   productList.reduce((prevSubtypes: string[], currentProduct: Product) => {
      !prevSubtypes.includes(currentProduct.subtype) && prevSubtypes.push(currentProduct.subtype);
      return prevSubtypes;
   }, []);

export const homeData: ProductListData[] = [
   {
      heading: "Sách tiếng việt",
      subtypeList: getSubtypeList(vietnameseBookList),
      productList: vietnameseBookList,
   },
   {
      heading: "Foreign books",
      subtypeList: getSubtypeList(foreignBookList),
      productList: foreignBookList,
   },
   {
      heading: "Văn phòng phẩm",
      subtypeList: getSubtypeList(stationeryList),
      productList: stationeryList,
   },
];
