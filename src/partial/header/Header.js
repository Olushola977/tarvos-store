import { Logo, Search, Bar, Cart } from '../../images/image';
import { Link } from 'react-router-dom';
import './Header.css';

/**
 * Header Component
 */

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
            <div className="container-fluid">
                    <div className="navbar-nav bar">
                        <img alt="" className="img-fluid" src={Bar} />
                    </div>
                    <Link to="/"><img alt="" className="navbar-nav img-fluid" src={Logo} /></Link>
                    <div className="d-flex">
                        <div className="navbar-nav icon mr-3">
                            <img alt="" className="img-fluid" src={Search} />
                        </div>
                        <div className="navbar-nav icon">
                            <Link to="/cart">
                            <img alt="" className="img-fluid" src={Cart} />
                            </Link>
                        </div>
                    </div>
            </div>
        </nav >
    );
}

export default Header;