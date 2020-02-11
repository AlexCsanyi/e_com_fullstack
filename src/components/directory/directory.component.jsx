import React, { Component } from "react";

export default class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          desc:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis totam, modi possimus neque excepturi non aspernatur rerum et incidunt vel distinctio",
          image: "../../images/prod-01.jpg",
          id: 1
        },
        {
          desc:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis totam, modi possimus neque excepturi non aspernatur rerum et incidunt vel distinctio",
          image: "../../images/prod-02.jpg",
          id: 2
        },
        {
          desc:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis totam, modi possimus neque excepturi non aspernatur rerum et incidunt vel distinctio",
          image: "../../images/prod-03.jpg",
          id: 3
        }
      ]
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">{this.state.sections.map()}</div>
      </div>
    );
  }
}
