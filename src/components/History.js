import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {gethistory} from '../action/Historyaction.js';
import Cal from './Cal.js'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
const state = {
    summary:[]
  };
class History extends Component{
  componentDidMount() {
    var username=sessionStorage.getItem('uname');
    this.props.gethistory(username);
  }
  summary() {
    return this.props.summary.map((summary) => {
      return(
        <li>{ summary }</li>
      );
    });
  }
                  
  render(){ 
    return(   
      <div className="container">
        <h1>History</h1>  
        <div className="box"> 
          <ul>
            { this.props.summary }
          </ul>     
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
  return bindActionCreators({ gethistory:gethistory
  }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(History);
