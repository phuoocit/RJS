import dateFormat from 'dateformat';
import clsx from 'clsx';
import { useState } from 'react';
import { STAFFS, DEPARTMENTS } from './staffs';
import styles from './Content.module.scss';




function Content() {

    return (
        <ul className='row g-4'>
            {STAFFS.map(staff =>(
                <li 
                key={staff.id}
                className={clsx('col-2')}
                >
                <img src='https://tiemanhsky.com/wp-content/uploads/2020/03/61103071_2361422507447925_6222318223514140672_n_1.jpg'/>
                <h3>{staff.name}</h3>
                </li>
            ))}
        </ul>
    )

}

export default Content;