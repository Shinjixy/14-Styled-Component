import { CardContainer, CardImage, CardBody, CardPrice, CardProductName, CardTitle, CardText } from './styles/Card';

import styled from 'styled-components';
import Button from './Button';

const Card = (props) => {
  return (
    <div>
      <CardContainer width="500px">
        <CardImage src={props.img} />
        <CardBody>
          <CardPrice>{props.price}</CardPrice>
          <CardProductName>{props.name}</CardProductName>
          <Button />
        </CardBody>
      </CardContainer>
    </div>
  );
}
export default Card;
