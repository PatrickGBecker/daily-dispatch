import React, { useEffect } from 'react';
import PrimaryCard from '../PrimaryCard/PrimaryCard';
import './PrimaryContainer.css';

const PrimaryContainer = ({ section, sectionArticles, getArticlesBySection }) => {
    const maintainSectArts = () => {
        getArticlesBySection(section);
    };

    useEffect(() => { maintainSectArts() }, [section]);

    const establishPrimaryArticles = () => {
        const primaryCards = sectionArticles.map((article) => {
            return <PrimaryCard key={Math.random()} article={article} />;
        });
        return primaryCards;
    };

    return (
        <section className='primary-container'>
            {establishPrimaryArticles()}
        </section>
    );
};

export default PrimaryContainer;