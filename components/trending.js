import { Card, Col, Container, Row, Image } from "react-bootstrap";

const Trending = () => {
  return (
    <Container>
      <Row>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/250px-What's_Wrong_with_Secretary_Kim.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>What's Wrong with Secretary Kim</Card.Text>
              <Card.Text>★★★★★</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/018640100_1644485628-Netflix_Twenty_Five_Twenty_One_Press_Conference__24_.jpeg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Twenty Five Twenty One</Card.Text>
              <Card.Text>★★★★★</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/3281114827.jpeg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>EVE</Card.Text>
              <Card.Text>★★★★</Card.Text>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Trending;