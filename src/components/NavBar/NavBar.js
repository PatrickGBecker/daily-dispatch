import SectionForm from '../SectionForm/SectionForm';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ getArticlesBySection }) => {
    return (
        <header className='navbar'>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <h1 className='title'>The Daily Dispatch</h1>
            </Link>
            <SectionForm getArticlesBySection={getArticlesBySection} />
        </header>
    );
};

export default NavBar;