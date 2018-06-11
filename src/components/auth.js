import React from 'react';
import {connect} from 'react-redux';
export default 	 function(ComposedComponenet){
  class Auth extends React.Component{  
 		componentDidMount(){ 
 			debugger; 		 		
 			console.log(this.props.auth1) 	 	
  		if( this.props.auth1){ 	
 			} 		
  		if( !this.props.auth1){  				
 				alert("login required")
 				this.props.history.push("/login"); 
 			} 		
 		}
 		render(){ 		
 			return(
 				<ComposedComponenet {...this.props}/>
 			); 			
		}
 	}	
 	function mapStateToProps(state){ 		
		return{		
			auth1:state.login.data
		};
	}
 	return connect(mapStateToProps)(Auth);
}