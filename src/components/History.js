import React,{Component} from 'react';
import { Link } from 'react-router-dom';  
import {gethistory} from '../action/Historyaction.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
class History extends Component{   
  
  async componentWillMount(){
    console.log("in did mount");
    var username=sessionStorage.getItem('uname');
    await this.props.gethistory(username);    

  }
  render(){
    const { summary } = this.props;
    console.log(summary); 
    return(   
      <div className="container">
        <h1>History</h1>
        <Link to="/Cal">Open Calculator</Link>        
          {summary && summary.map((sum, i) => {
          return(<div key={i}>
          <li>         
            {sum}
          </li>      
        </div>)})}
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
