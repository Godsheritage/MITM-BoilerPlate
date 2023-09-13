import { Input, Layout } from "antd";
import { Button } from "antd";
import { Link } from "react-router-dom";

const FormView = () => {
  return (
    <Layout style={{ height: "83vh", backgroundColor: "white" }}>
      <p>Enter basic information</p>
      <div style={{ display: "flex" }}>
        <Input placeholder="Basic usage" />
        <Input placeholder="Basic usage" />
      </div>
      <Input placeholder="Basic usage" />
      <Input placeholder="Basic usage" />
      <Input placeholder="Basic usage" />
      <Link to={"/houses"}>
        <Button>View Home</Button>
      </Link>
    </Layout>
  );
};

export default FormView;
