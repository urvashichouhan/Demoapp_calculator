import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {gethistory} from '../action/Historyaction.js';
import Cal from './Cal.js'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

 class History extends Component{
  state = {
    Calculations:[]
  }

  componentDidMount() {
    this.props.gethistory()
  }

  render(){   
    const Calculations=[];
 
    console.log(Calculations)
    return(   
      <div className="container">
        <h1>History</h1>  
        <div className="box"> 
          { this.props.summary}           
        </div>      
        <Link to="/Cal">Open Calculator</Link>         
      </div> 
    );
  }
}
function mapStateToProps(state){      
  
  return{ 
    summary:state.history.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ gethistory
  }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(History);
