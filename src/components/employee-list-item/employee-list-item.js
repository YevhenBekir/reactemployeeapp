import {Component} from 'react';
import './employee-list-item.css';

class EmployeeListItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            increase: false,
            uppSalary: false
        };
    }

    // setIncrease = () => {
    //     this.setState(state => ({
    //         increase: state.increase = true
    //     }))
    //     if(this.state.increase){
    //         this.setState(state => ({
    //             increase: state.increase = false
    //         }))
    //     }
    // }

    setIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    };

    setUppSalary = () => {
        this.setState(({uppSalary}) => ({
            uppSalary: !uppSalary
        }));
    };

    render(){
        const {name, salary} = this.props;
        const {increase, uppSalary} = this.state;

        let classListName = "list-group-item d-flex justify-content-between";
        if (increase) {
            classListName += ' increase';
        };
        if(uppSalary){
            classListName += ' like';
        }
        return (
            <li className={classListName}>
                <span className="list-group-item-label" onClick={this.setUppSalary}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
    
                <div className="d-flex justify-content-center align-items-center">
                    <button
                    type="button"
                    className="btn-cookie btn-sm"
                    onClick={this.setIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button
                    type="button"
                    className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    };
};

export default EmployeeListItem;