// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "react-bootstrap";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../App.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

// Import images
import kizer from "../assets/projects/kizer.png";
import dealerpro from "../assets/projects/dealerpro.png";
import namaste from "../assets/projects/namaste.png";

export default function Projects() {
	return (
		<>
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={"2"}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={true}
				modules={[EffectCoverflow, Pagination]}
				className="mySwiper"
			>
				<SwiperSlide>
					<Card>
						<Card.Img variant="top" src={kizer} />
						<Card.Body>
							<Card.Title>Kizer</Card.Title>
							<Card.Text>
								Leveraging the PERN tech stack, Kizer aims to
								provide a better experience in the Commercial
								Developement space.
							</Card.Text>
							<Card.Footer>
								React | JavaScript | Node.js | Postgres
							</Card.Footer>
						</Card.Body>
					</Card>
				</SwiperSlide>
				<SwiperSlide>
					<Card>
						<Card.Img variant="top" src={dealerpro} />
						<Card.Body>
							<Card.Title>Dealer Pro</Card.Title>
							<Card.Text>
								Built in MERN, Dealer Pro streamlines and syncronizes vehicle data intake and export 
                                boasting a time savings of 80% on average by automating and dispatching reports.
							</Card.Text>
							<Card.Footer>
								React | JavaScript | Node.js | MongoDB
							</Card.Footer>
						</Card.Body>
					</Card>
				</SwiperSlide>
				<SwiperSlide>
                <Card>
						<Card.Img variant="top" src={namaste} />
						<Card.Body>
							<Card.Title>Namaste</Card.Title>
							<Card.Text>
								Harnessing the power of Java to create a web application allowing for users to host/sign up 
                                for local classes.
							</Card.Text>
							<Card.Footer>
								Java | Spring Boot | MySQL | Tomcat
							</Card.Footer>
						</Card.Body>
					</Card>
				</SwiperSlide>
				{/* <SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-4.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-5.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-6.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-7.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-8.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-9.jpg" />
				</SwiperSlide> */}
			</Swiper>
		</>
	);
}
