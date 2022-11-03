import PrimaryCard from '../PrimaryCard/PrimaryCard';
import './Home.css';

const Home = ({ articles }) => {
    const establishPrimaryArticles = () => {
        const primaryCards = articles.map((article) => {
            return <PrimaryCard key={Math.random()} article={article} />;
        });
        return primaryCards;
    };

    return <section className='home'>{establishPrimaryArticles()}</section>;
};

export default Home;