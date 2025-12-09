import { useCallback } from 'react';
import "./SideBar.scss";
import { CheckCircleFilled } from '@ant-design/icons';

function SideBar(props) {
    const { tabs, currentActiveTab, onChangeTab, completedTopics = [] } = props;

    const handleOnClick = useCallback((tab) => {
        onChangeTab(tab);
    }, [onChangeTab]);

  return (
    <div className='titleWrapper'>
      {tabs.map((data) => (
        <button
          key={data.id}
          onClick={() => handleOnClick(data.mapId)}
          className={currentActiveTab === data.mapId ? "activeTitleTab" : "titleTab"}
        >
          {data.title}
          {completedTopics.includes(data.mapId) && (
            <CheckCircleFilled style={{ marginLeft: '8px', color: '#52c41a' }} />
          )}
        </button>
      ))}
    </div>
  )
}

export default SideBar