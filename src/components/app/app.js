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
                {name: 'Василь Сурмач', salary: 800, increase: false, rise: false, id: 1},
                {name: 'Анатолій Сагайдачний', salary: 3000, increase: false, rise: false, id: 2},
                {name: 'Веніамін Кличко', salary: 5000, increase: false, rise: false, id: 3}
            ],
            text: ''
        };
        this.empId = 4;
    }

    onDeleteEmployee = (id) => {
        this.setState(({arrData}) => {
            // const index = arrData.findIndex(element => element.id === id)
            // const before = arrData.slice(0, index),
            //       after = arrData.slice(index + 1),
            //       newData  = [...before, ...after];
            return{
                arrData: arrData.filter( element => element.id !== id)
            }
        });
    }

    onAddEmployee = (name, salary) => {
        const employeeData = {name, salary, increase: false, rise: false, id: this.empId++}
        this.setState(({arrData}) => {
            const newArrData = [...arrData, employeeData]
            return {
                arrData: newArrData
            };
        })
    }

    onToggleProp = (id, prop) => {
        // this.setState(({arrData}) => {
        //     const index = arrData.findIndex(el => el.id === id);
        //     const oldArrDataIndexObj = arrData[index];
        //     const newArrDataIndexObj = {...oldArrDataIndexObj, increase: !oldArrDataIndexObj.increase}
        //     const newArrData = [...arrData.slice(0, index), newArrDataIndexObj, ...arrData.slice(index + 1)];
        //     return{arrData: newArrData}
        // })
        this.setState(({arrData}) => ({
            arrData: arrData.map(item => {
                if(item.id === id){
                    return{...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    increaseCount = () => {
        const countIncreaseEmployee = this.state.arrData.filter(item => item.increase);
        return countIncreaseEmployee.length;
    }
    riseCount = () => {
        const countRiseEmployee = this.state.arrData.filter(item => item.rise === true);
        return countRiseEmployee.length;
    }

    findEmployee = (data, index) => {
        if(index.length === 0){
            return data;
        }
        return data.filter(item => {
            return item.name.indexOf(index) > -1
        });
    }
    onUpdateFind = (text) => {
        this.setState({text})
    }

    render(){
        const {arrData, text} = this.state;
        const visibleData = this.findEmployee(arrData, text);
        
        return(
            <div className="app">
                <AppInfo 
                increaseCount={this.increaseCount}
                riseCount={this.riseCount}
                allEmployeesCount={this.state.arrData.length}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateFind={this.onUpdateFind}/>
                    {AppFilter()}
                </div>
    
                <EmployeesList
                data={visibleData}
                onDelete={this.onDeleteEmployee}
                onToggleProp={this.onToggleProp} />
                <EmployeesAddForm onAdd={this.onAddEmployee}/>
            </div>
        );
    };
};

export default App;