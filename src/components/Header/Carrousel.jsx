import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import grad1 from '../../photos/graduation1.jpg';
import grad2 from '../../photos/graduation2.jpg';
import gate from '../../photos/gate-just.jpeg';
import mall from '../../photos/mall-just.jpg';

 class HeadCarousel extends Component {
    render() {
        return (
            <div>
                <Carousel fade>
                <Carousel.Item interval={1800}>
                        <img
                            className="d-block w-100"
                            src={gate}
                            alt="First slide"
                            width={"1450"} height={"450"}
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1800}>
                        <img
                            className="d-block w-100"
                            src={mall}
                            alt="First slide"
                            width={"1450"} height={"450"}
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1800}>
                        <img
                            className="d-block w-100"
                            src={grad1}
                            alt="First slide"
                            width={"1450"} height={"450"}
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1800}>
                        <img
                            className="d-block w-100"
                            src={grad2}
                            alt="First slide"
                            width={"1450"} height={"450"}
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default HeadCarousel;