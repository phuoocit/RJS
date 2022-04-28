
import React, { Component } from 'react';
import {
    Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, Row, FormFeedback
} from 'reactstrap';
import { DEPARTMENTS } from './staffs'
class FormComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            doB: '01/01/2000',
            startDate: '01/01/2022',
            department: 'Dept01',
            salaryScale: '1',
            overTime: '',
            annualLeave: '',
            image: '/assets/images/alberto.png',
            touched: {
                name: false,
            },
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    handleSubmit(event) {
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }
    validate(name, doB, startDate, salaryScale) {
        const errors = {
            name: '',
            doB: '',
            startDate: '',
            salaryScale: '',
        };
        if (this.state.touched.name && name.length < 3)
            errors.name = 'Tên phải lớn hơn 3 ký tự';
        else if (this.state.touched.name && name.length > 40)
            errors.name = 'Tên phải nhỏ hơn 40 ký tự';
       
        return errors;
    }
    render() {
        const errors = this.validate(this.state.name);
        return (
            <div className="row row-content px-4">
                <div className="col-12">
                    <h3>Thêm nhân viên</h3>
                </div>
                <div className="col-12 col-md-9">
                    <Form onSubmit={this.handleSubmit} method="POST" action="/">
                        <FormGroup row>
                            <Label htmlFor="name" md={2}>Họ và tên</Label>
                            <Col md={10}>
                                <Input type="text" id="name" name="name"
                                    placeholder="Nhân viên mới"
                                    value={this.state.name}
                                    valid={errors.name === ''}
                                    invalid={errors.name !== ''}
                                    onBlur={this.handleBlur('name')}
                                    onChange={this.handleInputChange} />
                                <FormFeedback>{errors.name}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="doB" md={2}>Ngày sinh</Label>
                            <Col md={10}>
                                <Input type="date" id="doB" name="date"
                                    value={this.state.doB}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="startDate" md={2}>Ngày vào làm</Label>
                            <Col md={10}>
                                <Input type="date" id="startDate" name="startDate"
                                    value={this.state.startDate}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="department" md={2}>Phòng ban</Label>
                            <Col md={10}>
                                <Input type="select" id="department" name="department"
                                    value={this.state.department}
                                    onChange={this.handleInputChange}
                                >
                                    <option name='Dept01'>
                                        Sale
                                    </option>
                                    <option name='Dept02'>
                                        HR
                                    </option>
                                    <option name='Dept03'>
                                        Marketing
                                    </option>
                                    <option name='Dept04'>
                                        IT
                                    </option>
                                    <option name='Dept05'>
                                        Finance
                                    </option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="salaryScale" md={2}>Hệ số lương</Label>
                            <Col md={10}>
                                <Input type="Number" id="salaryScale" name="salaryScale"
                                    value={this.state.salaryScale}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="overTime" md={2}>Số ngày tăng ca</Label>
                            <Col md={10}>
                                <Input type="Number" id="overTime" name="overTime"
                                    value={this.state.overTime}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="annualLeave" md={2}>Số ngày nghỉ phép</Label>
                            <Col md={10}>
                                <Input type="Number" id="annualLeave" name="annualLeave"
                                    value={this.state.annualLeave}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{ size: 10, offset: 2 }}>
                                <Button type="submit" color="primary">
                                    Add
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }

}
export default FormComponent;