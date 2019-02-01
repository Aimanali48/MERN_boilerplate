import React, { Component } from 'react';
class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    render() { 
        return (<div>
             {this.props.data.map(c=><div key={c._id}>
             {c.name}:{c.message}
             <button onClick={()=>this.props.onDelete(c._id)}>&times;</button>
             <button onClick={()=>this.props.onEdit(c)}>&#128393;</button>
             </div>)}
               </div>);
    }
}
 
export default Resume;