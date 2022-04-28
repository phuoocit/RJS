import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { StaffContext } from './StaffContext';

import { STAFFS } from './staffs.jsx';
import img from './img.jpg';

function Home() {
    const context = useContext(StaffContext)

    return (
        <div className="container overflow-hidden">
            <div className="d-flex justify-content-between border-bottom">
                <h3 className='p-2'>Nhân viên</h3>
               
                <Link to='/Formpage' type="button" className="btn btn-primary p-2 fs-4">
                    <i className="fa fa-user-plus fa-lg"></i>
                </Link>
            </div>
            <ul className="row g-2">
                {STAFFS.map(staff => (
                    <li className='col-lg-2 col-md-4 col-sm-3' key={staff.id}>
                        <Link to={`/Staff/${staff.id}`}
                            onClick={e => context.handleCilck(staff)}
                        >
                            <div className="border rounded p-2 text-center">
                                <img src={img} alt={staff.name} className='img-fluid' />
                                <h5>{staff.name}</h5>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )

}
export default Home