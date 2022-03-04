import dateFormat from 'dateformat';
import { useState } from 'react';
import { STAFFS, DEPARTMENTS } from './staffs';



function Content() {
    
    const [info, setInfo] = useState('Bấm vào tên nhân viên để xem thông tin chi tiết');
    const [layout, setLayOut] = useState('col-6');

    const handleLayOut = (e) => {
        setLayOut(e.target.name)
    }
    return (
        <div className="container overflow-hidden ">
            <h2>Chọn giao diện:</h2>
            
            <div className="mb-4">
                <button type="button" className="btn btn-secondary mx-4 btn-lg" name='col-6' onClick={e => handleLayOut(e)}>2 Cột</button>
                <button type="button" className="btn btn-secondary mx-4 btn-lg" name='col-3' onClick={e => handleLayOut(e)}>4 cột</button>
                <button type="button" className="btn btn-secondary mx-4 btn-lg" name='col-2' onClick={e => handleLayOut(e)}>6 cột</button>
            </div>
            <ul className='row g-2'>
                {STAFFS.map((staff) => (
                    <li key={staff.id}
                        className={layout}
                        onClick={e => setInfo(() => (
                            <div className='info px-2 rounded-2 border bg-light'>
                                <h3 >Họ và tên: {staff.name}</h3>
                                <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
                                <p>Ngày vào công ty: {dateFormat(staff.startDate)}</p>
                                <p>Phòng ban: {staff.department.name}</p>
                                <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                                <p>Số ngày đã làm thêm: {staff.overTime}</p>
                            </div>
                        ))}
                    >

                        <h3 className='p-2 rounded-2 border bg-light staff-item'>{staff.name}</h3>
                    </li>
                ))}
            </ul>
            <div>{info}</div>
        </div>
    )

}

export default Content;