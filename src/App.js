import React, { Component } from 'react';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import './App.css';
import $ from 'jquery';
import Todos from './components/Todos';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects:[],
      todos:[]
    }
  }

getTodos(){
  $.ajax({
    url:'https://jsonplaceholder.typicode.com/todos',
    dataType:'json',
    cache:false,
    success:function(data){
      this.setState({todos:data},function(){
        console.log(this.state);
      })
    }.bind(this),
    error:function(xhr,status,err){
      console.log(err);
    }
  })
}

getProjects(){
  this.setState({projects:[
         {
          title:'Business Website',
          category:'Web Design'
        },
        {
          title:'Social App',
          category:'Mobile Development'
        },
        {
          title:'Ecommerce Shopping Cart',
          category:'Web Development'
        }
    ]});
}
  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }

componentDidMount(){
  this.getTodos();
}
 handleAddProject(project){
   let projects = this.state.projects;
   projects.push(project);
   this.setState({projects:projects})
 }
 handleDeleteProject(title){
    let projects = this.state.projects;

    projects = projects.filter((project,index) => {
    
      return project.title !== title;
    });

    this.setState({projects:projects});
 }
 
  render() {
    return (
      <div className="App">
       <AddProject addProject={this.handleAddProject.bind(this)}/>
       <Projects projects={this.state.projects}  onDelete={this.handleDeleteProject.bind(this)}/>
      <hr/>
      <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
