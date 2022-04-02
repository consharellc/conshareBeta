import React from "react";
import {Avatar} from "antd";
import {useAuth} from '../../../authentication/';

const ProfileHeader = () => {

  const {authUser} = useAuth();

  return (
    <div className="gx-profile-banner">
      <div className="gx-profile-container">
        <div className="gx-profile-banner-top">
          <div className="gx-profile-banner-top-left">
            <div className="gx-profile-banner-avatar">
              <Avatar className="gx-size-90" alt="..." src={authUser.profile_pic}/>
            </div>
            <div className="gx-profile-banner-avatar-info">
              <h2 className="gx-mb-2 gx-mb-sm-3 gx-fs-xxl gx-font-weight-light">{authUser.name}</h2>
              <p className="gx-mb-0 gx-fs-lg">{authUser.city} {authUser.country}</p>
            </div>
          </div>
          <div className="gx-profile-banner-top-right">
            <ul className="gx-follower-list">
              <li>
                <span className="gx-follower-title gx-fs-lg gx-font-weight-medium">{authUser.followers_count}</span>
                <span className="gx-fs-sm">Followers</span></li>
              <li>
                <span className="gx-follower-title gx-fs-lg gx-font-weight-medium">{authUser.followers_count}</span>
                <span className="gx-fs-sm">Following</span></li>
              <li>
                <span className="gx-follower-title gx-fs-lg gx-font-weight-medium">3</span>
                <span className="gx-fs-sm">connections</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="gx-profile-banner-bottom">
          <div className="gx-tab-list">
            <ul className="gx-navbar-nav">
              <li>
                <span className="gx-link">Timeline</span>
              </li>
              <li>
                <span className="gx-link">About</span>
              </li>
              <li>
                <span className="gx-link">Photos</span>
              </li>
              <li>
                <span className="gx-link">Friends <span className="gx-fs-xs">{authUser.followers_count}</span></span>
              </li>
              <li>
                <span className="gx-link">More</span>
              </li>
            </ul>
          </div>
          <span className="gx-link gx-profile-setting">
            <i className="icon icon-setting gx-fs-lg gx-mr-2 gx-mr-sm-3 gx-d-inline-flex gx-vertical-align-middle"/>
            <span className="gx-d-inline-flex gx-vertical-align-middle gx-ml-1 gx-ml-sm-0">Setting</span>
          </span>
        </div>
      </div>
    </div>
  )
};

export default ProfileHeader;
