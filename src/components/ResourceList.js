import React, { Component } from 'react';

class ResourceList extends Component {
  state = {
    resources: []
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
      .then(res => res.json())
      .then(json => this.setState({ resources: json }));
  }

  render() {
    return (
      <div>
        {this.state.resources.map(resource => {
          return <li key={resource.id}>{resource.title}</li>;
        })}
      </div>
    );
  }
}

export default ResourceList;
