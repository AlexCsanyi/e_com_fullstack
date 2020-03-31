import Calendar_01 from "../../images/collections/01_calendar/01_calendar.jpg";
import Calendar_02 from "../../images/collections/01_calendar/02_calendar.jpg";
import Calendar_03 from "../../images/collections/01_calendar/03_calendar.jpg";
import Calendar_04 from "../../images/collections/01_calendar/04_calendar.jpg";
import Calendar_05 from "../../images/collections/01_calendar/05_calendar.jpg";

import Journal_01 from "../../images/collections/05_journal/01_journal.jpg";
import Journal_02 from "../../images/collections/05_journal/02_journal.jpg";
import Journal_03 from "../../images/collections/05_journal/03_journal.jpg";
import Journal_04 from "../../images/collections/05_journal/04_journal.jpg";
import Journal_05 from "../../images/collections/05_journal/05_journal.jpg";

import Planner_01 from "../../images/collections/04_planner/01_planner.jpg";
import Planner_02 from "../../images/collections/04_planner/02_planner.jpg";
import Planner_03 from "../../images/collections/04_planner/03_planner.jpg";
import Planner_04 from "../../images/collections/04_planner/04_planner.jpg";
import Planner_05 from "../../images/collections/04_planner/05_planner.jpg";

import Gratitude_01 from "../../images/collections/03_gratitude/01_gratitude.jpg";
import Gratitude_02 from "../../images/collections/03_gratitude/02_gratitude.jpg";
import Gratitude_03 from "../../images/collections/03_gratitude/03_gratitude.jpg";
import Gratitude_04 from "../../images/collections/03_gratitude/04_gratitude.jpg";
import Gratitude_05 from "../../images/collections/03_gratitude/05_gratitude.jpg";

import Accessory_01 from "../../images/collections/02_accessory/01_accessory.jpg";
import Accessory_02 from "../../images/collections/02_accessory/02_accessory.jpg";
import Accessory_03 from "../../images/collections/02_accessory/03_accessory.jpg";
import Accessory_04 from "../../images/collections/02_accessory/04_accessory.jpg";
import Accessory_05 from "../../images/collections/02_accessory/05_accessory.jpg";

import Diary_01 from "../../images/collections/06_diary/01_diary.jpg";
import Diary_02 from "../../images/collections/06_diary/02_diary.jpg";
import Diary_03 from "../../images/collections/06_diary/03_diary.jpg";
import Diary_04 from "../../images/collections/06_diary/04_diary.jpg";
import Diary_05 from "../../images/collections/06_diary/05_diary.jpg";
import Diary_06 from "../../images/collections/06_diary/06_diary.jpg";

