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

    const emptyEmpList = () => {
        return(
            <div style={{textAlign: 'center', paddingTop: '30px', paddingBottom: '30px', marginTop: '30px'}}>
                Oops.. The list of employees is empty !
            </div>
        )
    }

    const employeesList = data.length === 0 ? emptyEmpList() : employeesData;
    const empListClasses = data.length === 0 ? "list-group" : "app-list list-group";

    return(
        <ul className={empListClasses}>
            {employeesList}
        </ul>
    )
}

export default EmployeesList;