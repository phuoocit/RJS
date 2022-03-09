import { DEPARTMENTS } from './staffs.jsx';

function Department() {
    return (
        <div className="container">
            <ul className='row g-4'>
                {DEPARTMENTS.map(department => (
                    <li key={department.id}
                        className='col-lg-4 col-md-6 col-sm-12'
                    >
                        <div className='border rounded p-2'>
                            <h3>{department.name}</h3>
                            <p className='p-2'>Số lượng nhân viên: {department.numberOfStaff}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Department