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
                        <Link to='/Staff' key={staff.id} name={staff.id}
                            className='col-lg-2 col-md-4 col-sm-3'
                            onClick={e => context.handleCilck(e.target.name)}
                        >
                            <div className="border rounded p-2" name={staff.id}>
                                <img src={img} alt={staff.name} className='img-fluid' name={staff.id} />
                                <h3 name={staff.id}>{staff.name}</h3>
                            </div>
                        </Link>
                    ))}
                </ul>
            </div>
    )

}
export default Home