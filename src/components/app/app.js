import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App(){

    const arrData = [
        {name: 'Anthony Burdeinyi', salary: 3300, increase: true, id: 1},
        {name: 'Mike Lysenko', salary: 2800, increase: false, id: 2},
        {name: 'Dmytro Smith', salary: 5400, increase: true, id: 3},
    ];

    return(
        <div className="app">
            {AppInfo()}

            <div className="search-panel">
                {SearchPanel()}
                {AppFilter()}
            </div>

            <EmployeesList data={arrData} />
            {EmployeesAddForm()}
        </div>
    );
}

export default App;