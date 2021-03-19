import React from "react";
import { useSelector } from "react-redux";
import Nav from "../Component/Nav";
import { auth } from "../firebase";
import { selectUser } from "../userSlice";
import "./ProfileScreen.css";
function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            className=""
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
            alt="Netflix Logo"
          />

          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
                {/* <h3>Plans</h3> */}
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut">
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
