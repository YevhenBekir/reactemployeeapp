import './app-filter.css'

function AppFilter(props){
    const {onChangeFilter, filter} = props;

    const buttonsData = [
        {name: 'all', label: 'Всі працівники'},
        {name: 'rise', label: 'Отримають підвищення'},
        {name: 'salaryMore1000', label: 'Заробітня плата більше $1000'}
    ]



    const buttons = buttonsData.map( btn => {
        const active = btn.name === filter;
        const clazz = active ? "btn-light" : "btn-outline-light";
        return (
            <button
                className={`btn ${clazz}`}
                onClick={() => onChangeFilter(btn.name)}
                key={btn.name}
                type="button">
                {btn.label}
            </button>
        )
    })
//btn btn-light btn-outline-light
    return(
        <div className="btn-group">
            {buttons}
        </div>    
    )
}

export default AppFilter;