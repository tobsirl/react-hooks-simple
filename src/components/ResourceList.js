import React, { Component } from 'react';

class ResourceList extends Component {
  state = {
    resources: []
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate() {
    this.getData();
  }

  async getData() {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );
    const data = await res.json();
    return this.setState({ resources: data });
  }

  render() {
    return (
      <div>
        {this.state.resources.length}
        {this.state.resources.map(resource => {
          return <li key={resource.id}>{resource.title}</li>;
        })}
      </div>
    );
  }
}

export default ResourceList;
