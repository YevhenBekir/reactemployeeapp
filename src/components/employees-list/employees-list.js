import EmployeeListItem from "../employee-list-item/employee-list-item";
import './employees-list.css';

const EmployeesList = ({data}) => {

    const employeesData = data.map(item => {
        const {id, ...itemProps} = item;
        return <EmployeeListItem key={id} {...itemProps}/>;
    });

    return(
        <ul className="app-list list-group">
            {employeesData}
        </ul>
    )
}

export default EmployeesList;