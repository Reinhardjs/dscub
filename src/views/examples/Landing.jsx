/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardImg,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import CardsFooter from "components/Footers/CardsFooter.jsx";

// index page sections
import Download from "../IndexSections/Download.jsx";

class Landing extends React.Component {
    state = {};

    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }

    render() {
        var marginStyle = {
            marginLeft: "10px"
        };

        return (
            <>
                <DemoNavbar/>
                <main ref="main">
                    <div className="position-relative">
                        {/* shape Hero */}
                        <section className="section section-lg section-shaped">
                            <div className="shape shape-style-1 shape-default">
                                <span/>
                                <span/>
                                <span/>
                                {/*<span />*/}
                                {/*<span />*/}
                                {/*<span />*/}
                                {/*<span />*/}
                                {/*<span />*/}
                                {/*<span />*/}
                            </div>
                            <Container className="py-lg-md d-flex">
                                <div className="col px-0">
                                    <Row>
                                        <Col lg="6">
                                            <h1 className="display-3 text-white">
                                                Developer Student Clubs {" "}
                                                <span>Universitas Brawijaya</span>
                                            </h1>

                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg="6">
                                            <br/>
                                            <iframe width="500" height="280"
                                                    src="https://www.youtube.com/embed/DcN_hcHXR_0" frameBorder="0"
                                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen/>
                                        </Col>
                                        <Col lg="6">
                                            <p className="lead text-white">
                                                Developer Students Club atau yang biasa disingkat dengan DSC
                                                merupakan program dari Google Developers yang dirancang untuk membantu
                                                mahasiswa
                                                dan mahasiswi dalam mengembangkan kemampuan dan pengetahuan di
                                                pengembangan
                                                aplikasi mobile dan web dan terbuka bagi seluruh mahasiswa
                                                maupun mahasiswi dengan semua tingkatan kemampuan.
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                            {/* SVG separator */}
                            {/*<div className="separator separator-bottom separator-skew">*/}
                            {/*<svg*/}
                            {/*xmlns="http://www.w3.org/2000/svg"*/}
                            {/*preserveAspectRatio="none"*/}
                            {/*version="1.1"*/}
                            {/*viewBox="0 0 2560 100"*/}
                            {/*x="0"*/}
                            {/*y="0"*/}
                            {/*>*/}
                            {/*<polygon*/}
                            {/*className="fill-white"*/}
                            {/*points="2560 0 2560 100 0 100"*/}
                            {/*/>*/}
                            {/*</svg>*/}
                            {/*</div>*/}
                        </section>
                        {/* 1st Hero Variation */}
                    </div>


                    {/*       <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Download Argon
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              design
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              system
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              creative
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Build Something
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              business
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              vision
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              success
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Prepare Launch
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              marketing
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              product
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              launch
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>*/}


                    <section className="section section-lg">
                        <Container className="pb-100">
                            <Row className="row-grid align-items-center">

                                <Col className="order-md-1" md="6">
                                    <div className="pr-md-5">
                                        {/*<div*/}
                                        {/*className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">*/}
                                        {/*<i className="ni ni-settings-gear-65"/>*/}
                                        {/*</div>*/}
                                        <h3>Ada kegiatan apa aja?</h3>
                                        <p>
                                            Dibantu sama yang ahli di bidangnya, DSC akan membantu proses pembelajaran
                                            kalian dari :
                                        </p>
                                        <ul className="list-unstyled mt-5">
                                            <li className="py-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <Badge
                                                            className="badge-circle mr-3"
                                                            color="success"
                                                        >
                                                            <i className="ni ni-settings-gear-65"/>
                                                        </Badge>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-0">
                                                            Workshop
                                                        </h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <Badge
                                                            className="badge-circle mr-3"
                                                            color="success"
                                                        >
                                                            <i className="ni ni-atom"/>
                                                        </Badge>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-0">
                                                            Project Building
                                                        </h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <Badge
                                                            className="badge-circle mr-3"
                                                            color="success"
                                                        >
                                                            <i className="ni ni-satisfied"/>
                                                        </Badge>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-0">
                                                            Join the Global Challenges
                                                        </h6>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>


                                <Col className="order-md-2" md="6">
                                    <img
                                        alt="..."
                                        className="img-fluid floating"
                                        src={require("assets/img/brand/dsc_logo.png")}
                                    />

                                </Col>


                            </Row>
                        </Container>
                    </section>
                    <section className="section bg-secondary">
                        <Container>

                            <br/><br/><br/><br/>

                            <Row>

                                <Col className="mb-5 mb-lg-0">
                                    <iframe width="480" height="260"
                                            src="https://www.youtube.com/embed/XRUVTbTUYwE" frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen/>
                                </Col>

                                <Col className="mb-5 mb-lg-0">
                                    <iframe width="480" height="260"
                                            src="https://www.youtube.com/embed/RnWWBusoySs" frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen/>
                                </Col>

                            </Row>


                            <Row className="justify-content-center text-center mb-lg">
                                <Col lg="8">
                                    <br/><br/>
                                    <h2 className="display-3">Misi DSC UB</h2>
                                    <p className="lead text-muted">
                                        Kita ingin semua mahasiswa khususnya mahasiswa Universitas Brawijaya bisa lebih
                                        kritis lagi
                                        akan permasalahan sekitar dan bisa membantu menciptakan solusinya dari
                                        pendekatan teknologi.
                                        Jangan takut karena kita akan belajar dari awal.
                                        <br/>
                                        #SharinginAja di DSC UB :)
                                    </p>
                                </Col>
                            </Row>

                        </Container>
                    </section>
                    {/*<section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/ill/ill-2.svg")}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">Modern Interface</h4>
                      <p className="text-white">
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever.
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Awesome Support
                          </h5>
                          <p>
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                          </p>
                          <a
                            className="text-success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">
                            Modular Components
                          </h5>
                          <p>
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                          </p>
                          <a
                            className="text-warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
             SVG separator
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>*/}
                    <section className="section section-lg">
                        <Container>
                            <Row className="justify-content-center text-center mb-lg">
                                <Col lg="8">
                                    <h2 className="display-3">The amazing Team</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="mb-5 mb-lg-0">
                                    <div className="px-4">
                                        <img
                                            alt="..."
                                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                            src={require("assets/img/photo/vivy.jpeg")}
                                            style={{width: "200px"}}
                                        />
                                        <div className="pt-4 text-center">
                                            <h5 className="title">
                                                <span className="d-block mb-1">Vivy Junita</span>
                                                <small className="h6 text-muted">DSC Lead</small>
                                            </h5>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="mb-5 mb-lg-0">
                                    <div className="px-4">
                                        <img
                                            alt="..."
                                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                            src={require("assets/img/photo/putra.jpeg")}
                                            style={{width: "200px"}}
                                        />
                                        <div className="pt-4 text-center">
                                            <h5 className="title">
                                                <span className="d-block mb-1">Putra Utama</span>
                                                <small className="h6 text-muted">Core Team</small>
                                            </h5>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="mb-5 mb-lg-0">
                                    <div className="px-4">
                                        <img
                                            alt="..."
                                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                            src={require("assets/img/photo/fandis.jpeg")}
                                            style={{width: "200px"}}
                                        />
                                        <div className="pt-4 text-center">
                                            <h5 className="title">
                                                <span className="d-block mb-1">Arifandis Winata</span>

                                                <small className="h6 text-muted">Core Team</small>
                                            </h5>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="mb-5 mb-lg-0">
                                    <div className="px-4">
                                        <img
                                            alt="..."
                                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                            src={require("assets/img/photo/imam.jpeg")}
                                            style={{width: "200px"}}
                                        />
                                        <div className="pt-4 text-center">
                                            <h5 className="title">
                                                <span className="d-block mb-1">Imam Farouqi</span>
                                                <small className="h6 text-muted">Core Team</small>
                                            </h5>
                                        </div>
                                    </div>
                                </Col>

                            </Row>

                            <Row>

                                <Col className="mb-5 mb-lg-0">
                                    <div className="px-2">
                                        <img
                                            alt="..."
                                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                            src={require("assets/img/photo/wildan.jpeg")}
                                            style={{width: "200px"}}
                                        />
                                        <div className="pt-4 text-center">
                                            <h5 className="title">

                                                <span className="d-block mb-1">Wildan Oktavian</span>
                                                <small className="h6 text-muted">Core Team</small>
                                            </h5>
                                        </div>
                                    </div>

                                </Col>


                                <Col className="mb-5  mb-lg-0">
                                    <div className="px-2">
                                        <img
                                            alt="..."
                                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                            src={require("assets/img/photo/rein.jpeg")}
                                            style={{width: "200px"}}
                                        />
                                        <div className="pt-4 text-center">
                                            <h5 className="title">
                                                <span className="d-block mb-1">Reinhard Jonathan</span>
                                                <small className="h6 text-muted">Core Team</small>
                                            </h5>
                                        </div>
                                    </div>
                                </Col>

                            </Row>
                        </Container>

                    </section>
                    {/*<section className="section section-lg pt-0">
            <Container>
              <Card className="bg-gradient-warning shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="8">
                      <h3 className="text-white">
                        We made website building easier for you.
                      </h3>
                      <p className="lead text-white mt-3">
                        I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers. I
                        understand culture.
                      </p>
                    </Col>
                    <Col className="ml-lg-auto">
                      <Button
                        block
                        className="btn-white"
                        color="default"
                        href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        size="lg"
                      >
                        Download React
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section>*/}
                    <section className="section section-lg bg-gradient-default">
                        <Container className="pb-200">
                            <Row className="text-center justify-content-center">
                                <Col lg="10">
                                    <h2 className="display-3 text-white">Notifikasi</h2>
                                    {/*<p className="lead text-white">*/}
                                    {/*According to the National Oceanic and Atmospheric*/}
                                    {/*Administration, Ted, Scambos, NSIDClead scentist, puts the*/}
                                    {/*potentially record low maximum sea ice extent tihs year down*/}
                                    {/*to low ice.*/}
                                    {/*</p>*/}
                                </Col>
                            </Row>
                            <Row className="row-grid mt-5">
                                {/*<Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-settings text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Building tools</h5>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-ruler-pencil text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Grow your market</h5>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-atom text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Launch time</h5>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>*/}
                            </Row>
                        </Container>
                        {/* SVG separator */}
                        <div className="separator separator-bottom separator-skew zindex-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 2560 100"
                                x="0"
                                y="0"
                            >
                                <polygon
                                    className="fill-white"
                                    points="2560 0 2560 100 0 100"
                                />
                            </svg>
                        </div>
                    </section>
                    <section className="section section-lg pt-lg-0 section-contact-us">
                        <Container>
                            <Row className="justify-content-center mt--300">
                                <Col lg="8">
                                    <Card className="bg-gradient-secondary shadow">
                                        <CardBody className="p-lg-5">
                                            <h4 className="mb-1">Ingin selalu mendapat pemberitahuan?</h4>
                                            <p className="mt-0">
                                                Kirimkan email kamu, supaya gak ketinggalan event-event menarik dari
                                                dsc.
                                            </p>
                                            <FormGroup
                                                className={classnames("mt-5", {
                                                    focused: this.state.nameFocused
                                                })}
                                            >
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-user-run"/>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Your name"
                                                        type="text"
                                                        onFocus={e => this.setState({nameFocused: true})}
                                                        onBlur={e => this.setState({nameFocused: false})}
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup
                                                className={classnames({
                                                    focused: this.state.emailFocused
                                                })}
                                            >
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-email-83"/>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Email address"
                                                        type="email"
                                                        onFocus={e => this.setState({emailFocused: true})}
                                                        onBlur={e => this.setState({emailFocused: false})}
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            {/*<FormGroup className="mb-4">*/}
                                            {/*<Input*/}
                                            {/*className="form-control-alternative"*/}
                                            {/*cols="80"*/}
                                            {/*name="name"*/}
                                            {/*placeholder="Type a message..."*/}
                                            {/*rows="4"*/}
                                            {/*type="textarea"*/}
                                            {/*/>*/}
                                            {/*</FormGroup>*/}
                                            <div>
                                                <Button
                                                    block
                                                    className="btn-round"
                                                    color="default"
                                                    size="lg"
                                                    type="button"
                                                >
                                                    Send Message
                                                </Button>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    {/*<Download />*/}
                </main>
                <CardsFooter/>
            </>
        );
    }
}

export default Landing;
