import React from 'react';
import Helmet from '../Helmet';
import CommonSection from '../UI/Common';
import { Container, Row, Col } from 'reactstrap';

const Contact = () => {
  return (
    <Helmet title='Contact'>
      <CommonSection title='Contact' />
      <section>
        <Container>
          <Row>
            <Col><p>Please find contact information at the bottom of this page.👇</p></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
