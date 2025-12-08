import React, { useCallback } from 'react';
import "./SideBar.scss";

function SideBar(props) {
    const { tabs, currentActiveTab, onChangeTab } = props;

    const handleOnClick = useCallback((tab) => {
        onChangeTab(tab);
    }, [onChangeTab]);
    
  return (
    <div className='titleWrapper'>
      {tabs.map((data, index) => <button onClick={() => handleOnClick(data.mapId)} className={currentActiveTab === data.mapId ? "activeTitleTab" : "titleTab"}>{data.title}</button>)}
    </div>
  )
}

export default SideBar