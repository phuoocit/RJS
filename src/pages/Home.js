import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import {
    Button, Label, Col, Modal, Row, ModalBody, ModalHeader, ModalFooter
} from 'reactstrap';
import { LocalForm, Errors, Control } from 'react-redux-form';
import { StaffContext } from './StaffContext';
import { required, minLength, maxLength, isNumber } from './constants';
import * as ActionTypes from "../context/actions";
import { useStateValue } from '../context/StateContext';
import img from '../assets/images/img.jpg';
function Home() {
    const Staffcontext = useContext(StaffContext)
    const [open, setOpen] = useState(false)
    const {
        staffs,
        dispatch,
        state,
    } = useStateValue();
    const staff = {
        id: state.staffs.length,
        image: '/assets/images/alberto.png',
        departmentId: 'Dept01',
    }
    const handleSubmit = (values) => {
        const newStaff = { ...staff, ...values }
        dispatch({
            type: ActionTypes.ADD_STAFF,
            payload: newStaff
        })
        setOpen(false)
        return newStaff
    }
    return (
        <div className="container">
            <div className="d-flex justify-content-between border-bottom">
                <h3 className='p-2'>Nhân viên</h3>
                <Button color="primary" className="p-2 fs-4" onClick={() => setOpen(true)}>
                    <i className="fa fa-user-plus fa-lg"></i>
                </Button>

                <Modal isOpen={open} toggle={() => setOpen(false)}>
                    <ModalHeader toggle={() => setOpen(false)}>
                        Thêm nhân viên
                    </ModalHeader>
                    <LocalForm onSubmit={(values) => handleSubmit(values)}>
                        <ModalBody>
                            <Row className="form-group mb-2">
                                <Label md={4} htmlFor="name">Họ và tên:</Label>
                                <Col>
                                    <Control.text md={8} model=".name" id="name" name="name"
                                        placeholder="Your name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group mb-2">
                                <Label md={4} htmlFor="doB">Ngày sinh:</Label>
                                <Col>
                                    <Control.text md={8} model=".doB" id="doB" name="doB" type='date'
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".doB"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group mb-2">
                                <Label md={4} htmlFor="startDate">Ngày vào làm:</Label>
                                <Col>
                                    <Control.text md={8} model=".startDate" id="startDate" name="startDate" type='date'
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".startDate"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group mb-2">
                                <Label md={4} htmlFor="department">Phòng ban:</Label>
                                <Col>
                                    <Control.select md={8} model="department" id="department" name="department" className="form-control"
                                        onChange={(e) => staff.departmentId = e.target.value}
                                        validators={{
                                            required
                                        }}>
                                        <option value='Dept01' name="Sale">Sale</option>
                                        <option value='Dept02' name="HR">HR</option>
                                        <option value='Dept03' name="Marketing">Marketing</option>
                                        <option value='Dept04' name="IT">IT</option>
                                        <option value='Dept05' name="Finance">Finance</option>
                                    </Control.select>
                                    <Errors
                                        className="text-danger"
                                        model=".department"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group mb-2">
                                <Label md={4} htmlFor="annualLeave">Số ngày phép:</Label>
                                <Col>
                                    <Control.text md={8} model=".annualLeave" id="annualLeave" name="annualLeave" type="number"
                                        className="form-control"
                                        validators={{
                                            required, isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".annualLeave"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group mb-2">
                                <Label md={4} htmlFor="overTime">Số ngày tăng ca:</Label>
                                <Col>
                                    <Control.text md={8} model=".overTime" id="overTime" name="overTime" type="number"
                                        className="form-control"
                                        validators={{
                                            required, isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".overTime"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group mb-2">
                                <Label md={4} htmlFor="salaryScale">Hệ số lương:</Label>
                                <Col>
                                    <Control.text md={8} model=".salaryScale" id="salaryScale" name="salaryScale" type="number"
                                        className="form-control"
                                        validators={{
                                            required, isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".salaryScale"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                        }}
                                    />
                                </Col>
                            </Row>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" color="primary">
                                Add Staff
                            </Button>
                            <Button color="secondary" onClick={() => setOpen(false)}>
                                Đóng
                            </Button>
                        </ModalFooter>
                    </LocalForm>
                </Modal>
            </div>
            <ul className="row g-2 mt-2">
                {staffs.map((staff, index) => (
                    <li className='col-lg-2 col-md-4 col-sm-3' key={staff.id}>
                        <div className="border rounded p-2 text-center">
                            <div>
                                <Link to={`/Staff/${staff.id}`}
                                    onClick={e => Staffcontext.handleCilck(staff)}
                                >
                                    <img src={img} alt={staff.name} className='img-fluid' />
                                </Link>
                            </div>
                            <h5>{staff.name}</h5>
                            <Button color="danger" onClick={() => dispatch({
                                type: ActionTypes.DELETE_STAFF,
                                payload: index
                            })}>
                                &times;
                            </Button>
                        </div>
                    </li>
                ))}
            </ul>
        </div >)

}
export default Home