// // import Text from "@tidbits/react-tidbits/Text";
// // import Box from "@tidbits/react-tidbits/Box";
// // import Breakpoint from "@tidbits/react-tidbits/Breakpoint";
// // import TopHeader from "@tidbits/react-tidbits/TopHeader";
// // import AppleIcon from "@tidbits/react-tidbits/Icons/AppleIcon";
// // import ProfileIcon from "@tidbits/react-tidbits/Icons/ProfileIcon";
// // import Link from "@tidbits/react-tidbits/Link";

// export function HeaderComponent({ ...props }) {
//   return (
//     // <Breakpoint>
//     //   {({ bpName }) => (
//     //     <TopHeader
//     //       // Allows for responsive layout
//     //       variant={bpName === "md" || bpName === "sm" ? "mini" : "full"}
//     //       banner={
//     //         <TopHeader.Banner href="/">
//     //           <AppleIcon height="20px" width="20px" mr="5px" />
//     //           {bpName !== "sm" && (
//     //             <TopHeader.BannerText>
//     //               {import.meta.env.VITE_APP_NAME}
//     //             </TopHeader.BannerText>
//     //           )}
//     //         </TopHeader.Banner>
//     //       }
//     //       links={
//     //         <TopHeader.Links maxLinks={4}>
//     //           <TopHeader.Link href="/" active>
//     //             Home
//     //           </TopHeader.Link>
//     //           <TopHeader.Link href="/anotherpage">Another View</TopHeader.Link>
//     //           <TopHeader.Link href="/anotherpage/nestedpage">
//     //             Nested Route
//     //           </TopHeader.Link>
//     //           <TopHeader.Link href="/invalidroutehere">404 Test</TopHeader.Link>
//     //         </TopHeader.Links>
//     //       }
//     //       user={
//     //         <TopHeader.User
//     //           aria-label="User Menu"
//     //           childDropdown={
//     //             <TopHeader.UserMenu>
//     //               <TopHeader.UserMenu.Item as="div" cursor="default">
//     //                 <Box
//     //                   display="flex"
//     //                   py={bpName === "md" || bpName === "sm" ? "10px" : "5px"}
//     //                 >
//     //                   <ProfileIcon
//     //                     width="30px"
//     //                     height="30px"
//     //                     mr="10px"
//     //                     color="labelPlaceholder"
//     //                   />
//     //                   <Box flexDirection="co">
//     //                     <Text mb="5px">Johnny Appleseed</Text>
//     //                     <Text>
//     //                       <Link as="button">View Profile</Link>
//     //                     </Text>
//     //                   </Box>
//     //                 </Box>
//     //               </TopHeader.UserMenu.Item>
//     //               <TopHeader.UserMenu.HR />
//     //               <TopHeader.UserMenu.Item href="#">
//     //                 History
//     //               </TopHeader.UserMenu.Item>
//     //               <TopHeader.UserMenu.Item href="#">
//     //                 Analytics
//     //               </TopHeader.UserMenu.Item>
//     //               <TopHeader.UserMenu.Item href="#">
//     //                 Documentation
//     //               </TopHeader.UserMenu.Item>
//     //               <TopHeader.UserMenu.HR />
//     //               <TopHeader.UserMenu.Item href="#">
//     //                 File a Radar
//     //               </TopHeader.UserMenu.Item>
//     //             </TopHeader.UserMenu>
//     //           }
//     //         >
//     //           Johnny Appleseed
//     //         </TopHeader.User>
//     //       }
//     //       {...props}
//     //     />
//     //   )}
//     // </Breakpoint>
//     <>header</>
//   );
// }
import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

const items: MenuProps["items"] = [
  {
    label: "Navigation One",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "Navigation Two",
    key: "app",
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: "Navigation Three - Submenu",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: "alipay",
  },
];

const HeaderComponent: React.FC = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default HeaderComponent;
