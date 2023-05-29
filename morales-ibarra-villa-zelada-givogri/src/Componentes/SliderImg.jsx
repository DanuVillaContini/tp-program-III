import { Carousel, Col, Container, Row } from "react-bootstrap"


function SliderImg() {
    return (
        <Container fluid>
            <Row className="d-flex justify-content-center">
                <Col sm={6} md={8}>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="https://images-ext-1.discordapp.net/external/1bgar9zK5ysCr8RtyauUIjSJPw_XqH2gy0ADeOjmJPY/%3F_nc_cat%3D109%26ccb%3D1-7%26_nc_sid%3De3f864%26_nc_eui2%3DAeGq905DzajilV0cSGMCm2EM7Q0-b8TkkUvtDT5vxOSRS6Ekl9LB86LWvlOnHe_2ZUk%26_nc_ohc%3DR38ODt8zB6wAX8VnWP9%26_nc_ht%3Dscontent.ftuc1-2.fna%26oh%3D00_AfD-sTXY1N4F5lc4Z1HmgntCT1StWdSZUxUQgBN8HCVGsw%26oe%3D647625C8/https/scontent.ftuc1-2.fna.fbcdn.net/v/t39.30808-6/305624480_457260179759639_8308490097705665910_n.jpg?width=750&height=468" alt="First Img Slider" fluid />
                        <Carousel.Caption>
                            <h3>Bienvenidos</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="http://www.frt.utn.edu.ar/imagenes_noticias/e465ae46b07058f4ab5e96b98f101756.jpg" alt="Second Img Slider" fluid />

                        <Carousel.Caption>
                            <h3>Bienvenidos</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="http://www.frt.utn.edu.ar/tecnoweb/imagenes/image/noticias/WhatsApp%20Image%202021-10-14%20at%2015_01_49%20(1).jpeg" alt="Third Img Slider" fluid />

                        <Carousel.Caption>
                            <h3>Bienvenidos</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
        </Container >

        
    )
}

export default SliderImg