import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { useStateValue } from "../context/StateContext";

function Home() {
  const { dishes, leaders, promotions } = useStateValue();
  const dataArr = [dishes[0], promotions[0], leaders[0]];
  return (
    <div className="container">
      <h3>Home</h3>
      <ul className="row align-items-start mt-2">
        {dataArr.map((data, index) => (
          <li key={index} className="col-4">
            <Card>
              <CardImg src={data.image} alt={data.name} />
              <CardBody>
                <CardTitle>{data.name}</CardTitle>
                {data.designation ? (
                  <CardSubtitle>{data.designation}</CardSubtitle>
                ) : null}
                <CardText>{data.description}</CardText>
              </CardBody>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
