import React, { Component } from "react";
class ExampleComponent extends Component {
  constructor() {
    super();
    this.state = {
      articles: [
        { title: "React Redux ", id: 1 },
        { title: "Redux ", id: 2 }
      ]
    };
  }
  render() {
    const { articles } = this.state;
    return <ul>{articles.map(el => <li key={el.id}>{el.title}</li>)}</ul>;
  }
}
export default ExampleComponent;
