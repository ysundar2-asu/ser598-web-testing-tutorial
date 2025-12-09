import React, { useCallback, useState } from "react";
import "./Header.scss";
import CustomButton from "../CustomButton/CustomButton";
import { Drawer, Progress } from "antd";
import { TEAM_MEMEBERS_LIST } from "../../Tutorial/constant";

function Header(props) {
  const { completedTopics = [], totalTopics = 0 } = props;
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOnClick = useCallback(() => {
    setOpenDrawer((prev) => !prev);
  }, []);

  const handleOnClose = useCallback(() => {
    setOpenDrawer(false);
  }, []);

  const progressPercent = totalTopics > 0 ? Math.round((completedTopics.length / totalTopics) * 100) : 0;

  return (
    <div className="appHeader">
      <div className="leftSection">
        <span className="headerText">SER-598 Web Testing Tutorial</span>
        <div className="progressSection">
          <span className="progressLabel">Modules Completed: {completedTopics.length}/{totalTopics}</span>
          <Progress percent={progressPercent} size="small" strokeColor="#52c41a" />
        </div>
      </div>

      <div className="rightSection">
        <CustomButton buttonText="Team Information" onClick={handleOnClick} />
      </div>

      <Drawer
        title="Project Team Members"
        open={openDrawer}
        onClose={handleOnClose}
        className="teamMemberInfo"
        size={400}
      >
        <div className="drawerContent">
          {TEAM_MEMEBERS_LIST.map((val, index) => (
            <>
              <div className="teamMember_Info" key={val.id || index}>
                <div className="imageContainer"><span className="memberName">{val.imgAlt}</span></div>
                <div className="nameContainer">
                  <span className="teamMember_Name">{val.name}</span>
                  <span>Email ID : {val.asuID}</span>
                </div>
              </div>
            </>
          ))}
        </div>
      </Drawer>
    </div>
  );
}

export default Header;
