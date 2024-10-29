import React from 'react';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';




const Home = () => {
    const photos = [
        { src: photo1, date: '2023-01-10', caption: 'New Year Celebration' },
        { src: photo2, date: '2023-02-14', caption: 'Valentine\'s Day Out' },
        { src: photo3, date: '2023-04-05', caption: 'Spring Blossoms' },
       
    ];

    return (
        <div className="home-container">
            <h1>Welcome to My Gallery</h1>
            <p>Here are some of my favorite moments.</p>
            
            <div className="photo-gallery">
                {photos.map((photo, index) => (
                    <div key={index} className="photo-item">
                        <img src={photo.src} alt={photo.caption} className="gallery-photo" />
                        <p className="photo-date">{photo.date}</p>
                        <p className="photo-caption">{photo.caption}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
