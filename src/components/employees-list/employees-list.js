import EmployeeListItem from "../employee-list-item/employee-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => {

    const employeesData = data.map(item => {
        const {id, ...itemProps} = item;
        return <EmployeeListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>;
    });

    return(
        <ul className="app-list list-group">
            {employeesData}
        </ul>
    )
}

export default EmployeesList;