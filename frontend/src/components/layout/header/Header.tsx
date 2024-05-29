import AuthMenu from '../../auth/authMenu/AuthMenu';
import './Header.css';

function Header(): JSX.Element {
    return (
        <div className='Header'>
            <h1>WELCOME TO OUR WEBSITE</h1>

            <AuthMenu />
        </div>
    );
}

export default Header;