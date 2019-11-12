import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';



const HaveCard = (props) => {
    console.log("hello");
    console.log(children);
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="#" alt="Card image cap" />
        <CardBody>
  <CardTitle>{props.title}</CardTitle>
  <CardSubtitle>{props.user}</CardSubtitle>
          <CardText>{props.itemDescription}}</CardText>
          <Button>Delete Item</Button>
          <Button>Update Item</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default HaveCard;