import React from 'react'
import { Tabs } from 'antd';


const { TabPane } = Tabs;
function Tab() {
    return (
      <Tabs defaultActiveKey="1">
      
    <TabPane
      key="1"
      tab='Buy'
    />
    <TabPane
      key="2"
      tab='Sell'
    />
  </Tabs>  
    
    )
}

export default Tab
