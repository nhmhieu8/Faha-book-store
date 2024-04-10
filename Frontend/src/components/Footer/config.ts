import { Facebook, Instagram, Magento, Twitter, Youtube } from "@styled-icons/boxicons-logos";
import { Map, Envelope, Phone } from "@styled-icons/boxicons-regular";
import { StyledIcon } from "@styled-icons/styled-icon";

export const footerBrand = {
   Logo: Magento,
   content:
      "Faha Store nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả hệ thống Faha trên toàn quốc.",
   socialMedia: [Facebook, Instagram, Twitter, Youtube],
};

export const footerOptions: {
   title: string;
   hasIcon: boolean;
   content: {
      name: string;
      icon?: StyledIcon;
   }[];
}[] = [
   {
      title: "Dịch vụ",
      hasIcon: false,
      content: [
         { name: "Điều khoản sử dụng" },
         { name: "Chính sách bảo mật thông tin cá nhân" },
         { name: "Chính sách bảo mật thanh toán" },
         { name: "Giới thiệu Fahasa" },
      ],
   },
   {
      title: "Hỗ trợ",
      hasIcon: false,
      content: [
         { name: "Chính sách đổi - trả - hoàn tiền" },
         { name: "Chính sách bảo hành - bồi hoàn" },
         { name: "Chính sách vận chuyển" },
         { name: "Hệ thống trung tâm - nhà sách" },
      ],
   },
   {
      title: "Liên hệ",
      hasIcon: true,
      content: [
         { name: "60-62 Lê Lợi, Q.1, TP. HCM", icon: Map },
         { name: "cskh@fahasa.com.vn", icon: Envelope },
         { name: "1900636467", icon: Phone },
      ],
   },
];
