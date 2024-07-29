import React, { useState } from 'react';
import '../css/components/dragabeSlider.css'   ; // You can style the slider with CSS

function DraggableSlider({ children, className, width, height }) {
  const [position, setPosition] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartX(e.clientX - position);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;

    const slider = document.getElementById('slider-container');
    const sliderWidth = slider.offsetWidth;
    const newPosition = Math.max(0, Math.min(sliderWidth, e.clientX - slider.getBoundingClientRect().left - startX));

    setPosition(newPosition);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      id="slider-container"
      className={`slider-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ width, height}}
    >
      <div
        className="slider"
        style={{ transform: `translateX(${position}px)` }}
        onMouseDown={handleMouseDown}
      >
        {children}
      </div>
    </div>
  );
}

export default DraggableSlider;
