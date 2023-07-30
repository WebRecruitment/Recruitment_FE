import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import MainDash from "./MainDash/MainDash";
import Staff from "./StaffCompany/Staff";
import Job from "./Job/Job";
import Apply from "./Apply/Apply";
import { useNavigate } from "react-router-dom";
import RightSide from "./RigtSide/RightSide";
import Post from "./Post/Post";
import jwt_decode from "jwt-decode";
import ProfilePage from "./Updates/ProfilePage";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [showRightSide, setShowRightSide] = useState(false);
  const [userRole, setUserRole] = useState("");

  const navigate = useNavigate();

  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  // const tokenFromSessionStorage = sessionStorage.getItem("token");
  const tokenlocal = localStorage.getItem("localtoken");

  const decodeToken = (token) => {
    try {
      const decodedData = jwt_decode(token);
      return decodedData;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };
  const [id, setId] = useState("");

  useEffect(() => {
    // Kiểm tra nếu selected === 0 thì hiển thị "RightSide"
    // var session = decodeToken(tokenFromSessionStorage);
    var code = decodeToken(tokenlocal);
    const role =
      code["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    const accountId = code.sub;
    localStorage.setItem("Id", accountId);
    // localStorage.setItem();
    setUserRole(role);
    // console.log(accountId);
    // console.log(role);
    setShowRightSide(selected > -1);
  }, [selected, userRole]);

  const handleSidebarItemClick = (index) => {
    // console.log(token);
    setSelected(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  console.log(window.innerWidth);
  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>
            C<span>o</span>mp<span>a</span>ny
          </span>
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => handleSidebarItemClick(index)} // Call the click handler with the index of the clicked item
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
          {/* signoutIcon */}
          <div className="menuItem">
            <UilSignOutAlt onClick={handleSubmit}></UilSignOutAlt>
          </div>
        </div>
      </motion.div>

      {selected === 0 && <MainDash />}
      {selected === 1 && <MainDash />}
      {selected === 2 && <Staff />}
      {selected === 3 && <Job />}
      {selected === 4 && <Post />}
      {selected === 5 && <Apply />}
      {selected === 6 && <ProfilePage />}
      {showRightSide && <RightSide />}
    </>
  );
};

export default Sidebar;
