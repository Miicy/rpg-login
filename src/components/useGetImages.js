import { useState, useEffect } from 'react';
import fire from "../media/fire2.png";
import pink from "../media//pink2.png";
import ocean from "../media/ocean2.png";
import jungle from "../media/jungle2.png";
import snow from "../media/snow2.png";
import alien from "../media/alien2.png";
import waterfall from "../media/waterfall2.png";
import town from "../media/town2.png";
import desert from "../media/sand2.png";
import grass from "../media/sand2.png";

export function useGetImages() {
    const [images, setImages] = useState/* eslint-disable no-unused-vars */([
      ocean,
      jungle,
      snow,
      fire,
      alien,
      pink,
      waterfall,
      town,
      desert,
      grass,
    ]);
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [currentIndex, images.length]);
  
    return { currentImage: images[currentIndex] };
  }