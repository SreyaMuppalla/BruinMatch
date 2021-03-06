import React, { Component } from "react";
import "../Rec.css";
import styles from "../Rec.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Profile from "./Profile";

class SavedProfiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      allUsers: [],
      usrnm: this.props.match.params.usrnm,
    };
  }

  onClickSaved = (e) => {
    this.props.history.push(`/saved/${this.state.usrnm}`);
    window.location.reload(false);
  };

  onClickRec = (e) => {
    this.props.history.push(`/rec/${this.state.usrnm}`);
    window.location.reload(false);
  };

  onClickProfile = (e) => {
    this.props.history.push(`/profile/${this.state.usrnm}`);
    window.location.reload(false);
  };

  componentDidMount() {
    axios
      .get("http://localhost:8082/api/users/" + this.state.usrnm)
      .then((res) => {
        this.setState({
          user: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from ShowUserList");
      });
  }

  render() {
    const user = this.state.user;
    const saved = user.savedProfiles;
    const notes = user.savedNotes;
    var bool = true;
    var userList = [];
    if (user) {
      for (var i = 0; i < saved.length; i++) {
        userList.push(
          <Profile user={saved[i]} account={this.state.user} note={notes[i]} putNote={bool} />
        );
      }
    }
    return (
      <div clasName="absolute">
        <div className="w-full">
          <div className="h-16 bg-headingBox">
            <div className="px-8 ">
              <div className="py-3 text-white text-3xl font-Ubuntu font-bold tracking-widest">
                <a onClick={this.onClickRec} style={{ cursor: "pointer" }}>
                  BruinMatch
                </a>
              </div>
              <div className="flex w-full items-center justify-end text-xl font-navbar text-white text-bold">
                <div className="-mt-12 mx-6 hover:text-yellow">
                  <a onClick={this.onClickSaved} style={{ cursor: "pointer" }}>
                    Saved
                  </a>
                </div>
                <div className="-mt-12 hover:text-yellow">
                  <a
                    onClick={this.onClickProfile}
                    style={{ cursor: "pointer" }}
                  >
                    My Profile
                  </a>
                </div>
              </div>
              <div className="list">{userList}</div>
            </div>
          </div>
        </div>
        <div className="relative max-w-screen-lg mx-auto p-4">
          <div className="grid grid-cols-2 gap-8 mt-12"></div>
        </div>
      </div>
    );
  }
}

export default SavedProfiles;
