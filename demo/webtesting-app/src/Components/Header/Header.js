import React, { useCallback, useState } from "react";
import "./Header.scss";
import CustomButton from "../CustomButton/CustomButton";
import { Drawer } from "antd";
import { TEAM_MEMEBERS_LIST } from "../../constant";

function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOnClick = useCallback(() => {
    setOpenDrawer((prev) => !prev);
  }, []);

  const handleOnClose = useCallback(() => {
    setOpenDrawer(false);
  }, []);

  return (
    <div className="appHeader">
      <div className="leftSection">
        <span className="headerText">SER-598 Web Testing Tutorial</span>
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
                <div className="imageContainer"></div>
                <div className="nameContainer">
                  <span className="teamMember_Name">{val.name}</span>
                  <span>ASU ID : {val.asuID}</span>
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
