import { Outlet } from "@tanstack/router";
import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content, Footer } = Layout;
const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
      label: "Home",
    },
    {
      label: "About",
    },
    {
      label: "Index",
    },
  ];

  return (
    <>
      <Outlet />
      <Layout className="layout">
        <Header style={{ display: "flex", alignItems: "center" }}>
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={items.map((item, index) => {
              return {
                key: index,
                label: item.label,
              };
            })}
          />
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div
            className="site-layout-content"
            style={{ background: colorBgContainer, height: "45vw" }}
          >
            Content
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          ©2023 Created by Godsheritage
        </Footer>
      </Layout>
    </>
  );
};

export default App;
