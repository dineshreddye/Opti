import React from "react";

import TabHeaders from "./components/TabHeaders";
import TrafficSourceTable from "./components/TrafficSourceTable";

import {
  AD_ACCOUNT_SOURCE_CONFIG,
  AD_SOURCE_CONFIG,
  CAMPAIGNS_SOURCE_CONFIG,
  TRAFFIC_SOURCE_CONFIG,
} from "./Reports.config";
import { CAMPAIGN_KEYS } from "../../constants/common";

function Reports({ campaigns }) {
  const [activeTab, setActiveTab] = React.useState(
    CAMPAIGN_KEYS.TRAFFIC_SOURCE,
  );

  return (
    <div>
      <TabHeaders activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-3">
        {activeTab === CAMPAIGN_KEYS.TRAFFIC_SOURCE && (
          <TrafficSourceTable
            data={campaigns}
            columns={TRAFFIC_SOURCE_CONFIG}
            keyName={CAMPAIGN_KEYS.TRAFFIC_SOURCE}
          />
        )}
        {activeTab === CAMPAIGN_KEYS.ADACCOUNT && (
          <TrafficSourceTable
            data={campaigns}
            columns={AD_ACCOUNT_SOURCE_CONFIG}
            keyName={CAMPAIGN_KEYS.ADACCOUNT}
          />
        )}
        {activeTab === CAMPAIGN_KEYS.CAMPAIGN_NAME && (
          <TrafficSourceTable
            data={campaigns}
            columns={CAMPAIGNS_SOURCE_CONFIG}
            keyName={CAMPAIGN_KEYS.CAMPAIGN_NAME}
          />
        )}
        {activeTab === CAMPAIGN_KEYS.ADNAME && (
          <TrafficSourceTable
            data={campaigns}
            columns={AD_SOURCE_CONFIG}
            keyName={CAMPAIGN_KEYS.ADNAME}
          />
        )}
      </div>
    </div>
  );
}

export default Reports;
