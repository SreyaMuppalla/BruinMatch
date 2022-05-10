import React, { Component } from "react";
import "../Rec.css";
import styles from "../Rec.css";
import axios from "axios";
import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";

class Rec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8082/api/users/rec")
      .then((res) => {
        this.setState({
          users: res.data,
        });
        this.props.history.push("/rec");
      })
      .catch((err) => {
        console.log("Error from Rec");
      });
  }

  render() {
    const users = this.state.users;
    console.log("PrintUser: " + users);
    let userList;

    if (!users) {
      userList = "there is no user record!";
    } else {
      console.log("Hello");
      userList = users.map((user, k) => <UserProfile user={user} key={k} />);
    }

    return (
      <div>
        <div className="w-full">
          <div className="h-16 bg-headingBox">
            <div className="px-8 ">
              <div className="py-3 text-white text-3xl font-main font-bold tracking-wider ">
                <a href="./SignUp">BruinMatch</a>
              </div>
              <div className="flex w-full items-center justify-end text-xl font-navbar text-white text-bold">
                <div className="-mt-12 mx-6 hover:text-yellow">
                  <a href="./Saved">Saved</a>
                </div>
                <div className="-mt-12 hover:text-yellow">
                  <a href="./UserProfile">My Profile</a>
                </div>
              </div>
              <div className="frame1"></div>
              <div className="ProfilePhoto1"></div>
              <div className="name1">Name</div>
              <div className="gender1">Gender:</div>
              <div className="major1">Major:</div>
              <div className="year1">Year:</div>
              <div className="phone1">Phone:</div>
              <div className="email1">Email:</div>
              <div className="comments1">Comments:</div>
              <div className="pref1">Pref1:</div>
              <div className="pref2">Pref2:</div>
              <div className="pref3">Pref3:</div>
              <div className="pref4">Pref4:</div>
              <div className="pref5">Pref5:</div>
              <div className="rectangle2" />
              <div className="rectangle3" />
              <div className="rectangle4" />
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-2/12">
            <div className="min-h-screen bg-filter">
              <div className="font-navbar text-2xl text-center py-4 text-main text-extrabold tracking-wide">
                Filter
              </div>
              <div className="flex justify-center">
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input appearance-none h-6 w-6 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    ></input>
                    <label
                      className="form-check-label inline-block text-gray-800"
                      for="flexCheckDefault"
                    >
                      <div className="font-sub text-2xl tracking-wide">
                        Preference
                      </div>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input appearance-none h-6 w-6 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    ></input>
                    <label
                      className="form-check-label inline-block text-gray-800"
                      for="flexCheckDefault"
                    >
                      <div className="font-sub text-2xl tracking-wide">
                        Preference
                      </div>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input appearance-none h-6 w-6 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    ></input>
                    <label
                      className="form-check-label inline-block text-gray-800"
                      for="flexCheckDefault"
                    >
                      <div className="font-sub text-2xl tracking-wide">
                        Preference
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Rec;
