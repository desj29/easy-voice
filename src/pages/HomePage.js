import {Button, Card, CardGroup, Carousel, Col, Container, Image, Row} from "react-bootstrap";
import "../styling/HomePage.css";
import voipImg from "../assets/carousel/Voip.webp";
import networkImg from "../assets/carousel/Network.webp";
import cloudImg from "../assets/carousel/Cloud.webp";
import phone from "../assets/WomanOnPhone.webp";
import guy from "../assets/ManOnPhoneAndLaptop.webp";
import team from "../assets/CallCenter.webp";
import {motion} from "framer-motion"
import transition from "../components/layout/transition";

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
                                Since 2017, Easy Voice LLC has been a dedicated supporter of the business sector,
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
                                <Button className="genericButton" href="/contact">
                                    Learn More
                                </Button>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </Row>
            </Container>
        </>


    );
}

export default transition(HomePage);