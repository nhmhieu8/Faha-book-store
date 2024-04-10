import { extendTheme } from "@chakra-ui/react";

const colors = {
   main: {
      base: "#219ebc",
      shade: {
         10: "#1e8ea9",
         20: "#1a7e96",
         30: "#176f84",
         40: "#145f71",
         50: "#114f5e",
         60: "#0d3f4b",
         70: "#0a2f38",
         80: "#072026",
         90: "#031013",
         100: "#000000",
      },
      tint: {
         10: "#37a8c3",
         20: "#4db1c9",
         30: "#64bbd0",
         40: "#7ac5d7",
         50: "#90cfde",
         60: "#a6d8e4",
         70: "#bce2eb",
         80: "#d3ecf2",
         90: "#e9f5f8",
         100: "#ffffff",
      },
   },
};

const styles = {
   global: {
      html: {
         fontSize: "62.5%",
      },
      body: {
         fontFamily: `"Roboto", sans-serif`,
         backgroundColor: "#eeeeee",
      },
   },
};

const theme = extendTheme({ styles, colors });

export default theme;
