import './search-panel.css';

function SearchPanel(){
    return(
            <input type="text"
                className="form-control search-input"
                placeholder="Find a employee for name: "
            />
    )
}

export default SearchPanel;