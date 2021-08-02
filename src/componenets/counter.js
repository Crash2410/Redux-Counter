import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

const Counter = ({ counter, inc, dec, reset }) => {
    return (
        <div className='app'>
            <div className="counter-box">
                <p className="counter">{counter}</p>
            </div>
            <div className="control-box">
                <div onClick={inc} className="inc"><img src="./plus.svg" alt="plus"></img></div>
                <div onClick={dec} className="dec"><img src="./minus.svg" alt="minus"></img></div>
                <div onClick={reset} className="reset"><img src="./reset.svg" alt="reset"></img></div>
            </div>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);


}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);