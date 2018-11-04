import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add, updateAmount} from '../../store/actions/counter';
import './component1.css';

const mapDispatchToProps = dispatch => {
    return {
        addToCount: (amt) => {
            console.log(amt); 
            dispatch( add(amt) ) 
        },
        updateAmount: (amt) => { 
            console.log(amt);
            dispatch( updateAmount(amt) ) 
        }
    }
}

const mapStateToProps = state => {
    return { 
        count: state.counter.count,
        amount: state.counter.amount
    };
}

class ConnectectComponent1 extends Component {
    constructor(){
        super();
        this.addToCount = this.addToCount.bind(this);
        this.handleAmtUpdate = this.handleAmtUpdate.bind(this);
    }
    addToCount(){
        this.props.addToCount(this.props.amount);
    }

    handleAmtUpdate(event){
        console.log(event.target.value);
        
        this.props.updateAmount(parseInt(event.target.value));
    }

    render(){
        return (
            <div>
                {console.log(this.props)}
                <input 
                    type="number"
                    // value={this.props.amosunt}
                    onChange={this.handleAmtUpdate}></input>
                <button onClick={this.addToCount}>Add</button>
                <strong>Amount:</strong><p>{this.props.amount}</p>
                <strong>Count:</strong><p>{this.props.count}</p>
            </div>
        )
    }
}

const Component1 = connect(mapStateToProps, mapDispatchToProps)(ConnectectComponent1);
export default Component1;