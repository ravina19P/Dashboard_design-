import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faShoppingCart, faCoins, faCircleNotch, faBullseye, faStar, faUtensils, faBars, faUser, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import GRAPH from './images/GRAPH.avif'

const Dashboard = () => {

    const renderStars = (count) => {
        let stars = [];
        for (let i = 0; i < count; i++) {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} style={{ padding: '4px', color: 'yellow' }} />);
        }
        return stars;
    };

    return (
        <div className='content'>
            <h4 className='text-start fw-bold p-2'>Dashboard</h4>
            <div className='row g-3 m-2'>
                <div className='col-lg-2 col-md-3 col-sm-6 col-6 Dashblock'>
                    <FontAwesomeIcon icon={faShoppingBasket} style={{ padding: '10px', borderRadius: '10px', backgroundColor: '#bfbfec', color: 'blue' }} />
                    <p>Total Orders</p>
                    <div className='d-flex justify-content-between'>
                        <p className='fw-bold fs-2'>75</p>
                        <div className='d-flex align-items-center'>
                            <FontAwesomeIcon icon={faCaretUp} style={{ padding: '10px', color: '#50e150' }} />
                            <span style={{ color: '#50e150' }} >3%</span>
                        </div>
                    </div>
                </div>
                <div className='col-lg-2 col-md-3 col-sm-6 col-6 Dashblock'>
                    <FontAwesomeIcon icon={faShoppingCart} style={{ padding: '10px', borderRadius: '10px', backgroundColor: '#b1deb1', color: 'green' }} />
                    <p>Total Delivered</p>
                    <div className='d-flex justify-content-between'>
                        <p className='fw-bold fs-2'>70</p>
                        <div className='d-flex align-items-center'>
                            <FontAwesomeIcon icon={faCaretDown} style={{ padding: '10px', color: 'red' }} />
                            <span style={{ color: 'red' }} >3%</span>
                        </div>
                    </div>
                </div>
                <div className='col-lg-2 col-md-3 col-sm-6 col-6 Dashblock'>
                    <FontAwesomeIcon icon={faShoppingCart} style={{ padding: '10px', borderRadius: '10px', backgroundColor: '#ffa5003d', color: 'orange' }} />
                    <p>Total Canceled</p>
                    <div className='d-flex justify-content-between'>
                        <p className='fw-bold fs-2'>05</p>
                        <div className='d-flex align-items-center'>
                            <FontAwesomeIcon icon={faCaretUp} style={{ padding: '10px', color: '#50e150' }} />
                            <span style={{ color: '#50e150' }} >3%</span>
                        </div>
                    </div>
                </div>
                <div className='col-lg-2 col-md-3 col-sm-6 col-6 Dashblock'>
                    <FontAwesomeIcon icon={faCoins} style={{ padding: '10px', borderRadius: '10px', backgroundColor: 'pink', color: '#d01aa7' }} />
                    <p>Total Revenue</p>
                    <div className='d-flex justify-content-between'>
                        <p className='fw-bold fs-2'>$12k</p>
                        <div className='d-flex align-items-center'>
                            <FontAwesomeIcon icon={faCaretDown} style={{ padding: '10px', color: 'red' }} />
                            <span style={{ color: 'red' }} >3%</span>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 col-12 Dashblock'>
                    <div className='row'>
                        <div className='col-6'>
                            <p>Net Profit</p>
                            <p className='fw-bold fs-2'>$6759.25</p>
                        </div>
                        <div className="circle-container col-6">
                            <FontAwesomeIcon
                                icon={faCircleNotch}
                                style={{ color: '#0dcaf0', fontSize: '50px' }}
                            />
                            <span className="circle-text">70%</span>
                        </div>
                        <div className='d-flex align-items-center'>
                            <FontAwesomeIcon icon={faCaretUp} style={{ padding: '10px', color: '#50e150' }} />
                            <span style={{ color: '#50e150' }} >3%</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className='row g-3 m-3'>
                <div className='col-8' style={{ backgroundColor: '#555', borderRadius: '10px' }}>
                    <h5 className='text-start fw-bold'>Activity</h5>
                    <img src={GRAPH} style={{ width: '100%', height: '200px' }} alt='img1'></img>
                </div>
                <div className='col-4'>
                    <div className='Dashblock'>
                        <div className='icon-item'>
                            <FontAwesomeIcon icon={faBullseye} style={{ padding: '10px', borderRadius: '20px', backgroundColor: '#ff6f61', color: 'white' }} />
                            <p>Goals</p>
                        </div>
                        <div className='icon-item'>
                            <FontAwesomeIcon icon={faUtensils} style={{ padding: '10px', borderRadius: '20px', backgroundColor: '#6d9dc5', color: 'white' }} />
                            <p>Popular Dishes</p>
                        </div>
                        <div className='icon-item'>
                            <FontAwesomeIcon icon={faBars} style={{ padding: '10px', borderRadius: '20px', backgroundColor: '#ffeb3b', color: 'black' }} />
                            <p>Menu</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row g-3 m-3'>
                <div className='col-md-8 col-sm-8' style={{ backgroundColor: '#555', borderRadius: '10px' }}>
                    <h5 className='text-start fw-bold p-2'>Recent Orders</h5>
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Customer</th>
                                <th scope="col">Order No.</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"><div className='icon-item'>
                                    <FontAwesomeIcon icon={faUser} style={{ padding: '5px', borderRadius: '20px', backgroundColor: '#ff6f61', color: 'white' }} />
                                    <p>Jenny Wilson</p>
                                </div></th>
                                <td>123456</td>
                                <td>$124.50</td>
                                <td><p style={{ backgroundColor: '#315231', margin: '20px', borderRadius: "10px", color: 'green' }}>Delivered</p></td>
                            </tr>
                            <tr>
                                <th scope="row"><div className='icon-item'>
                                    <FontAwesomeIcon icon={faUser} style={{ padding: '5px', borderRadius: '20px', backgroundColor: '#6d9dc5', color: 'white' }} />
                                    <p>Devon Lane</p>
                                </div></th>
                                <td>852852</td>
                                <td>$85.00</td>
                                <td><p style={{ backgroundColor: '#315231', margin: '20px', borderRadius: "10px", color: 'green' }}>Delivered</p></td>
                            </tr>
                            <tr>
                                <th scope="row"><div className='icon-item'>
                                    <FontAwesomeIcon icon={faUser} style={{ padding: '5px', borderRadius: '20px', backgroundColor: '#ffeb3b', color: 'black' }} />
                                    <p>Bang Chan</p>
                                </div></th>
                                <td>963369</td>
                                <td>$85.25</td>
                                <td><p style={{ backgroundColor: '#315231', margin: '20px', borderRadius: "10px", color: 'green' }}>Delivered</p></td>
                            </tr>
                            <tr>
                                <th scope="row"><div className='icon-item'>
                                    <FontAwesomeIcon icon={faUser} style={{ padding: '5px', borderRadius: '20px', backgroundColor: '#ff6f61', color: 'white' }} />
                                    <p>Jenny Wilson</p>
                                </div></th>
                                <td>741147</td>
                                <td>$74.50</td>
                                <td><p style={{ backgroundColor: '#582d2d', margin: '20px', borderRadius: "10px", color: 'red' }}>Canceled</p></td>
                            </tr>
                            <tr>
                                <th scope="row"><div className='icon-item'>
                                    <FontAwesomeIcon icon={faUser} style={{ padding: '5px', borderRadius: '20px', backgroundColor: '#ff6f61', color: 'white' }} />
                                    <p>Jenny Wilson</p>
                                </div></th>
                                <td>852741</td>
                                <td>$100</td>
                                <td><p style={{ backgroundColor: '#582d2d', margin: '20px', borderRadius: "10px", color: 'red' }}>Pending</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='col-md-4 col-sm-8'>
                    <div className='Dashblock'>
                        <h5 className='text-start fw-bold p-2'>Customer's Feedback</h5>
                        <div className='icon-item'>
                            <FontAwesomeIcon icon={faUser} style={{ padding: '5px', borderRadius: '20px', backgroundColor: '#ff6f61', color: 'white' }} />
                            <p>Jenny Wilson</p>
                        </div>
                        <div>{renderStars(5)}</div>
                        <small>Good food, a bit slow service, but great experience.</small>
                        <hr />
                        <div className='icon-item'>
                            <FontAwesomeIcon icon={faUser} style={{ padding: '5px', borderRadius: '20px', backgroundColor: '#6d9dc5', color: 'white' }} />
                            <p>Devon Lane</p>
                        </div>
                        <div>{renderStars(5)}</div>
                        <small>We ordered both Non-Veg and Veg and every dish was exceptional</small>
                        <hr />
                        <div className='icon-item'>
                            <FontAwesomeIcon icon={faUser} style={{ padding: '5px', borderRadius: '20px', backgroundColor: '#ffeb3b', color: 'black' }} />
                            <p>Bang Chan</p>
                        </div>
                        <div>{renderStars(5)}</div>
                        <small>Great staff and really good atmosphere for family.</small>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
