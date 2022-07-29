import { Link } from 'react-router-dom';
import React, { useContext } from 'react';

import img from '../assets/images/img.jpg';
import { useStateValue } from '../context/StateContext';
import { SearchContext } from './SearchContext';

function Searchpage() {
    const { staffs } = useStateValue();
    const searchContext = useContext(SearchContext)
    const searchList = staffs.filter(staff => {
        return staff.name.toLowerCase().includes(searchContext.searchInput)
    })

    return (
        <div className="container overflow-hidden">
            <h3 className='border-bottom p-2'>{`Tìm kiếm/${searchContext.searchInput}`}</h3>
            <ul className="row g-2">
                {searchList.map(staff => (
                    <Link to='/Staff' key={staff.id} id={staff.id}
                        className='col-lg-2 col-md-4 col-sm-3'
                    >
                        <div className="border rounded p-2">
                            <img src={img} alt={staff.name} className='img-fluid' />
                            <h5>{staff.name}</h5>
                        </div>
                    </Link>
                ))}
            </ul>
        </div>
    )

}
export default Searchpage