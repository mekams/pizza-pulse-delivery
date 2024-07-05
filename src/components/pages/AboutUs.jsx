import React from "react";
import Helmet from "../Helmet";
import Common from "../UI/Common";
import { Container, Row, Col } from "reactstrap";

export default function AboutUs() {
  return (
    <Helmet title="About Us">
      <Common title="About Us" />
      <section>
        <Container>
          <Row>
            <Col>
            <b>
              "At Pizza Pulse, we're not just about delivering delicious pizzas;
              we're passionate about creating memorable experiences with every
              slice. Established with a commitment to quality and convenience,
              Pizza Pulse has become your go-to choice for fresh, hot pizza
              delivered straight to your doorstep. Our story began with a simple
              idea: to redefine pizza delivery by focusing on exceptional taste,
              using only the finest ingredients, and ensuring speedy service
              without compromising on quality. Each pizza is crafted with care,
              from hand-stretched dough made daily to our signature sauce
              bursting with flavor. Whether you prefer classic pepperoni,
              gourmet vegetarian, or something uniquely customized, our menu
              offers a wide range of options to satisfy every craving. Beyond
              our pizzas, Pizza Pulse is about community."
              <br />
              <br />
              "We're proud to serve not just customers, but neighbors and
              friends who rely on us for family dinners, office parties, and
              last-minute gatherings. Our friendly team strives to exceed
              expectations, ensuring your order arrives piping hot and right on
              time, every time. Join us in celebrating the joy of pizza. Whether
              you're enjoying a quiet night in or hosting a festive occasion,
              Pizza Pulse is here to deliver happiness, one slice at a time."
              </b>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
