import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            arrData: [
                {name: 'John C.', salary: 800, increase: false, id: 1},
                {name: 'Alex M.', salary: 3000, increase: true, id: 2},
                {name: 'Carl W.', salary: 5000, increase: false, id: 3}
            ]
        };
        this.empId = 4;
    }

    deleteEmployeeFromData = (id) => {
        this.setState(({arrData}) => {
            // const index = arrData.findIndex(element => element.id === id)
            // const before = arrData.slice(0, index),
            //       after = arrData.slice(index + 1),
            //       newData  = [...before, ...after];
            this.empId--;
            return{
                arrData: arrData.filter( element => element.id !== id)
            }
        });
    }

    onAddEmployee = (name, salary) => {
        const employeeData = {name, salary, increase: false, id: this.empId++}
        this.setState(({arrData}) => {
            const newArrData = [...arrData, employeeData]
            return {
                arrData: newArrData
            };
        })
    }

    render(){

        const {arrData} = this.state;
        
        return(
            <div className="app">
                {AppInfo()}
    
                <div className="search-panel">
                    {SearchPanel()}
                    {AppFilter()}
                </div>
    
                <EmployeesList
                data={arrData}
                onDelete={this.deleteEmployeeFromData} />
                <EmployeesAddForm onAdd={this.onAddEmployee}/>
            </div>
        );
    };
};

export default App;