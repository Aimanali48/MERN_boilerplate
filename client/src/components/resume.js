import React, { Component } from 'react';
import '../styles/style.css'
class Resume extends Component {
   //recive data through props, and display it.
    render() { 
        return (<div className="container-2">
             {this.props.data.map(c=><div key={c._id}>
            <strong> {c.name}</strong> : &nbsp;{c.message}
             <button onClick={()=>this.props.onDelete(c._id)}>&times;</button>
             <button onClick={()=>this.props.onEdit(c)}>&#128393;</button>
             </div>)}
               </div>);
    }
}
 
export default Resume;