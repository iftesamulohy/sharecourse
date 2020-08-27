import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,CardGroup
  } from 'reactstrap';
  import "./Single.css";
const Single = (props) => {
    const data = props.data;
    const {img,name,instructor,duration,price} = data;
    
    return (
       
        <div>
            <Card className="single-card">
        <CardImg top width="70%" src={img} alt="Card image cap" className="card-image" />
        <CardBody>
          <CardTitle><h3>{name} </h3><small>By- {instructor}</small></CardTitle>
    <CardSubtitle><strong>Price: {price}$</strong></CardSubtitle>
    <CardText><strong>Course Duration: {duration}</strong></CardText>
          <Button color="danger" onClick={()=>props.handleEnroll(data)}>Enroll Now</Button>
        </CardBody>
      </Card>
        </div>
        
      
       
       
    );
};

export default Single;