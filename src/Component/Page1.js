import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faFilter } from '@fortawesome/free-solid-svg-icons';
import myImage from './images/loader.gif';

const Page1 = () => {
    const [info, setInfo] = useState([]);
    const [originalInfo, setOriginalInfo] = useState([]);
    const [countryFilter, setCountryFilter] = useState("");
    const [genderFilter, setGenderFilter] = useState("");
    let [isLoader, setIsLoader] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/users");
                setInfo(response.data.users);
                setIsLoader(false);
                setOriginalInfo(response.data.users);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    const filterData = () => {
        let result = info;

        if (countryFilter) {
            result = result.filter(item => item.address.country === countryFilter || (countryFilter === 'other' && item.address.country !== 'United States'));
        }

        if (genderFilter) {
            result = result.filter(item => item.gender.toLowerCase() === genderFilter.toLowerCase());
        }

        setOriginalInfo(result);
    };

    useEffect(() => {
        filterData();
    }, [info, countryFilter, genderFilter]);

    const handleSortAsc = (key) => {
        const sortedData = [...originalInfo].sort((a, b) => {
            if (key === 'firstName') {
                return a.firstName.localeCompare(b.firstName);
            }
            return a[key] - b[key];
        });
        setOriginalInfo(sortedData);
    };

    const handleSortDesc = (key) => {
        const sortedData = [...originalInfo].sort((a, b) => {
            if (key === 'firstName') {
                return b.firstName.localeCompare(a.firstName);
            }
            return b[key] - a[key];
        });
        setOriginalInfo(sortedData);
    };

    return (
        <div className='container mt-4'>
            <div className="card">
                <div className="card-header row">
                    <h3 className='text-left col-6'>Employee</h3>
                    <div className='row col-6'>
                        <div className='col-2'>
                            <FontAwesomeIcon icon={faFilter} />
                        </div>
                        <div className='col-5'>
                            <select className="form-select" aria-label="Default select example" value={countryFilter} onChange={(e) => setCountryFilter(e.target.value)}>
                                <option value="">Country</option>
                                <option value="United States">United States</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className='col-5'>
                            <select className="form-select" aria-label="Default select example" value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)}>
                                <option value="">Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>ID <FontAwesomeIcon icon={faArrowUp} onClick={() => handleSortAsc('id')} /> <FontAwesomeIcon className='text-danger' icon={faArrowDown} onClick={() => handleSortDesc('id')} /></th>
                                <th>Image</th>
                                <th>Full Name <FontAwesomeIcon icon={faArrowUp} onClick={() => handleSortAsc('firstName')} /> <FontAwesomeIcon className='text-danger' icon={faArrowDown} onClick={() => handleSortDesc('firstName')} /></th>
                                <th>Demography</th>
                                <th>Designation</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        {
                            isLoader && <tbody>
                                <tr>
                                    <td colSpan='6' className="text-center">
                                        <img src={myImage} />
                                    </td>
                                </tr>
                            </tbody>
                        }
                        {!isLoader && <tbody>
                            {
                                originalInfo.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.id} </td>
                                        <td><img src={item.image} alt="User" width="50" /></td>
                                        <td>{item.firstName} {item.maidenName} {item.lastName}</td>
                                        <td>{item.gender.charAt(0).toUpperCase()}/{item.age}</td>
                                        <td>{item.company.title}</td>
                                        <td>{item.address.state}, {item.address.country === "United States" ? "USA" : item.address.country}</td>
                                    </tr>
                                ))
                            }
                        </tbody>}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Page1;
