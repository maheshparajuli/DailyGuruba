import React, { useState } from 'react';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';

const Home = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    
    const photos = [
        { src: photo1, date: '2023-01-10', caption: 'New Year Celebration' },
        { src: photo2, date: '2023-02-14', caption: 'Valentine\'s Day Out' },
        { src: photo3, date: '2023-04-05', caption: 'Spring Blossoms' },
    ];

    const handlePhotoClick = (photo) => {
        setSelectedPhoto(photo);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedPhoto(null);
    };

    return (
        <div className="home-container">
            <div className="bio-section">
                <h1>About Me</h1>
                <p>This is a short bio about me. I am passionate about...</p>
            </div>

            <div className="photo-gallery">
                {photos.map((photo, index) => (
                    <div key={index} className="photo-item">
                        <img
                            src={photo.src}
                            alt={photo.caption}
                            className="gallery-photo"
                            onClick={() => handlePhotoClick(photo.src)}
                        />
                        <p className="photo-date">{photo.date}</p>
                        <p className="photo-caption">{photo.caption}</p>
                    </div>
                ))}
            </div>

            {isOpen && (
                <div className="modal" onClick={closeModal}>
                    <img src={selectedPhoto} alt="Selected" className="modal-photo" />
                </div>
            )}
        </div>
    );
};

export default Home;
