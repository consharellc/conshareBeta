import React from "react";

import Widget from "components/Widget/index";
import EventItem from "./EventItem";
import {eventList} from "../../../routes/Profile/data"
import {useAuth} from '../../../authentication/';

const Events = () => {
  const {authUser} = useAuth();
  return (
    <Widget styleName="gx-card-profile">
      <div className="ant-card-head">
        <span className="ant-card-head-title gx-mb-1">Interest</span>
        <p className="gx-text-grey gx-fs-sm gx-mb-0">What {authUser.username} is Interest in</p>
      </div>
      <div className="gx-pt-md-3">
       
        <ul>
          <li>{authUser.Interests}</li>
        </ul>
      </div>
    </Widget>
  );
}

export default Events;
