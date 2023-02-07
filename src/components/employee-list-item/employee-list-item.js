import './employee-list-item.css';

const EmployeeListItem = (props) => {
        const {name, salary, onDelete, increase, rise, onToggleProp} = props;

        let classListName = "list-group-item d-flex justify-content-between";
        if(increase){
            classListName += ' increase';
        }
        if(rise){
            classListName += ' like';
        }

        return (
            <li className={classListName}>
                <span className="list-group-item-label" onClick={onToggleProp} data-toggle="rise">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
    
                <div className="d-flex justify-content-center align-items-center">
                    <button
                    type="button"
                    className="btn-cookie btn-sm"
                    onClick={onToggleProp}
                    data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button
                    type="button"
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
};

export default EmployeeListItem;