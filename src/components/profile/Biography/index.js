import React from "react";
import Widget from "components/Widget";
import {useAuth} from '../../../authentication/';

const Biography = () => {
  const {authUser} = useAuth();
  return (
    <Widget styleName="gx-card-profile">
      <div className="ant-card-head">
        <span className="ant-card-head-title gx-mb-2">Biography</span>
        <p className="gx-text-grey gx-fs-sm gx-mb-0">A little flash back of {authUser.name || authUser.username} </p>
      </div>
      <h3 className="gx-font-weight-light">{authUser.username}</h3>
      <p>{authUser.bio}
      </p>


    </Widget>
  )
}


export default Biography;
