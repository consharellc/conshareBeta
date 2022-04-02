import React, {useState} from "react";
import {Button} from "antd";
import {useSelector} from "react-redux";
import Auxiliary from "util/Auxiliary";
import {useAuth} from '../../../authentication/';

const Profile = (props) => {

  const [isFollow, setIsFollow] = useState(false);
  const {authUser} = useAuth();

  // const authUser = useSelector(({auth}) => auth.authUser);

  const handleToggle = () => {
    setIsFollow((previousState) => ({
      isFollow: !previousState.isFollow
    }));
  };

  const {user, userInfo} = props;
  const {id, name, image, address} = user;
  const {followers, following, frinds} = userInfo;
  return (
    <Auxiliary>
      <div className="gx-profileon">
        <div className="gx-profileon-thumb gx-profileon-thumb-htctrcrop">
          <img src={authUser.profile_pic} alt=''/>
        </div>
        <div className="gx-profileon-content">
          <p className="gx-profileon-title">{authUser.name || authUser.username}</p>
          <span className="gx-fs-sm">{authUser.city} {authUser.country} </span>
        </div>
      </div>

      <div className="gx-follower gx-text-center">
        <ul className="gx-follower-list">
          <li>
            <span className="gx-follower-title">{authUser.followers_count}</span>
            <span>Followers</span>
          </li>
          <li>
            <span className="gx-follower-title">{authUser.followers_count}</span>
            <span>Following</span>
          </li>
          <li>
            <span className="gx-follower-title">{frinds}</span>
            <span>project</span>
          </li>
        </ul>
      </div>
      <div className="gx-mb-xl-4 gx-mb-3">
        <p>You are following {authUser.username}</p>
        {/* {authUser === id ? null :
          <Button className="gx-btn-sm gx-mb-0" type="primary"
                  onClick={handleToggle}>{isFollow === true ? 'Follow' : 'Unfollow'}</Button>
        } */}
      </div>
    </Auxiliary>
  )
};

export default Profile
