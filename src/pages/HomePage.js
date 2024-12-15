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
                        <h1>Streamline Your Business Communication with VoIP</h1>
                        <p>Connect globally using Voice over Internet Protocol for crystal-clear calls and cost-effective solutions.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="opacity-25" src={networkImg} alt="network image" fluid/>
                    <Carousel.Caption>
                        <h1>Reliable Networking Solutions for Your Business</h1>
                        <p>Our robust network infrastructure guarantees your business stays seamlessly connected with unparalleled reliability and speed.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="opacity-25" src={cloudImg} alt="cloud image" fluid/>
                    <Carousel.Caption>
                        <h1>Enhance Your Business with VoIP and Other Essential SMB Cloud Services</h1>
                        <p>Experience crystal-clear calls and cost-effective solutions with Voice over Internet Protocol, alongside our range of essential cloud services for small businesses.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container fluid className="darkRow py-5">
                <Row className="py-5 justify-content-center">
                    <Col lg={8} md={10}>
                        <div className="text-center textDarkRow fadeInScroll">
                            <h1 className="display-4 mb-3">
                                Drive Cost Efficiency and Tailored Solutions with Easy Voice
                            </h1>
                            <hr className="styledGradient"/>
                            <p className="lead">
                                Easy Voice LLC specializes in empowering small businesses, hotels, and enterprises to optimize operational costs with our Voip solutions. Explore our comprehensive range of services including Cloud Services, advanced Cloud-Based PBX Systems, and customized development options designed to meet diverse business needs.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="mx-5 d-none d-lg-block">
                    <CardGroup>
                        <Card className="border-black rounded-4 pt-4">
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
                        <Card className="border-black rounded-4 pt-4">
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
                        <Card className="border-black rounded-4 pt-4">
                            <Card.Img variant="top" src={team}/>
                            <Card.Body>
                                <Card.Title>Long-Term Contracts</Card.Title>
                                <Card.Text>
                                    Experience the advantages of our long-term contracts, tailored for businesses seeking stability and value. Choose from our 3 to 5-year plans and benefit from substantial discounts, ensuring cost-effective communication solutions over time. Contact a team member for more details.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button className="genericButton" href="/contact">
                                    Contact Us
                                </Button>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </Row>
                <Row className="mx-5 d-block d-lg-none">
                        <Card className="border-black rounded-4 pt-4">
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
                        <Card className="border-black rounded-4 pt-4">
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
                        <Card className="border-black rounded-4 pt-4">
                            <Card.Img variant="top" src={team}/>
                            <Card.Body>
                                <Card.Title>Long-Term Contracts</Card.Title>
                                <Card.Text>
                                    Experience the advantages of our long-term contracts, tailored for businesses seeking stability and value. Choose from our 3 to 5-year plans and benefit from substantial discounts, ensuring cost-effective communication solutions over time. Contact a team member for more details.
                                </Card.Text>
                            </Card.Body>

                            <Card.Footer>
                                <Button className="genericButton" href="/contact">
                                    Contact Us
                                </Button>
                            </Card.Footer>
                        </Card>
                </Row>
            </Container>
        </>


    );
}

export default transition(HomePage);