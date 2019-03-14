import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Row, Col } from 'reactstrap';

class About extends React.Component {

  render() {
    return (
      <BaseLayout title="Igor Tosic - Learn More About Me" {...this.props.auth}>
        <BasePage className="about-page">
          <Row>
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">E-commerce, web application, programming, consultation</h1>
                <h4 className="subtitle fadein">We have solution for your CMS. We can optimise your working process. We can contribute and improve your marked position.</h4>
                <p className="subsubTitle fadein">We are developing eCommerce web application with the payment process.
                Our application is cloud-based and easy to use and maintain.
                When it comes to yours websites we do marketing automation, data analyst, converting, authentication and authorization, working with APIs.
                We are your solution for startup, small business. </p>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein">
              <p>My name is Igor Tosic and I am an experienced web developer. </p>
              <p>Get informed, collaborate and discover projects I was working on through the years!</p>
                <p>
                I have 18 years working experience in different types of industry,
                such as Broadcast Media, IT/Computer and software, government and private sector
                and Digital Marketing. I am available to work in a variety of environments
                with modern technologies.
                As the web developer, my focus is on developing web applications, UX,
                working with APIs, data analyst, converting, marketing automation,
                authentication and authorization. 
                </p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default About;
