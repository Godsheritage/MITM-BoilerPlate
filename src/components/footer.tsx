import { Breadcrumb, Layout } from "antd";
import Chat from "../utils/ChatBot"

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer style={{ textAlign: "center", } }>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      Roofe ©2023 Created by Godsheritage
      <Chat/>
    </Footer>
  );
};

export default FooterComponent;
