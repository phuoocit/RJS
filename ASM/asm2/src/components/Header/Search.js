import { Link } from 'react-router-dom';
import {  useState } from 'react';
import { STAFFS } from '../pages/staffs.jsx';
import img from '../pages/img.jpg';
import Staff from '../pages/Staff.js';


function Searchpage() {
    const [search, setSearcher] = useState('')
    
    return (
        <div className="container overflow-hidden">
            <h3 className='border-bottom p-2'>123</h3>
            <ul className="row g-2">
                {STAFFS.map(staff => (
                    <Link to='/Staff' key={staff.id} id={staff.id}
                        className='col-lg-2 col-md-4 col-sm-3'
                    >
                        <div className="border rounded p-2">
                            <img src={img} alt={staff.name} className='img-fluid' />
                            <h3>{staff.name}</h3>
                        </div>
                    </Link>
                ))}
            </ul>
        </div>
    )

}
export default Searchpage