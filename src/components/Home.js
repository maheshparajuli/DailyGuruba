import React, { useState } from 'react';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';

const Home = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const articles = [
        {
            src: photo1,
            date: '2023-01-10',
            caption: 'New Year Celebration',
            story: 'This year’s New Year celebration was filled with joy, laughter, and unforgettable moments shared with family and friends. We enjoyed fireworks, delicious food, and a night of dancing.'
        },
        {
            src: photo2,
            date: '2023-02-14',
            caption: 'Valentine\'s Day Out',
            story: 'Valentine’s Day was a beautiful day spent exploring the city with my loved one. We visited our favorite spots, enjoyed a lovely dinner, and made memories to cherish forever.'
        },
        {
            src: photo3,
            date: '2023-04-05',
            caption: 'Spring Blossoms',
            story: 'The spring season brought stunning blossoms and vibrant colors. I spent a day in the park, capturing the beauty of nature as everything bloomed and came to life.'
        },
    ];

    const handleArticleClick = (article) => {
        setSelectedArticle(article);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedArticle(null);
    };

    return (
        <div className="home-container">
            <div className="bio-section">
                <h1>About Me</h1>
                <p>This is a short bio about me. I am passionate about...</p>
            </div>

            <div className="news-articles">
                {articles.map((article, index) => (
                    <div key={index} className="article-item" onClick={() => handleArticleClick(article)}>
                        <img src={article.src} alt={article.caption} className="article-photo" />
                        <h2 className="article-caption">{article.caption}</h2>
                        <p className="photo-date">{article.date}</p>
                    </div>
                ))}
            </div>

            {isOpen && selectedArticle && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content">
                        <h2>{selectedArticle.caption}</h2>
                        <p className="modal-date">{selectedArticle.date}</p>
                        <p className="modal-story">{selectedArticle.story}</p>
                        <button className="close-modal" onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
