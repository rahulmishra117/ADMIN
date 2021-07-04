import React, { Component,useEffect,useState } from "react";
import { connect } from "react-redux";
import data from '../../data';
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup ,Row,Col,Container} from "react-bootstrap";
import PropsTypes from 'prop-types';
// import {setShowFavourites } from "../actions";

class Member extends React.Component  {
 

render(){

  
    return (
      <div>
        <br></br>
        
         
         
        <ListGroup>
          <ListGroup.Item variant="secondary"  >
         
          <Container >
          
              <Row className="post-col">
              
                <Col >rahulmishra0117@gmail.com</Col>
                <Col>rahul</Col>
              </Row>
            
            </Container>
           

          </ListGroup.Item>
         
          </ListGroup>
         
      </div>
    );
  }
}
PropsTypes.propsTypes={
  posts:PropsTypes.array.isRequired,

}
export default Member;
