import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './history.css';
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
        <Link to="/Cal" data-toggle="tooltip" data-placement="left" title="Calculator!">Open Calculator</Link>
        <table className="table table-striped table-dark table-hover" border='1'>
          <th>HISTORY!!</th>
          {summary && summary.map((sum, i) => {
            return(<tr key={i}>
              <td>
                {sum}
              </td>
            </tr>)})}
        </table>
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
