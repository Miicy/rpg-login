import { useState, useEffect } from "react";
const imageUrls = [
	"https://i.postimg.cc/T1qwxRjh/fire2.png",
	"https://i.postimg.cc/xC8yq4p0/pink2.png",
	"https://i.postimg.cc/HnPNVM9N/ocean2.png",
	"https://i.postimg.cc/y6v4Mgcc/jungle2.png",
	"https://i.postimg.cc/yYpJ8N4S/snow2.png",
	"https://i.postimg.cc/m2YMZ4ZY/alien2.png",
	"https://i.postimg.cc/sgnJyzKn/waterfall2.png",
	"https://i.postimg.cc/B6PpMzTm/town2.png",
	"https://i.postimg.cc/0yv4r9YP/sand2.png",
	"https://i.postimg.cc/c1M4rLYL/grass2.png",
];

export function useGetImages() {
	const [images] = useState(imageUrls);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [currentIndex2, setCurrentIndex2] = useState(0);

	const currentImage = images[currentIndex];
	const currentImage2 = images[currentIndex2];

	useEffect(() => {
		const imagePromises = images.map((url) => {
			return new Promise((resolve, reject) => {
				const img = new Image();
				img.src = url;
				img.onload = resolve;
				img.onerror = reject;
			});
		});

		Promise.all(imagePromises)
			.then(() => console.log("Images preloaded successfully"))
			.catch((error) => console.error("Error preloading images:", error));
	}, [images]);

	useEffect(() => {
		const interval = setInterval(() => {
		  setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 4000);
	  
		return () => clearInterval(interval);
	  }, [currentIndex, images.length, setCurrentIndex]);
	  
	  useEffect(() => {
		const interval2 = setInterval(() => {
		  setCurrentIndex2((prevIndex) => (prevIndex + 1) % images.length);
		}, 3800);
	  
		return () => clearInterval(interval2);
	  }, [currentIndex2, images.length, setCurrentIndex2]);

	return { currentImage, currentImage2 };
}
