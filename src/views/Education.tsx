import "./Education.css";
import { Collapse, Layout } from "antd";
import type { CollapseProps } from "antd";
import { Card, Col, Row } from "antd";
import ReactPlayer from "react-player";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "What is a 3D constructed home?",
    children: (
      <p>
        A 3D constructed home is a house that is built using 3D printing
        technology, which involves layering construction materials (often
        concrete) to create the structure's components or even the entire
        building.
      </p>
    ),
  },
  {
    key: "2",
    label: "What are the advantages of 3D constructed homes",
    children: (
      <p>
        Some advantages include cost-effectiveness, speed of construction,
        design flexibility, energy efficiency, and potential for sustainable
        building practices.
      </p>
    ),
  },
  {
    key: "3",
    label: "Are 3D printed homes safe and durable",
    children: (
      <p>
        Yes, when built to code and with high-quality materials, 3D printed
        homes can be safe and durable, often with added resilience to natural
        disasters.
      </p>
    ),
  },
  {
    key: "4",
    label: "Are 3D constructed homes environmentally friendly",
    children: (
      <p>
        They can be, especially when sustainable construction materials are
        used. 3D printing can also reduce waste and energy consumption during
        construction.
      </p>
    ),
  },
  {
    key: "5",
    label: "Are 3D printed homes affordable?",
    children: (
      <p>
        In many cases, 3D printed homes can be more cost-effective than
        traditional construction methods due to reduced labor and material
        costs.
      </p>
    ),
  },
];

const { Content, Footer } = Layout;

const Education = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  return (
    <Layout
      className="layout"
      style={{
        background:
          "linear-gradient(to left, rgba(22,119,255,0.4), rgba(22,119,255,0.1))",
      }}
    >
      <Content className="education">
        <p className="education-heading">FAQ's</p>
        <p className="education-subheading">
          Here are some of our frequently asked question
        </p>
        <Collapse
          style={{ backgroundColor: "white" }}
          items={items}
          defaultActiveKey={["1"]}
          onChange={onChange}
          className="FAQ"
        />
      </Content>
      <Carousel autoplay className="carousel">
        <div>
          <Row gutter={16}>
            <Col span={8}>
              <Card bordered={false}>
                <ReactPlayer
                  url="https://youtu.be/qG7KMjV8zMk?si=duyBwkcoMwRZZThu"
                  className="react-player"
                  width="100%"
                  height="20rem"
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false}>
                <ReactPlayer
                  url="https://youtu.be/qG7KMjV8zMk?si=duyBwkcoMwRZZThu"
                  className="react-player"
                  width="100%"
                  height="20rem"
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false}>
                <ReactPlayer
                  url="https://youtu.be/qG7KMjV8zMk?si=duyBwkcoMwRZZThu"
                  className="react-player"
                  width="100%"
                  height="20rem"
                />
              </Card>
            </Col>
          </Row>
        </div>
        <div>
          <Row gutter={16}>
            <Col span={8}>
              <Card bordered={false}>
                <ReactPlayer
                  url="https://youtu.be/qG7KMjV8zMk?si=duyBwkcoMwRZZThu"
                  className="react-player"
                  width="100%"
                  height="20rem"
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false}>
                <ReactPlayer
                  url="https://youtu.be/qG7KMjV8zMk?si=duyBwkcoMwRZZThu"
                  className="react-player"
                  width="100%"
                  height="20rem"
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false}>
                <ReactPlayer
                  url="https://youtu.be/qG7KMjV8zMk?si=duyBwkcoMwRZZThu"
                  className="react-player"
                  width="100%"
                  height="20rem"
                />
              </Card>
            </Col>
          </Row>
        </div>
      </Carousel>
    </Layout>
  );
};

export default Education;
