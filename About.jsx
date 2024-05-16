import React from "react";
import { AppMenu } from "../../icons/AppMenu";
import "./style.css";

export const About = () => {
  return (
    <div className="ABOUT">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="rectangle" />
          <img className="bg" alt="Bg" src="/img/bg2-1.png" />
          <div className="text-wrapper">PHOTOGRAPHY</div>
          <div className="ellipse" />
          <div className="div" />
          <img className="KLEE-ANN" alt="Klee ANN" src="/img/klee-ann-2-2.png" />
          <div className="text-wrapper-2">PHOTOGRAPHY</div>
          <div className="text-wrapper-3">learn basic</div>
          <AppMenu className="app-menu" />
          <div className="home-about">Home&nbsp;&nbsp;About</div>
          <div className="rectangle-2" />
          <div className="sign-up-here">GET STARTED</div>
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <p className="welcome-to-our">
            Welcome to our online educational course focused on teaching you the fundamentals of photography! Whether
            you&#39;re a beginner looking to understand the basics or someone wanting to enhance their photography
            skills, our course is designed to cater to all levels of learners.
          </p>
          <div className="div-2">
            <div className="overlap-group">
              <div className="avatar">
                <div className="avatar-2" />
                <img className="chevron-down" alt="Chevron down" src="/img/chevron-down.svg" />
              </div>
              <img className="logo" alt="Logo" src="/img/logo-1.png" />
            </div>
            <button className="buttons">
              <img className="button" alt="Button" src="/img/button.svg" />
              <button className="primary-wrapper">
                <div className="primary">Share</div>
              </button>
            </button>
            <div className="list">
              <div className="text-wrapper-4">1</div>
              <div className="text-wrapper-4">2</div>
              <div className="text-wrapper-4">3</div>
            </div>
            <div className="fr">free courses</div>
          </div>
        </div>
      </div>
    </div>
  );
};
