import React, {Component} from 'react';


class AddProject extends Component {
    static defaultProps = {
        categories :['Web Design','Web Development', 'Mobile Development']
    }
  render() {
    let categoryOptions = this.props.categories.map(category => {
        return <option key={category} value={category}>{category}</option>
    })
    return ( 
    <div>
    <h3>
      Add Project
      </h3>
      <form>
      <div>
          <label htmlFor="Title">Title</label><br/>
          <input type="text" ref="title" />
      </div>
       <div>
          <label htmlFor="Title">Category</label><br/>
          <select ref="category">
            {categoryOptions}
           </select>
      </div>
      </form>
      </div>
    );
  }
}

export default AddProject;