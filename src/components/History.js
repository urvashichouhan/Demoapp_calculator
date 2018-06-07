import React,{Component} from 'react';
import { Link } from 'react-router-dom';  
import {gethistory} from '../action/Historyaction.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
class History extends Component{   
  
  componentDidMount() {
    var username=sessionStorage.getItem('uname');
    this.props.gethistory(username);      
  }           
  render(){       
    return(   
      <div className="container">
        <h1>History</h1>  
        <div className="box">         
          {this.props.summary}
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
