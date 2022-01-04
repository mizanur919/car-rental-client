import React from "react";
import "react-slideshow-image/dist/styles.css";
import bg from "../../../images/bg1.jpg";
import "./Banner.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import BackgroundSlider from "react-background-slider";
import "bootstrap/dist/css/bootstrap.css";
const bg1 = bg;

const Banner = () => {
  return (
    <div style={{ height: "620px" }}>
      <Container>
        <Row
          style={{ height: "620px", opacity: "0.8" }}
          className="align-items-center"
        >
          <Col xs={12} sm={12} lg={4}>
            <Form className="bg-white p-5 rounded align-items-start">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="w-100 text-start ps-1">
                  Pick-Up Date
                </Form.Label>
                <Form.Control type="date" name="datePick" />
              </Form.Group>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label className="w-100 text-start ps-1">
                  Drop-Off Date
                </Form.Label>
                <Form.Control type="date" name="dropOff" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label className="w-100 text-start ps-1">
                  Selct Your Car
                </Form.Label>

                <select
                  style={{
                    border: "1px solid lightblue",
                    borderRadius: "5px",
                  }}
                  className="w-100 p-1"
                >
                  <option value="">Select You Car</option>
                  <option value="BMW">BMW</option>
                  <option value="Lambergini">Lambergini</option>
                  <option value="Toyoto">Toyoto</option>
                  <option value="TATA">TATA</option>
                </select>
              </Form.Group>
              <Button className="w-100" variant="primary" type="submit">
                Check Availability
              </Button>
            </Form>
          </Col>
          <Col xs={12} sm={12} lg={8}></Col>
        </Row>
      </Container>
      <BackgroundSlider images={[bg1, bg1, bg1]} duration={8} transition={2} />
    </div>
  );
};

export default Banner;
