import { Link } from 'react-router-dom';
import {  useContext } from 'react';
import { STAFFS } from './staffs.jsx';
import img from '../pages/img.jpg';
import { SearchContext } from './SearchContext'

function Searchpage() {
    const searchContext = useContext(SearchContext)
    const searchList = STAFFS.filter(staff => {
        return staff.name.toLowerCase().includes(searchContext.searchInput)
    })
    return (
        <div className="container overflow-hidden">
            <h3 className='border-bottom p-2'>{`Tìm kiếm/${searchContext.searchInput}`}</h3>
            <ul className="row g-2">
                {searchList.map(staff => (
                    <Link to='/Staff' key={staff.id} id={staff.id}
                        className='col-lg-2 col-md-4 col-sm-3'
                    >
                        <div className="border rounded p-2">
                            <img src={img} alt={staff.name} className='img-fluid' />
                            <h3>{staff.id}</h3>
                        </div>
                    </Link>
                ))}
            </ul>
        </div>
    )

}
export default Searchpage