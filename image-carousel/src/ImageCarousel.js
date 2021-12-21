import React, { useRef } from 'react';
import ImageCarouselData from './ImageCarouselData';
import './ImageCarousel.css';
const ImageCarousel = () => {
	const carouselNextBtn = useRef();
	const carouselBackBtn = useRef();
	return (
		<div className='carousel'>
			<button className='carouselBtn carouselNextBtn' ref={carouselNextBtn}>
				NEXT
			</button>
			<button className='carouselBtn carouselBackBtn' ref={carouselBackBtn}>
				BACK
			</button>
			<ul>
				{ImageCarouselData.map((item) => (
					<li
						class='slide'
						key={item.id}
						data-active={item.active ? 'data-active' : 'data-inactive'}>
						<img src={item.src} alt={item.alt} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default ImageCarousel;
