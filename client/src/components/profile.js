import React, { Component } from 'react';
import Resume from './resume';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.name = React.createRef()
        this.message = React.createRef()
        this.state = { 
            data : []
         }
    }

    handleChange = e =>{
       this.setState({
           [e.target.name]:e.target.value
       })
    }

 componentDidMount() {
     this.getAll()
 }

    getAll = () => {
        fetch('/data/api')
        .then(res => res.json())
        .then(data => this.setState({data}))
        .catch(err=>{console.log(err)})
    }


   handleSubmit = e => {
       e.preventDefault()
       let {name , message} = this.state

       fetch("/data/api", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ name, message })
      }).then(()=>{this.getAll()})
      
   }

handleDelete = id => {
    const confirm = window.confirm("are you sure?");
    if (confirm) {
      fetch(`/data/api/${id}`, {
        headers: { "Content-Type": "application/json" },
        method: "DELETE"
      }).then(res => res.text());

      const filtered = this.state.data.filter(c => c._id !== id);
      this.setState({ data: filtered });
    }
}

handleEdit = c => {

  this.setState({
      _id:c._id,
      name: c.name,
      message:c.message
  })
}



handleUpdate = c => {
     console.log(c._id)
    fetch(`/data/api/${c._id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: this.name.current.value,
        message: this.message.current.value
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log(res);
      })
      .then(() => {
        this.getAll();
      });
  };


    render() { 
        return (<React.Fragment>
            <div>
           <form onSubmit={this.handleSubmit}>
               <h3>Name and message :</h3>
               <input type="text" name="name" value={this.state.name||""} ref={this.name} onChange={this.handleChange} /><br/>
               <input type="text" name="message" value={this.state.message||""} ref={this.message} onChange={this.handleChange} /><br/>
               <input type="submit"/>
             </form>
             <button onClick={() => this.handleUpdate(this.state)}>Update</button>
             </div>
         
             <Resume data = {this.state.data} onDelete={this.handleDelete} onEdit={this.handleEdit} />
            </React.Fragment> );
    }
}
 
export default Profile;
