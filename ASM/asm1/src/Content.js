import dateFormat from 'dateformat'; 
import { useState } from 'react';
import { STAFFS, DEPARTMENTS} from './staffs';



function Content() {

    const [info, setInfo] = useState('Bấm vào tên nhân viên để xem thông tin chi tiết');

    // function handleCilck = () =>{
        
    // }

    return (
        <div className="container overflow-hidden">
            <ul className='row g-2'>
                {STAFFS.map((staff) => (
                    <li key={staff.id}
                        className='col-2 staff'
                        onClick={e => setInfo(()=>(
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
            <button className='p-2'
            >
                Thay đổi giao diện
            </button>
            <div>{info}</div>
        </div>
    )

}

export default Content;