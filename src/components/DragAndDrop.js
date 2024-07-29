import React, { useState } from 'react';
import '../css/components/drag-drop.css';

const DragAndDrop = ({setFile, selectedImage, setSelectedImage}) => {
 

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageSrc = reader.result;
        setSelectedImage(imageSrc);
        setFile(file);
        /* document.getElementById('image-preview').src = imageSrc; */
      };
      reader.readAsDataURL(file);
    }
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  

  return (
    <div className="image-picker" 
    onChange={handleImageChange}
    onDrop={handleDrop}
    onDragOver={handleDragOver}>
      <input
        type="file"
        accept="image/*"
        id="file-input"
       
        style={{ display: 'none' }}
      />
      <div
        className="image-container"
        onClick={() => document.getElementById('file-input').click()}
      >
        {selectedImage ? (
          <img src={selectedImage} alt="Selected" id="image-preview"/>
        ) : (
          <div className="placeholder">Drop an Image here</div>
        )}
      </div>
    </div>
  );
};

export default DragAndDrop;
