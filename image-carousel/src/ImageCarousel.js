import React, { useState } from 'react';
import './ImageCarousel.css';
const ImageCarousel = ({ SlideData }) => {
	const [currentSlide, setCurrentSlide] = useState(1);
	const slidesLength = SlideData.length;
	const SlideTimeout = 2000; // 2seconds
	const nextSlide = () => {
		setCurrentSlide(currentSlide === slidesLength - 1 ? 0 : currentSlide + 1);
	};
	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? slidesLength - 1 : currentSlide - 1);
	};
	if (!Array.isArray(SlideData) || SlideData.length <= 0) {
		return null;
	}
	setTimeout(nextSlide, SlideTimeout);
	return (
		<div className='carousel'>
			<button className='carouselBtn carouselNextBtn' onClick={nextSlide}>
				NEXT
			</button>
			<button className='carouselBtn carouselBackBtn' onClick={prevSlide}>
				BACK
			</button>
			{SlideData.map((slide, index) => {
				return (
					<div
						className={
							index === currentSlide
								? 'slideContainer active'
								: 'slideContainer'
						}
						key={index}>
						{index === currentSlide && <img src={slide.src} alt={slide.alt} />}
					</div>
				);
			})}
		</div>
	);
};

export default ImageCarousel;
