import { useCallback, useState } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import { CONTENT_MAPPING, TUTORIAL_CONTENT_HEADINGS } from './constant';
import Content from './Components/Content/Content';

function App() {
  const [currentActiveTab, setCurrentActiveTab] = useState("introduction");
  const [completedTopics, setCompletedTopics] = useState([]);

  const handleTabChange = useCallback((value) => {
    setCurrentActiveTab(value);
  }, []);

  const handleTopicComplete = useCallback((topicId) => {
    setCompletedTopics((prev) => {
      if (!prev.includes(topicId)) {
        return [...prev, topicId];
      }
      return prev;
    });
  }, []);

  return (
    <div className="App">
      <Header completedTopics={completedTopics} totalTopics={TUTORIAL_CONTENT_HEADINGS.length} />
      <div className='applicationBody'>
      <div className='applicationSideNav'>
      <SideBar tabs={TUTORIAL_CONTENT_HEADINGS} currentActiveTab={currentActiveTab} onChangeTab={handleTabChange} completedTopics={completedTopics}/>
      </div>
      <div className='applicationContent'>
        <Content
          content={CONTENT_MAPPING[currentActiveTab]}
          currentActiveTab={currentActiveTab}
          tabs={TUTORIAL_CONTENT_HEADINGS}
          onChangeTab={handleTabChange}
          onTopicComplete={handleTopicComplete}
        />
      </div>
      </div>
    </div>
  );
}

export default App;
