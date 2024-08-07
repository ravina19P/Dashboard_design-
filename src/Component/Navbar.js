import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCog, faBell, faUser, faSearch, faHome, faChartLine, faPen, faShoppingCart, faToggleOn, faTableCells,faSignOutAlt  } from '@fortawesome/free-solid-svg-icons';
import './dashboard.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="layout-container">
            <div className="sidebar d-flex flex-column">
                <Link className="active" to="/Dashboard"><FontAwesomeIcon icon={faTableCells} /></Link>
                <Link className="active" to="/home"><FontAwesomeIcon icon={faHome} /></Link>
                <Link to="#graph"><FontAwesomeIcon icon={faChartLine} /></Link>
                <Link to="#writing-pad"><FontAwesomeIcon icon={faPen} /></Link>
                <Link to="#shopping-cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
                <Link to="#shopping-cart"><FontAwesomeIcon icon={faToggleOn } /></Link>
                <Link to="#switch" className="mt-auto"><FontAwesomeIcon icon={faSignOutAlt } /></Link>
            </div>
            <div className="content">
                <nav className="navbar navbar-light bg-dark" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
                    <div className="container-fluid">
                        <div className="d-flex">
                            <div className="input-group" style={{ width: '300px' }}>
                                <span className="input-group-text" id="basic-addon1" style={{ backgroundColor: 'gray', color: 'whitesmoke', border: '1px solid black' }}>
                                    <FontAwesomeIcon icon={faSearch} />
                                </span>
                                <input
                                    className="form-control custom-placeholder"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    style={{
                                        backgroundColor: 'gray',
                                        color: 'whitesmoke',
                                        border: '1px solid black'
                                    }}
                                />
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="mx-2" style={{ padding: '10px', border: '1px solid black', borderRadius: '20px', backgroundColor: 'gray', color: 'whitesmoke' }} />
                            <FontAwesomeIcon icon={faCog} className="mx-2" style={{ padding: '10px', border: '1px solid black', borderRadius: '20px', backgroundColor: 'gray', color: 'whitesmoke' }} />
                            <FontAwesomeIcon icon={faBell} className="mx-2" style={{ padding: '10px', border: '1px solid black', borderRadius: '20px', backgroundColor: 'gray', color: 'whitesmoke' }} />
                            <FontAwesomeIcon icon={faUser} className="mx-2" style={{ padding: '10px', border: '1px solid black', borderRadius: '20px', backgroundColor: 'gray', color: 'whitesmoke' }} />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
