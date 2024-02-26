import React from "react";
import "./Department.css";
import tech from "../../assets/technical.png";
import management from "../../assets/management.png";
import graphics from "../../assets/graphics.png";
import content from "../../assets/content.png";
import marketing from "../../assets/marketing.png";
import video from "../../assets/video_editing.png";

function Department() {
  return (
    <div className="dept-bg">
      <div class="container-block container">
        <p class="text-blk team-head-text">Our Team</p>
        <div class="responsive-container-block teamcard-container">
          <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container">
            <div class="team-card">
              <div class="team-img-wrapper">
                <img class="team-img" src={management} />
              </div>
              <div class="team-card-content">
                <p class="text-blk name">Management</p>
              </div>
            </div>
          </div>
          <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container">
            <div class="team-card">
              <div class="team-img-wrapper">
                <img class="team-img" src={tech} />
              </div>
              <div class="team-card-content">
                <p class="text-blk name">Tech</p>
              </div>
            </div>
          </div>

          <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container">
            <div class="team-card">
              <div class="team-img-wrapper">
                <img class="team-img" src={marketing} />
              </div>
              <div class="team-card-content">
                <p class="text-blk name">Marketing</p>
              </div>
            </div>
          </div>
          <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container">
            <div class="team-card">
              <div class="team-img-wrapper">
                <img class="team-img" src={video} />
              </div>
              <div class="team-card-content">
                <p class="text-blk name">Video Editing</p>
              </div>
            </div>
          </div>
          <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container">
            <div class="team-card">
              <div class="team-img-wrapper">
                <img class="team-img" src={graphics} />
              </div>
              <div class="team-card-content">
                <p class="text-blk name">Graphics</p>
              </div>
            </div>
          </div>
          <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container">
            <div class="team-card">
              <div class="team-img-wrapper">
                <img class="team-img" src={content} />
              </div>
              <div class="team-card-content">
                <p class="text-blk name">Content</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Department;
