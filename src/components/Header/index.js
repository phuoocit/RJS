import React, { useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from '../../pages/Home';
import { useStateValue } from '../../context/StateContext';
import Departmentpages from '../../pages/Departments';
import Departmentpage from '../../pages/Department';
import StaffPage from '../../pages/Staff';
import SearchPage from '../../pages/Search';
import SalarySheetpage from '../../pages/SalarySheet';
import { SearchContext } from '../../pages/SearchContext';
import imgLogo from '../../assets/images/logo.png';
function Header() {
    const searchContext = useContext(SearchContext)
    const {
        fetchStaff
    } = useStateValue();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link to='/'>
                        <img src={imgLogo} width='40' alt='logo' />
                    </Link>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="nav-tab" role="tablist">
                            <li className="nav-item" name='staffs'
                                onClick={e => fetchStaff('staffs')}>
                                <Link to='/' className="nav-link" aria-selected="true">
                                    <i className="fa fa-users fa-lg"></i>
                                    Nhân Viên
                                </Link>
                            </li>
                            <li className="nav-item"
                                name="departments"
                                onClick={e => fetchStaff('departments')}>
                                <Link to='/Departments' className="nav-link" aria-selected="false"
                                >
                                    <i className="fa fa-address-card fa-lg"></i>
                                    Phòng ban</Link>

                            </li>
                            <li className="nav-item"
                                name="staffsSalary"
                                onClick={e => fetchStaff('staffsSalary')}>
                                <Link to='/SalarySheet' className="nav-link" aria-selected="false">
                                    <i className="fa fa fa-money fa-lg"></i>
                                    Bảng Lương</Link>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search" placeholder="Search"
                            aria-label="Search"
                            value={searchContext.searchInput}
                            onChange={e => searchContext.handleSearch(e.target.value)} />
                        <Link to={`/Search/${searchContext.searchInput}`}
                            className="btn btn-success" type="submit">Search</Link>
                    </form>
                </div>
            </nav>

            <Routes>
                <Route path='/' element={<Homepage></Homepage>}></Route>
                <Route path='/Departments' element={<Departmentpages></Departmentpages>}></Route>
                <Route path='/Departments/:id' element={<Departmentpage></Departmentpage>}></Route>
                <Route path='/SalarySheet' element={<SalarySheetpage></SalarySheetpage>}></Route>
                <Route path='/Staff/:id' element={<StaffPage ></StaffPage>}></Route>
                <Route path='/Search/:id' element={<SearchPage ></SearchPage>}></Route>
            </Routes>
        </>
    )
}

export default Header;