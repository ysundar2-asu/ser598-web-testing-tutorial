import { useCallback, useState } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import { CONTENT_MAPPING, TUTORIAL_CONTENT_HEADINGS } from './constant';
import Content from './Components/Content/Content';

function App() {
  const [currentActiveTab, setCurrentActiveTab] = useState("introduction");

  const handleTabChange = useCallback((value) => {
    setCurrentActiveTab(value);
  }, []);
  return (
    <div className="App">
      <Header />
      <div className='applicationBody'>
      <div className='applicationSideNav'>
      <SideBar tabs={TUTORIAL_CONTENT_HEADINGS} currentActiveTab={currentActiveTab} onChangeTab={handleTabChange}/>
      </div>
      <div className='applicationContent'>
        <Content content={CONTENT_MAPPING[currentActiveTab]}/>
      </div>
      </div>
    </div>
  );
}

export default App;
