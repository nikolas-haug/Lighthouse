import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const Header = props => {
  return (
    <Card>
      <CardBody>
        <CardTitle>{props.heading}</CardTitle>
        <CardSubtitle className="text-justify">{props.title}</CardSubtitle>
      </CardBody>
    </Card>
  );
};

export default Header;
