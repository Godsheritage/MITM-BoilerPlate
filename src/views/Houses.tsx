import React from "react";
import { Row, Col, Card, Layout, Divider } from "antd";
import "./houses.css";

const Houses = () => {
  const { Meta } = Card;
  return (
    <Layout className="houses-sub">
      <div>
        <Divider orientation="left" style={{ fontSize: "1.4rem" }}>
          3 Bedroom Houses
        </Divider>

        <div className="housing-cards">
          <Card
            hoverable
            style={{ width: 290, height: 260 }}
            cover={
              <img
                alt="example"
                src="data:image/jpeg;base64,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"
              />
            }
          >
            <Meta
              title="$130,000 - $150,000"
              // description="www.instagram.com"
            />
          </Card>
          <Card
            hoverable
            style={{ width: 290, height: 260 }}
            cover={
              <img
                alt="example"
                src="https://3dprintingindustry.com/wp-content/uploads/2021/11/pic-Warwick-Blvd-view2-1200-1024x629-1.jpg"
              />
            }
          >
            <Meta
              title="$130,000 - $150,000"
              // description="www.instagram.com"
            />
          </Card>
          <Card
            hoverable
            style={{ width: 290, height: 260 }}
            cover={
              <img
                alt="example"
                src="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/pyiwtmgyulh7wgvka1yr.png"
              />
            }
          >
            <Meta
              title="$130,000 - $150,000"
              // description="www.instagram.com"
            />
          </Card>
          <Card
            hoverable
            style={{ width: 290, height: 260 }}
            cover={
              <img
                alt="example"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vgxTIW5PmamcIZ5wUu66OztStYTq4AiyWA&usqp=CAU"
              />
            }
          >
            <Meta
              title="$130,000 - $150,000"
              // description="www.instagram.com"
            />
          </Card>
        </div>
      </div>
      <div style={{marginTop: "3rem"}}>
        <Divider orientation="left" style={{ fontSize: "1.4rem" }}>
          2 Bedroom Houses
        </Divider>

        <div className="housing-cards">
          <Card
            hoverable
            style={{ width: 290, height: 260 }}
            cover={
              <img
                alt="example"
                src="https://nypost.com/wp-content/uploads/sites/2/2021/03/3d-printed-house-04.jpg?quality=90&strip=all&w=1024"
              />
            }
          >
            <Meta
              title="$90,000 - $100,000"
            />
          </Card>
          <Card
            hoverable
            style={{ width: 290, height: 260 }}
            cover={
              <img
                alt="example"
                src="https://www.xinhuanet.com/english/2021-11/25/1310331699_16378050147781n.jpg"
              />
            }
          >
            <Meta
              title="$90,000 - $100,000"
              // description="www.instagram.com"
            />
          </Card>
          <Card
            hoverable
            style={{ width: 290, height: 260 }}
            cover={
              <img
                alt="example"
                src="https://i.all3dp.com/workers/images/fit=scale-down,w=1200,gravity=0.5x0.5,format=auto/wp-content/uploads/2019/12/01094555/gaia-3d-printed-house-e1666360142362.png"
              />
            }
          >
            <Meta
              title="$90,000 - $100,000"
              // description="www.instagram.com"
            />
          </Card>
          <Card
            hoverable
            style={{ width: 290, height: 260 }}
            cover={
              <img
                alt="example"
                src="https://www.voxelmatters.com/wp-content/uploads/2023/01/diamond-age-780x470.jpeg"
              />
            }
          >
            <Meta
              title="$90,000 - $100,000"
              // description="www.instagram.com"
            />
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Houses;
