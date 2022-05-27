import { Card, Col, Container, Row } from "react-bootstrap";
import React from "react";
import SpyxFamily from "../assets/images/populer/Spy_x_Family_key_visual.jpg";
import OnePiece from "../assets/images/populer/op-wano.jpg";
import KimetsuNoYaiba from "../assets/images/populer/kimetsu-no-yaiba.jpg";
import BlackClover from "../assets/images/populer/black-clover.jpg";
import Daimaou from "../assets/images/populer/shijou-saikyou-no-daimaou.jpg";
import FairyTail from "../assets/images/populer/fairytail.jpg";

const Populer = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">Anime Poluler</h1>
        <br />
        <Row>
          <Col md={4} id="populer">
            <Card className="MovieImage">
              <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
                  <Card.Img src={SpyxFamily} alt="Spy X Family" className="images" />
                  <Card.Title className="text-center">Spy x Family</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural longer.</Card.Text>
                  <Card.Text className="text-end">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} id="populer">
            <Card className="MovieImage">
              <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
                  <Card.Img src={OnePiece} alt="One Piece" className="images" />
                  <Card.Title className="text-center">One Piece</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural longer.</Card.Text>
                  <Card.Text className="text-end">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} id="populer">
            <Card className="MovieImage">
              <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
                  <Card.Img src={KimetsuNoYaiba} alt="Kimetsu No Yaiba" className="images" />
                  <Card.Title className="text-center">Kimetsu No Yaiba</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural longer.</Card.Text>
                  <Card.Text className="text-end">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} id="populer">
            <Card className="MovieImage">
              <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
                  <Card.Img src={BlackClover} alt="Black Clover" className="images" />
                  <Card.Title className="text-center">Black Clover</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural longer.</Card.Text>
                  <Card.Text className="text-end">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} id="populer">
            <Card className="MovieImage">
              <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
                  <Card.Img src={Daimaou} alt="shijou saikyou no daimaou" className="images" />
                  <Card.Title className="text-center">Shijou Saikyou no Daimaou</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural longer.</Card.Text>
                  <Card.Text className="text-end">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} id="populer">
            <Card className="MovieImage">
              <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
                  <Card.Img src={FairyTail} alt="Fairy Tail" className="images" />
                  <Card.Title className="text-center">Fairy Tail</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural longer.</Card.Text>
                  <Card.Text className="text-end">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Populer;
