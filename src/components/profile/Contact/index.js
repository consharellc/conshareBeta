import React from "react";
import Widget from "components/Widget";
import {useAuth} from '../../../authentication/';

const Contact = () => {
  const {authUser} = useAuth();
  return (
    <Widget title="Contact" styleName="gx-card-profile-sm">
      {/* {contactList.map((data, index) => */}
        <div  className="gx-media gx-align-items-center gx-flex-nowrap gx-pro-contact-list">
          {/* <div className="gx-mr-3">
            <i className={`icon icon-${data.icon} gx-fs-xxl gx-text-grey`}/>
          </div> */}
          <div className="gx-media-body">
            <span className="gx-mb-0 gx-text-grey gx-fs-sm">{authUser.email}</span>
            <p className="gx-mb-0">{authUser.email}</p>
          </div>
        </div>
      {/* )} */}
    </Widget>
  )
}

export default Contact;
