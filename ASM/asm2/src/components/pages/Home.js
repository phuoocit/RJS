import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { StaffContext } from './StaffContext';
import Modal from 'bootstrap';

import { STAFFS } from './staffs.jsx';
import img from './img.jpg';


function Home() {
    const context = useContext(StaffContext)
    var myModal = document.getElementById('myModal')
    var myInput = document.getElementById('myInput')


    return (
        <div className="container overflow-hidden">
            <div className="d-flex justify-content-between border-bottom">
                <h3 className='p-2'>Nhân viên</h3>
                <button type="button" className="btn btn-primary p-2 fs-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <i className="fa fa-user-plus fa-lg"></i>
                </button>

                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Thêm nhân viên</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className="row g-3">
                                    <div className="col-md-4">
                                        <label htmlFor="validationDefault01" className="form-label">First name</label>
                                        <input type="text" className="form-control" id="validationDefault01"  required />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="validationDefault02" className="form-label">Last name</label>
                                        <input type="text" className="form-control" id="validationDefault02"  required />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="validationDefault03" className="form-label">City</label>
                                        <input type="text" className="form-control" id="validationDefault03" required />
                                    </div>
                                   
                                    <div className="col-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="invalidCheck2" required />
                                                <label className="form-check-label" htmlFor="invalidCheck2">
                                                    Agree to terms and conditions
                                                </label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary" type="submit">Submit form</button>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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