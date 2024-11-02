import React, { useState, useEffect } from 'react';

import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';

const Home = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const articles = [
        {
            src: photo1,
            date: '2023-01-10',
            caption: 'Mathematical games',
            story: 'This picture was clicked during an mathematical games event organized by INFINITY,a departmental program of Department of mathematics,Kathmandu University.'
        },
        {
            src: photo2,
            date: '2023-02-14',
            caption: 'NCDC2024',
            story: 'This was during the presentation of project at National Conference on Data and Computing Organized by Department of Mathematics,Kathmandu University.' 
        },
        {
            src: photo3,
            date: '2023-04-05',
            caption: 'Project Agni Netra',
            story: 'This was a moment capture during the hackathon organized by Department of environment science and enginnering.Me with my group members Phiroj kumar sah and Sushan Adhikari were testing ml model at this instant.'
        },
    ];

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleArticleClick = (article) => {
        setSelectedArticle(article);
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = (e) => {
        if (e) {
            e.stopPropagation();
        }
        setIsOpen(false);
        document.body.style.overflow = 'unset';
        setTimeout(() => {
            setSelectedArticle(null);
        }, 300);
    };

    return (
        <div className={`home-container ${isLoaded ? 'fade-in' : ''}`}>
            <div className="bio-section slide-in-left">
                <h1>Hello!</h1>
                <h3>Its me Mahesh Parajuli.</h3>
                <p>Welcome to my portfolio.</p>
            </div>

            <div className="news-articles">
                {articles.map((article, index) => (
                    <div 
                        key={index} 
                        className={`article-item slide-in-up`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                        onClick={() => handleArticleClick(article)}
                    >
                        <div className="article-image-container">
                            <img 
                                src={article.src} 
                                alt={article.caption} 
                                className="article-photo" 
                            />
                        </div>
                        <div className="article-info">
                            <h2 className="article-caption">{article.caption}</h2>
                            <p className="photo-date">{article.date}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedArticle && (
                <div 
                    className={`modal-overlay ${isOpen ? 'show' : ''}`} 
                    onClick={closeModal}
                >
                    <div 
                        className={`modal-content ${isOpen ? 'show' : ''}`}
                        onClick={e => e.stopPropagation()}
                    >
                        <h2>{selectedArticle.caption}</h2>
                        <p className="modal-date">{selectedArticle.date}</p>
                        <p className="modal-story">{selectedArticle.story}</p>
                        <button 
                            className="close-modal" 
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;