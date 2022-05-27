import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Shingatsu from "../assets/images/animelist/Shigatsu-wa-Kimi-no-Uso.jpg";
import Cheat from "../assets/images/animelist/cheat-kusushi-no-slow.jpg";
import Haikyuu from "../assets/images/animelist/haikyuu.jpg";
import HunterxHunter from "../assets/images/animelist/hunterxhunter.jpg";
import Jujutsu from "../assets/images/animelist/jujutsunokaisen.jpg";
import Kuroko from "../assets/images/animelist/kuroko-no-basket.jpg";

const AnimeList = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">Anime List</h1>
        <br />
        <Row>
          <Col md={4} id="animelist">
            <Card className="MovieImage">
              <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
                  <Card.Img src={Shingatsu} alt="Shingatsu Wa Kimi no Uso" className="images" />
                  <Card.Title className="text-center">Shingatsu Wa Kimi no Uso</Card.Title>
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
                  <Card.Img src={Cheat} alt="Cheat Kusushi no Slow" className="images" />
                  <Card.Title className="text-center">Cheat Kusushi no Slow</Card.Title>
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
                  <Card.Img src={Haikyuu} alt="Haikyuu" className="images" />
                  <Card.Title className="text-center">Haikyuu</Card.Title>
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
                  <Card.Img src={HunterxHunter} alt="Hunter x Hunter" className="images" />
                  <Card.Title className="text-center">Hunter x Hunter</Card.Title>
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
                  <Card.Img src={Jujutsu} alt="Jujutsu no Kaisen" className="images" />
                  <Card.Title className="text-center">Jujutsu no Kaisen</Card.Title>
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
                  <Card.Img src={Kuroko} alt="Kuroko no Basket" className="images" />
                  <Card.Title className="text-center">Kuroko no Basket</Card.Title>
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

export default AnimeList;
