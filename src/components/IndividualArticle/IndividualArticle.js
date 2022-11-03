import './IndividualArticle.css';
import React, { useEffect } from 'react';
const dayjs = require('dayjs');

const IndividualArticle = ({
    title,
    section,
    getArticlesBySection,
    sectionArticles,
}) => {
    const foundArticle = sectionArticles.find((art) => art.title === title);

    useEffect(() => {
        getArticlesBySection(section);
    }, [title, section]);

    return (
        <>
            {foundArticle && (
                <section className='single-article'>
                    {console.log(foundArticle)}
                    <article>
                        <h2 className='single-title'>{foundArticle.title}</h2>
                        <p>{foundArticle.byline}</p>
                        <p>
                            Updated:{' '}
                            {dayjs(foundArticle.updated_date).format('dddd, MMMM DD, YYYY')}
                        </p>
                        {foundArticle.multimedia ? (
                            <img
                                className='primary-img'
                                src={foundArticle.multimedia[0].url}
                                alt={foundArticle.title}
                            />
                        ) : (
                            <p></p>
                        )}
                        <p>{foundArticle.abstract}</p>
                    </article>
                    <a
                        className='website'
                        href={foundArticle.short_url}
                        target='_blank'
                        rel='noopener noreferrer'>
                        Read the Full Article Here!
                    </a>
                </section>
            )}
        </>
    );
};

export default IndividualArticle;