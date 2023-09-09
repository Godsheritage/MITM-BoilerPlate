import { Layout, Menu, Button } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#214889",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div style={{ marginTop: "39px" }}>
          <img
            src="../src/IMG_9320.PNG"
            alt="logo pics"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ backgroundColor: "rgba(255, 255, 255, 0)", color: "white" }}
        >
          <Menu.Item key="1">
            <span style={{ color: "white" }}>Home</span>
            <Link to="/" />
          </Menu.Item>
          <Menu.Item key="2">
            <span>Education</span>
            <Link to="/education" />
          </Menu.Item>
          <Menu.Item>
            <a
              href="https://www.ally.com/home-loans/home-affordability-calculator/"
              target="_blank"
            >
              Mortgage Calculator
            </a>
          </Menu.Item>
        </Menu>
        <div>
          <Button
            type="primary"
            size={"large"}
            style={{ backgroundColor: "#E86308" }}
          >
            My Account
          </Button>
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;
