import React from 'react';
import Typed from 'react-typed';
import Link from 'next/link';
import BaseLayout from '../components/layouts/BaseLayout';

import { Button, Container, Row, Col } from 'reactstrap';

class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isFlipping: false
    }

    this.roles = ['JavaScript', 'ReactJS', 'Redux', 'ExpressJS', 'MongoDB', 'Web Development'];
  }

  componentDidMount() {
    this.animateCard();
  }

  componentWillUnmount() {
    this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
  }

  animateCard() {
    this.cardAnimationInterval = setInterval(() => {
      this.setState({
        isFlipping: !this.state.isFlipping
      });
    }, 5000);
  }



  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { isFlipping } = this.state;

    return (
      <BaseLayout className={`cover ${isFlipping ? 'cover-1' : 'cover-0'}`} {...this.props.auth}
                  headerType="index"
                  title="Igor Tosic - Portfolio">
        <div className="main-section">
          {/* <div className="background-image">
            <img src="/static/images/background-index.png" />
          </div> */}
          <Container>
            <Row>
              <Col md={{ size: 8, offset: 2 }} className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>Get Your Projects Done</h1>
                  <h2>Simple.Intelligent.Safe</h2>
                  <div className="hero-welcome-bio">
                    <p>
                      { isAuthenticated && <span> <b> {user.name} </b> </span> }
                      Profesional and top quality service in web development.
                    </p>
                  </div>
                </div>
                <Typed
                  loop
                  typeSpeed={60}
                  backSpeed={60}
                  strings={this.roles}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                />

                <div className="hero-welcome-bio">
                <Link href="/about">
                <Button outline color="secondary" size="lg">Let's take look</Button>
                </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    )
  }
}



export default Index;

