import React from 'react';
import TabTabContent from './TabTabContent';

function TabContents(props) {
  const { showTabIndex } = props;

  let tabContent;
  if(showTabIndex === 0) {
    tabContent = <TabTabContent />;
  } else if(showTabIndex === 1) {
    tabContent = <div>탭 내용2-2</div>
  }else if(showTabIndex === 2) {
    tabContent = <div>탭 내용2-3</div>
  }else if(showTabIndex === 3) {
    tabContent = <div>탭 내용2-4</div>
  }
  

  return (
    <div>
      {tabContent}
    </div>
  );
}

export default TabContents;