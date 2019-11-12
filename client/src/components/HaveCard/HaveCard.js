import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const HaveCard = (props) => {
    console.log(props.title);
    console.log(children);
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="#" alt="Card image cap" />
        <CardBody>
  <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default HaveCard;