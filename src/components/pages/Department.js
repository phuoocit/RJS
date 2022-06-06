import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';
import { StaffContext } from './StaffContext';
import { useParams } from 'react-router-dom';
import img from './img.jpg';
import { initState } from './reducer';


function Department() {
    const context = useContext(StaffContext)
    let { id } = useParams();
    const users = initState.filter( staff => {
        return staff.department.name === id;
    })
    return (
        <div className="container overflow-hidden">
            <h3 className='border-bottom p-2'>{`${id}/ Nhân viên`}</h3>
            <ul className="row g-2">
                {users.map(staff => (
                    <li className='col-lg-2 col-md-4 col-sm-3' key={staff.id}>
                        <Link to={`/Staff/${staff.id}`}
                            onClick={e => context.handleCilck(staff)}
                        >
                            <div className="border rounded p-2">
                                <img src={img} alt={staff.name} className='img-fluid' />
                                <h3>{staff.name}</h3>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Department