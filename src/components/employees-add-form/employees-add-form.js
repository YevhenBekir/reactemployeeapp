import {Component} from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            employeeName: '',
            employeeSalary: ''
        };
    }

    onSetEmployeeData = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSetNewEmployee = (e, name, salary) => {
        e.preventDefault();
        const {onAdd} = this.props;
        if(this.state.employeeName.length >= 3 && this.state.employeeSalary.length >= 3){
        onAdd(name, salary);
        this.setState({
            employeeName: '',
            employeeSalary: ''
        })
    }
    }

    render(){
        const {employeeName, employeeSalary} = this.state;
        return(
            <div className="app-add-form">
                <h3>Додайте нового працівника:</h3>
                <form 
                className="add-form d-flex"
                onSubmit={(e) => this.onSetNewEmployee(e, employeeName, employeeSalary)}>
                    <input type="text"
                    className="form-control new-post-label"
                    onChange={this.onSetEmployeeData}
                    name="employeeName"
                    value={employeeName}
                    placeholder="Ім'я працівника:" />

                    <input type="number"
                    className="form-control new-post-label"
                    onChange={this.onSetEmployeeData}
                    name="employeeSalary"
                    value={employeeSalary}
                    placeholder="Заробітня плата $:" />

                    <button
                    type="submit"
                    className="btn btn-outline-light">Додати</button>
                </form>
            </div>
        );
    };
};

export default EmployeesAddForm;