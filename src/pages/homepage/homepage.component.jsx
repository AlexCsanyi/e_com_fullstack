import React from "react";
import "./homepage.styles.scss";
import Hero from "../../components/hero/hero.component";

const HomePage = () => (
  <>
    <Hero></Hero>
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">NOTES</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">JOURNALS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">DIARIES</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">CALENDARS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>

          <div className="menu-item">
            <div className="content">
              <h1 className="title">PLANNERS</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default HomePage;