const SHOP_DATA = [
  {
    id: 1,
    title: "Diaries",
    routeName: "diaries",
    items: [
      {
        id: 1,
        name: "Diary A",
        imageUrl: `${Diary_01}`,
        price: 25,
        category: "Diaries"
      },
      {
        id: 2,
        name: "Diary B",
        imageUrl: `${Diary_02}`,
        price: 18,
        category: "Diaries"
      },
      {
        id: 3,
        name: "Diary C",
        imageUrl: `${Diary_03}`,
        price: 35,
        category: "Diaries"
      },
      {
        id: 4,
        name: "Diary D",
        imageUrl: `${Diary_04}`,
        price: 25,
        category: "Diaries"
      },
      {
        id: 5,
        name: "Diary F",
        imageUrl: `${Diary_05}`,
        price: 18,
        category: "Diaries"
      },
      {
        id: 6,
        name: "Diary G",
        imageUrl: `${Diary_06}`,
        price: 14,
        category: "Diaries"
      },
      {
        id: 7,
        name: "Diary H",
        imageUrl: `${Calendar_05}`,
        price: 18,
        category: "Diaries"
      },
      {
        id: 8,
        name: "Diary J",
        imageUrl: `${Calendar_02}`,
        price: 14,
        category: "Diaries"
      },
      {
        id: 9,
        name: "Diary K",
        imageUrl: `${Accessory_05}`,
        price: 16,
        category: "Diaries"
      }
    ]
  },
  {
    id: 2,
    title: "Calendars",
    routeName: "calendars",
    items: [
      {
        id: 10,
        name: "Calendar A",
        imageUrl: `${Calendar_01}`,
        price: 220,
        category: "Calendars"
      },
      {
        id: 11,
        name: "Calendar B",
        imageUrl: `${Calendar_02}`,
        price: 280,
        category: "Calendars"
      },
      {
        id: 12,
        name: "Calendar C",
        imageUrl: `${Calendar_03}`,
        price: 110,
        category: "Calendars"
      },
      {
        id: 13,
        name: "Calendar D",
        imageUrl: `${Calendar_04}`,
        price: 160,
        category: "Calendars"
      },
      {
        id: 14,
        name: "Calendar F",
        imageUrl: `${Calendar_05}`,
        price: 160,
        category: "Calendars"
      },
      {
        id: 15,
        name: "Calendar G",
        imageUrl: `${Diary_01}`,
        price: 160,
        category: "Calendars"
      },
      {
        id: 16,
        name: "Calendar H",
        imageUrl: `${Planner_01}`,
        price: 190,
        category: "Calendars"
      },
      {
        id: 17,
        name: "Calendar J",
        imageUrl: `${Gratitude_01}`,
        price: 200,
        category: "Calendars"
      }
    ]
  },
  {
    id: 3,
    title: "Notebooks",
    routeName: "notebooks",
    items: [
      {
        id: 18,
        name: "Notebook A",
        imageUrl: `${Planner_01}`,
        price: 125,
        category: "Notebooks"
      },
      {
        id: 19,
        name: "Notebook B",
        imageUrl: `${Planner_02}`,
        price: 90,
        category: "Notebooks"
      },
      {
        id: 20,
        name: "Notebook C",
        imageUrl: `${Planner_03}`,
        price: 90,
        category: "Notebooks"
      },
      {
        id: 21,
        name: "Notebook D",
        imageUrl: `${Planner_04}`,
        price: 165,
        category: "Notebooks"
      },
      {
        id: 22,
        name: "Notebook F",
        imageUrl: `${Planner_05}`,
        price: 185,
        category: "Notebooks"
      }
    ]
  },
  {
    id: 4,
    title: "GratitudeBooks",
    routeName: "gratitudeBooks",
    items: [
      {
        id: 23,
        name: "GratitudeBook A",
        imageUrl: `${Gratitude_01}`,
        price: 25,
        category: "GratitudeBooks"
      },
      {
        id: 24,
        name: "GratitudeBook B",
        imageUrl: `${Gratitude_02}`,
        price: 20,
        category: "GratitudeBooks"
      },
      {
        id: 25,
        name: "GratitudeBook C",
        imageUrl: `${Gratitude_03}`,
        price: 80,
        category: "GratitudeBooks"
      },
      {
        id: 26,
        name: "GratitudeBook D",
        imageUrl: `${Gratitude_04}`,
        price: 80,
        category: "GratitudeBooks"
      },
      {
        id: 27,
        name: "GratitudeBook F",
        imageUrl: `${Gratitude_05}`,
        price: 45,
        category: "GratitudeBooks"
      },
      {
        id: 28,
        name: "GratitudeBook G",
        imageUrl: `${Calendar_04}`,
        price: 135,
        category: "GratitudeBooks"
      },
      {
        id: 29,
        name: "GratitudeBook H",
        imageUrl: `${Diary_06}`,
        price: 20,
        category: "GratitudeBooks"
      }
    ]
  },
  {
    id: 5,
    title: "Journals",
    routeName: "journals",
    items: [
      {
        id: 30,
        name: "Journal A",
        imageUrl: `${Journal_01}`,
        price: 325,
        category: "Journals"
      },
      {
        id: 31,
        name: "Journal B",
        imageUrl: `${Journal_02}`,
        price: 20,
        category: "Journals"
      },
      {
        id: 32,
        name: "Journal C",
        imageUrl: `${Journal_03}`,
        price: 25,
        category: "Journals"
      },
      {
        id: 33,
        name: "Journal D",
        imageUrl: `${Journal_04}`,
        price: 25,
        category: "Journals"
      },
      {
        id: 34,
        name: "Journal F",
        imageUrl: `${Journal_05}`,
        price: 40,
        category: "Journals"
      },
      {
        id: 35,
        name: "Journal E",
        imageUrl: `${Calendar_05}`,
        price: 25,
        category: "Journals"
      }
    ]
  },
  {
    id: 6,
    title: "Accessories",
    routeName: "accessories",
    items: [
      {
        id: 36,
        name: "Accessorie A",
        imageUrl: `${Accessory_01}`,
        price: 325,
        category: "Accessories"
      },
      {
        id: 37,
        name: "Accessorie B",
        imageUrl: `${Accessory_02}`,
        price: 20,
        category: "Accessories"
      },
      {
        id: 38,
        name: "Accessorie C",
        imageUrl: `${Accessory_03}`,
        price: 25,
        category: "Accessories"
      },
      {
        id: 39,
        name: "Accessorie D",
        imageUrl: `${Accessory_04}`,
        price: 25,
        category: "Accessories"
      },
      {
        id: 40,
        name: "Accessorie E",
        imageUrl: `${Accessory_05}`,
        price: 40,
        category: "Accessories"
      },
      {
        id: 41,
        name: "Accessorie F",
        imageUrl: `${Calendar_03}`,
        price: 25,
        category: "Accessories"
      }
    ]
  }
];

export default SHOP_DATA;
