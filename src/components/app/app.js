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
                {name: 'Anthony Burdeinyi', salary: 3300, id: 1},
                {name: 'Mike Lysenko', salary: 2800, id: 2},
                {name: 'Dmytro Smith', salary: 5400, id: 3},
            ]
        };
    }

    deleteEmployeeFromData = (id) => {
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
                <EmployeesAddForm />
            </div>
        );
    };
};

export default App;