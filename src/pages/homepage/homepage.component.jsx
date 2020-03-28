import React from "react";
import "./homepage.styles.scss";
import Hero from "../../components/hero/hero.component";
import Directory from "../../components/directory/directory.component";
import Cta from "../../components/cta/cta.component";
import Information from "../../components/info/info.component";
import Whitespace from "../../components/whitespace/whitespace.component";

const HomePage = () => (
  <>
    <Hero></Hero>
    <Whitespace height="100px"></Whitespace>
    <Cta></Cta>
    <Information></Information>
    <Directory></Directory>
  </>
);

export default HomePage;
