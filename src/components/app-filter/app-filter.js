import './app-filter.css'

function AppFilter(){
    return(
        <div className="btn-group">
            <button
            className="btn btn-light"
            type="button">
                Всі працівники
            </button>

            <button
            className="btn btn-outline-light"
            type="button">
                Отримають підвищення
            </button>

            <button
            className="btn btn-outline-light"
            type="button">
                Заробітня плата більше $1000
            </button>
        </div>    
    )
}

export default AppFilter;