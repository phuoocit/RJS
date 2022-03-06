import dateFormat from 'dateformat';
import clsx from 'clsx';
import { useState } from 'react';
import { STAFFS, DEPARTMENTS } from './staffs';
import styles from './Content.module.scss';
import img from './img.jpg';




function Content() {

    return (
        
        <ul className='row g-4'>
            {STAFFS.map(staff =>(
                <li 
                key={staff.id}
                className={clsx('col-2')}
                >
                <img src={img} alt={staff.name}/>
                <h3>{staff.name}</h3>
                </li>
            ))}
        </ul>
    )

}

export default Content;