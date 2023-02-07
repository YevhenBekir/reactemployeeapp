import './app-info.css';

function AppInfo(props){
    const {increaseCount, riseCount, allEmployeesCount} = props;
    return(
        <div className="app-info">
            <h1>Перелік працівників у компанії <span className="company-name">NetScape</span></h1>
            <h2>Загальна кількісь працівників: {allEmployeesCount}</h2>
            <h3>Премію отримають: {increaseCount()}</h3>
            <h3>Отримають підвищення: {riseCount()}</h3>
        </div>
    )
}

export default AppInfo;