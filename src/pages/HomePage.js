import {Button, Card, CardGroup, Carousel, Col, Container, Image, Row} from "react-bootstrap";
import "../styling/HomePage.css";
import voipImg from "../assets/carousel/Voip.webp";
import networkImg from "../assets/carousel/Network.webp";
import cloudImg from "../assets/carousel/Cloud.webp";
import phone from "../assets/WomanOnPhone.webp";
import guy from "../assets/ManOnPhoneAndLaptop.webp";
import team from "../assets/CallCenter.webp";
import {motion} from "framer-motion"
import transition from "../transition";

const HomePage = () => {
    return (
        <>
            <Carousel fade className="bg-dark w-100 d-none d-md-block">
                <Carousel.Item>
                    <Image className="opacity-25" src={voipImg} alt="voip image" fluid/>
                    <Carousel.Caption>
                        <h1>Seamless Communication with VoIP</h1>
                        <p>Connect globally with Voice over Internet Protocol and experience crystal-clear calls with
                            reduced costs.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="opacity-25" src={networkImg} alt="network image" fluid/>
                    <Carousel.Caption>
                        <h1>Robust Networking Solutions</h1>
                        <p>Our network infrastructure ensures your business stays connected with unmatched reliability
                            and speed.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="opacity-25" src={cloudImg} alt="cloud image" fluid/>
                    <Carousel.Caption>
                        <h1>Cloud Services for Businesses</h1>
                        <p>Embrace the cloud for secure, scalable, and accessible data storage and management
                            solutions.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container fluid className="darkRow py-5">
                <Row className="py-5 justify-content-center">
                    <Col lg={8} md={10}>
                        <div className="text-center textDarkRow fadeInScroll">
                            <motion.h1 animate={{scale: 1}} initial={{scale: 0}} className="display-4 mb-3">
                                Connect and Explore with Easy Voice
                            </motion.h1>
                            <hr className="styledGradient"/>
                            <p className="lead">
                                For over 15 years, Easy Voice LLC has been a dedicated supporter of the business sector,
                                providing a range of comprehensive solutions for enterprises. Our offerings include
                                versatile Cloud Services, advanced Cloud-Based PBX Systems, and customized development
                                solutions tailored to meet diverse business needs.
                                {/*Harness the power of advanced VOIP, expansive NETWORK capabilities, and scalable CLOUD*/}
                                {/*solutions. Discover our range of voice plans, add-ons, and long-term contracts designed*/}
                                {/*for seamless communication. Easy Voice bridges the communication gap for businesses and*/}
                                {/*fosters seamless interactions across platforms.*/}
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="mx-5">
                    <CardGroup>
                        <Card className="border-black">
                            <Card.Img variant="top" src={guy}/>
                            <Card.Body>
                                <Card.Title>Plans</Card.Title>
                                <Card.Text>
                                    Choose from a variety of plans tailored for different business sizes. Our plans
                                    offer essential communication tools like HD voice calls and video conferencing,
                                    backed by reliable support. Ideal for seamless day-to-day business communications.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button className="genericButton" href="/plans">
                                    Learn More
                                </Button>
                            </Card.Footer>
                        </Card>
                        <Card className="border-black">
                            <Card.Img variant="top" src={phone}/>
                            <Card.Body>
                                <Card.Title>Add-Ons</Card.Title>
                                <Card.Text>
                                    Customize your plan with add-ons. These features enhance your communication
                                    capabilities and are perfect for businesses looking to optimize their communication
                                    systems.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button className="genericButton" href="/addons">
                                    Learn More
                                </Button>
                            </Card.Footer>
                        </Card>
                        <Card className="border-black">
                            <Card.Img variant="top" src={team}/>
                            <Card.Body>
                                <Card.Title>Contracts</Card.Title>
                                <Card.Text>
                                    Discover the benefits of our long-term contracts, specially designed for businesses
                                    seeking stability and value. Opt for our 3 to 5-year plans and enjoy substantial
                                    discounts, ensuring cost-effective communication solutions over the long term.
                                    Please contact a team member if interested.
                                </Card.Text>
                            </Card.Body>

                            <Card.Footer>
                                <Button className="genericButton" href="#">
                                    Learn More
                                </Button>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </Row>
            </Container>
            {/*<Container className="roundTop">*/}
            {/*<Row className="py-4 align-items-center">*/}
            {/*    <Col lg={6} className="order-lg-2">*/}
            {/*        <Image className="mx-auto" src={devices} alt="Seamless integration" fluid/>*/}
            {/*    </Col>*/}
            {/*    <Col lg={6} className="order-lg-1">*/}
            {/*        <div className="text-center">*/}

            {/*            <h2 className="mb-3">Find Your Perfect Business Communication Solution</h2>*/}
            {/*            <p className="mb-4">*/}
            {/*                Unlock the full potential of your business with Easy Voice's comprehensive suite of*/}
            {/*                digital communication tools. Our solutions are crafted to enhance reliability,*/}
            {/*                streamline operations, and pave the way for scalable growth. Step into the future of*/}
            {/*                seamless connectivity with a plan tailored to your unique needs.*/}
            {/*            </p>*/}
            {/*            <Button variant="outline-light" className="genericButton" href="/pricing">View*/}
            {/*                Plans</Button>*/}
            {/*        </div>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            {/*<Row className="darkRow py-4">*/}
            {/*    <Col lg={6} className="my-auto">*/}
            {/*        <img className="img-fluid mx-auto" src={phone} alt="Advanced communication technology"/>*/}
            {/*    </Col>*/}
            {/*    <Col lg={6} className="my-auto textDarkRow">*/}
            {/*        <div className="text-center">*/}
            {/*            <h2 className="mb-3">Seamless Integration</h2>*/}
            {/*            <p className="mb-4">*/}
            {/*                Integrate our VOIP technology into your existing systems with ease. Our solutions are designed to be compatible with a wide range of hardware and software, ensuring a smooth transition and continued productivity.*/}
            {/*            </p>*/}
            {/*            <Button variant="secondary" className="genericButton" href="#">Learn How</Button>*/}
            {/*        </div>*/}
            {/*    </Col>*/}
            {/*</Row>*/}


            {/*</Container>*/}

            {/*<Container fluid>*/}
            {/*    <Row className="p-5">*/}
            {/*        <Col sm={12} className="d-flex justify-content-center">*/}
            {/*            <div className="text-container" style={{ maxWidth: '500px'}}>*/}
            {/*                <h1 className="textLightRow pb-2">Easy Voice</h1>*/}
            {/*                <hr className="titleHr" />*/}
            {/*                <p className="textLightRow mt-3">*/}
            {/*                    Easy Voice is a simple, straightforward app that connects businesses.*/}
            {/*                    It’s a two-way street that works for everyone.*/}
            {/*                    For a better way to work and a better way to live.*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*    <Row className="darkRow p-3">*/}
            {/*        <Col lg={6}>*/}
            {/*            <img className="d-block m-auto mx-auto w-50" src={phone} alt="phone image"/>.*/}
            {/*        </Col>*/}
            {/*        <Col lg={6} md={12} >*/}
            {/*            <h3 className="m-3 textDarkRow">VOIP | NETWORK | CLOUD</h3>*/}
            {/*            <h1 className="textDarkRow">Communication</h1>*/}
            {/*            <h1 className="textDarkRow">Made Easy</h1>*/}
            {/*            <div className="d-flex justify-content-center m-3">*/}
            {/*                <Button className="genericButton" href="#">*/}
            {/*                    Learn More*/}
            {/*                </Button>*/}
            {/*            </div>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*    <Row className="p-3">*/}
            {/*        <Col lg={6} md={12}>*/}
            {/*            <h3 className="m-3 textLightRow">VOIP | NETWORK | CLOUD</h3>*/}
            {/*            <h1 className="textLightRow">Communication</h1>*/}
            {/*            <h1 className="textLightRow">Made Easy</h1>*/}
            {/*            <div className="d-flex justify-content-center m-3">*/}
            {/*                <Button className="genericButton" href="#">*/}
            {/*                    Learn More*/}
            {/*                </Button>*/}
            {/*            </div>*/}
            {/*        </Col>*/}
            {/*        <Col lg={6}>*/}
            {/*            <img className="d-block m-auto mx-auto w-50" src={devices} alt="phone image"/>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</Container>*/}
        </>


    );
}

export default transition(HomePage);