import EmployeeListItem from "../employee-list-item/employee-list-item";
import './employees-list.css';

const EmployeesList = () => {
    return(
        <ul className="app-list list-group">
            {EmployeeListItem()}
            {EmployeeListItem()}
            {EmployeeListItem()}
        </ul>
    )
}

export default EmployeesList;