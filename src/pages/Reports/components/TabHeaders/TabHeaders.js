import React from "react";
import { Tabs, Typography } from "antd";

import useMobile from "../../../../hooks/useMobile";

import "./TabHeaders.css";
import { CAMPAIGN_KEYS } from "../../../../constants/common";

const { TabPane } = Tabs;
const { Text } = Typography;

function TabHeaders({ activeTab, setActiveTab }) {
  const handleTabChange = (key) => {
    setActiveTab(key);
  };
  const isMobile = useMobile();

  return (
    <div className={isMobile ? "" : "flex items-center"}>
      {/* Label */}
      <Text strong style={{ fontSize: "14px" }}>
        Report Type:
      </Text>

      {/* Tabs */}
      <Tabs
        activeKey={activeTab}
        onChange={handleTabChange}
        style={{ flex: 1 }}
        tabBarStyle={{ borderBottom: "1px solid #d9d9d9" }} // Customize tab style
      >
        <TabPane tab="Traffic Sources" key={CAMPAIGN_KEYS.TRAFFIC_SOURCE} />
        <TabPane tab="Ad Accounts" key={CAMPAIGN_KEYS.ADACCOUNT} />
        <TabPane tab="Campaigns" key={CAMPAIGN_KEYS.CAMPAIGN_NAME} />
        <TabPane tab="Ads" key={CAMPAIGN_KEYS.ADNAME} />
        <TabPane tab="Feed" key={CAMPAIGN_KEYS.FEED} />
        <TabPane tab="Partner" key={CAMPAIGN_KEYS.PARTNER} />
      </Tabs>
    </div>
  );
}

export default TabHeaders;
