import { Carousel, Container } from "react-bootstrap"


function SliderImg() {
    return (
        <Container  fluid>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://scontent.ftuc1-2.fna.fbcdn.net/v/t39.30808-6/305624480_457260179759639_8308490097705665910_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGq905DzajilV0cSGMCm2EM7Q0-b8TkkUvtDT5vxOSRS6Ekl9LB86LWvlOnHe_2ZUk&_nc_ohc=R38ODt8zB6wAX8VnWP9&_nc_ht=scontent.ftuc1-2.fna&oh=00_AfD-sTXY1N4F5lc4Z1HmgntCT1StWdSZUxUQgBN8HCVGsw&oe=647625C8" alt="First Img Slider" fluid />
                    <Carousel.Caption>
                        <h3>Bienvenidos</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="http://www.frt.utn.edu.ar/imagenes_noticias/e465ae46b07058f4ab5e96b98f101756.jpg" alt="Second Img Slider" fluid />

                    <Carousel.Caption>
                        <h3>SBienvenidos</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="http://www.frt.utn.edu.ar/tecnoweb/imagenes/image/noticias/WhatsApp%20Image%202021-10-14%20at%2015_01_49%20(1).jpeg" alt="Third Img Slider" fluid />

                    <Carousel.Caption>
                        <h3>Bienvenidos</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default SliderImg