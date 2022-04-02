import React from "react";
import {Avatar, Popover} from "antd";
import {useAuth} from "../../authentication";
import {useHistory} from "react-router-dom";

const UserProfile = () => {
  const {userSignOut,authUser } = useAuth();
  const history = useHistory();

  const onLogoutClick = () => {
    userSignOut(() => {
      history.push('/');
    });
  }

  const onAccountClick = () => {
    history.push('/profile')
  }

  const userMenuOptions = (
    <ul className="gx-user-popover">
      <li onClick={onAccountClick}>My Account</li>
      <li>Connections</li>
      <li onClick={onLogoutClick}>Logout
      </li>
    </ul>
  );

  return (
    <div className="gx-flex-row gx-align-items-center gx-mb-4 gx-avatar-row">
      <Popover placement="bottomRight" content={userMenuOptions} trigger="click">
        <Avatar src={authUser.profile_pic} className="gx-size-40 gx-pointer gx-mr-3" alt="profilepic"/>
        <span className="gx-avatar-name">{authUser.name || authUser.username }<i className="icon icon-chevron-down gx-fs-xxs gx-ml-2"/></span>
      </Popover>
    </div>
  )
};

export default UserProfile;
