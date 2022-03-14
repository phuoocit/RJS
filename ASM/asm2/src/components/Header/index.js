import { Routes, Route, Link, Switch } from 'react-router-dom';
import Homepage from '../pages/Home';
import Departmentpage from '../pages/Department';
import StaffPage from '../pages/Staff';
import SalarySheetpage from '../pages/SalarySheet';
import Searchpage from './Search';
import { handleSearch } from './Search';
function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">Nhân Viên</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/Department' className="nav-link active" aria-current="page">Phòng ban</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/SalarySheet' className="nav-link">Bảng Lương</Link>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search" placeholder="Search"
                            aria-label="Search" onChange={e => e.target.value} />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            <Routes>
                <Route path='/' element={<Homepage></Homepage>}></Route>
                <Route path='/Department' element={<Departmentpage></Departmentpage>}></Route>
                <Route path='/SalarySheet' element={<SalarySheetpage></SalarySheetpage>}></Route>
                <Route path='/:id' element={<StaffPage ></StaffPage>}>
                    
                </Route>
            </Routes>
        </>
    )
}

export default Header;