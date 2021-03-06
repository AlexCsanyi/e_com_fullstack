import prod1 from "../../images/prod-01.jpg";
import prod2 from "../../images/prod-02.jpg";
import prod3 from "../../images/prod-03.jpg";
import prod4 from "../../images/prod-04.jpg";
import prod5 from "../../images/prod-05.jpg";
import prod6 from "../../images/prod-06.jpg";

const INITIAL_STATE = {
  sections: [
    {
      title: "Diaries",
      desc:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis totam, modi possimus neque excepturi non aspernatur rerum et incidunt vel distinctio",
      image: prod1,
      alt: "product 1",
      id: 1,
      url: "shop/diaries"
    },
    {
      title: "Calendars",
      desc:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis totam, modi possimus neque excepturi non aspernatur rerum et incidunt vel distinctio",
      image: prod2,
      alt: "product 2",
      id: 2,
      url: "shop/calendars"
    },
    {
      title: "Notebooks",
      desc:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis totam, modi possimus neque excepturi non aspernatur rerum et incidunt vel distinctio",
      image: prod3,
      alt: "product 3",
      id: 3,
      url: "shop/notebooks"
    }
  ],
  altSections: [
    {
      title: "Gratitudebooks",
      desc:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis totam, modi possimus neque excepturi non aspernatur rerum et incidunt vel distinctio",
      image: prod4,
      alt: "product 4",
      id: 4,
      url: "shop/gratitudebooks"
    },
    {
      title: "Journals",
      desc:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis totam, modi possimus neque excepturi non aspernatur rerum et incidunt vel distinctio",
      image: prod5,
      alt: "product 5",
      id: 5,
      url: "shop/journals"
    },
    {
      title: "Accessories",
      desc:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis totam, modi possimus neque excepturi non aspernatur rerum et incidunt vel distinctio",
      image: prod6,
      alt: "product 6",
      id: 6,
      url: "shop/accessories"
    }
  ],
  reviews: [
    {
      text:
        "This is a gift for my son, who is in the Navy. I am giving it to him at graduation, and I am absolutely in love with it! I hope he writes of his travels in this! It is stunning, well made and i would order again! I have had lots of compliments on it!",
      name: "Yolanda Tamer",
      id: 7
    },
    {
      text:
        "This review is overdue! About this customized journal for my 11 yr old daughter, who recently has been struggling at school and she absolutely loves it. She cried with joy when she saw it.",
      name: "Eric",
      id: 8
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
