import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import Input from '../components/UI/Input';

export default function Signup() {
  return (
    <>
      <Container>
        <Row style={{ marginTop: '4rem' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="First Name"
                    type="text"
                    value=""
                    onChange={() => {}}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last Name"
                    placeholder="Last Name"
                    type="text"
                    value=""
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Input
                label="Email address"
                placeholder="Enter email"
                type="text"
                value=""
                onChange={() => {}}
                errorMessage="We'll never share your email with anyone else."
              />

              <Input
                label="Password"
                placeholder="Password"
                type="password"
                value=""
                onChange={() => {}}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
