import React from 'react';

import { useStateValue } from '../context/StateContext';


function SalarySheet() {
    const { staffs } = useStateValue();

    return (
        <div className="container">
            <ul className='row g-4'>
                {staffs.map(staff => (
                    <li key={staff.id}
                        className='col-lg-4 col-md-6 col-sm-12'
                    >
                        <div className='border rounded p-2'>
                            <h3>{staff.name}</h3>
                            <p className='p-2'>Mã nhân viên: {staff.id}</p>
                            <p className='p-2'>Hệ số lương: {staff.salaryScale}</p>
                            <p className='p-2'>Số giờ làm thêm: {staff.overTime}</p>
                            <p className='px-4 py-2 bg-dark text-white rounded'>Lương: {staff.overTime * 30000 + staff.overTime * 20000}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default SalarySheet