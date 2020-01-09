import React from "react";
import { Col, Progress, Row } from "antd";

const PokeAttr = props => {
  return (
    <>
      <Row gutter={8} style={{ padding: "auto" }}>
        <Col span={8}>
          <h3 style={{ weight: "bold" }}> {props.title}</h3>
        </Col>
        <Col span={16}>
          <Progress
            strokeWidth={25}
            strokeColor="#f3701a"
            percent={props.value}
            showInfo={false}
          />
        </Col>
      </Row>
    </>
  );
};

export default PokeAttr;
