import React, { Component } from "react";

import MenuItem from "../menu-item/menu-item.component";
import Review from "../review/review.component";

import prod1 from "../../images/prod-01.jpg";
import prod2 from "../../images/prod-02.jpg";
import prod3 from "../../images/prod-03.jpg";

export default class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          desc:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis totam, modi possimus neque excepturi non aspernatur rerum et incidunt vel distinctio",
          image: prod1,
          alt: "product 1",
          id: 1
        },
        {
          desc:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis totam, modi possimus neque excepturi non aspernatur rerum et incidunt vel distinctio",
          image: prod2,
          alt: "product 2",
          id: 2
        },
        {
          desc:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis totam, modi possimus neque excepturi non aspernatur rerum et incidunt vel distinctio",
          image: prod3,
          alt: "product 3",
          id: 3
        }
      ],
      altSections: [],
      reviews: [
        {
          text:
            "This is a gift for my son, who is in the Navy. I am giving it to him at graduation, and I am absolutely in love with it! I hope he writes of his travels in this! It is stunning, well made and i would order again! I have had lots of compliments on it!",
          name: "Yolanda Tamer",
          id: 1
        },
        {
          text:
            "This review is overdue! About this customized journal for my 11 yr old daughter, who recently has been struggling at school and she absolutely loves it. She cried with joy when she saw it. Especially the custom note that was put inside. She holds it like a priceless heirloom, that's exactly what I was aiming for.. thank you so much!",
          name: "Eric",
          id: 2
        }
      ]
    };
  }

  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            {this.state.sections.map(({ desc, id, image, alt }) => (
              <MenuItem alt={alt} key={id} desc={desc} image={image}></MenuItem>
            ))}
            <Review
              text={this.state.reviews[0].text}
              name={this.state.reviews[0].name}
            ></Review>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <Review
              text={this.state.reviews[1].text}
              name={this.state.reviews[1].name}
            ></Review>
            {this.state.sections.map(({ desc, id, image, alt }) => (
              <MenuItem alt={alt} key={id} desc={desc} image={image}></MenuItem>
            ))}
          </div>
        </div>
      </>
    );
  }
}
