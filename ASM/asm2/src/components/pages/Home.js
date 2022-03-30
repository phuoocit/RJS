import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { StaffContext } from './StaffContext';

import { STAFFS } from './staffs.jsx';
import img from './img.jpg';


function Home() {
    const context = useContext(StaffContext)
    return (
        <div className="container overflow-hidden">
            <h3 className='border-bottom p-2'>Nhân viên</h3>
            <ul className="row g-2">
                {STAFFS.map(staff => (
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
export default Home