import "./home.css";
import { Space, Typography, Button } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";

const { Content, Footer } = Layout;
const Home: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { Text } = Typography;
  return (
    <>
      <Layout className="layout">
        <Content
          style={{
            display: "flex",
            flexDirection: "row",
            background:
              "linear-gradient(to right, rgba(22,119,255,0.6), rgba(22,119,255,0.2))",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="site-layout-content home">
            {/* <div></div> */}
            <p className="title">Welcome to roofe</p>
            <p className="home-body">
              Building Generational Wealth one Roofe at a time
            </p>
            <div className="home-btns">
              <Link to={"/form"}>
                <Button type="primary" size={"large"}>
                  Home Buyer
                </Button>
              </Link>
              <Button
                type="primary"
                size={"large"}
                style={{ backgroundColor: "#E86308" }}
              >
                Home Renter
              </Button>
            </div>
          </div>
          <div className="background-img"></div>
        </Content>
      </Layout>
    </>
  );
};

export default Home;
