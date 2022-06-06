import React, { useContext } from 'react';
import dateFormat from 'dateformat';
import img from './img.jpg';
import { StaffContext } from './StaffContext';
import { initState } from './reducer';

function Staff() {
    const context = useContext(StaffContext)
    const user = initState.find(staff => {
        return staff.id === context.userId
    })
    return (
        <div className='container'>
            <h5>Nhân viên/ {user.name}</h5>
            <div className='row mb-2'>
                <img src={img} alt={user.name} className='col-lg-3 col-md-4 col-sm-12' />
                <div className='col-lg-9 col-md-8 col-sm-12 g-2'>
                    <h3>Họ và tên: {user.name}</h3>
                    <p>Ngày sinh: {dateFormat(user.doB, 'dd-MMM-yyyy')}</p>
                    <p>Ngày vào công ty: {dateFormat(user.startDate, 'dd-MMM-yyyy')}</p>
                    <p>Phòng ban: {user.department.name}</p>
                    <p>Số ngày nghỉ còn lại: {user.annualLeave}</p>
                    <p>Số ngày đã làm thêm: {user.overTime}</p>
                </div>
            </div>
        </div>
    )
}
export default Staff