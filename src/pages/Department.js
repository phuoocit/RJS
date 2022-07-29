import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { StaffContext } from './StaffContext';
import { useStateValue } from '../context/StateContext';
import img from '../assets/images/img.jpg';

function Department() {
    const { staffs, departments } = useStateValue();
    const context = useContext(StaffContext)
    let { id } = useParams();
    const departs = staffs.filter(staff => {
        return staff.departmentId === id
    })
    let nameDepart = departments.find(department =>{
        return department.id === id
    })
    return (
        <div className="container overflow-hidden">
            <h3 className='border-bottom p-2'>{`${nameDepart.name}/ Nhân viên`}</h3>
            <ul className="row g-2">
                {departs.map(depart => (
                    <li className='col-lg-2 col-md-4 col-sm-3' key={depart.id}>
                        <Link to={`/Staff/${depart.id}`}
                            onClick={e => context.handleCilck(depart)}
                        >
                            <div className="border rounded p-2">
                                <img src={img} alt={depart.name} className='img-fluid' />
                                <h3>{depart.name}</h3>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Department