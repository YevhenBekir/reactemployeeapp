import {Component} from 'react';
import './search-panel.css';

class SearchPanel extends Component{
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateFindSP = (e) => {
        this.setState({
            term: e.target.value
        })
        this.props.onUpdateFind(e.target.value)
    }
    

    render(){
        return(
                <input type="text"
                    className="form-control search-input"
                    placeholder="Find a employee for name: "
                    onChange={this.onUpdateFindSP}
                    value={this.state.term.toLowerCase()}
                />
        )
    }
}

export default SearchPanel;