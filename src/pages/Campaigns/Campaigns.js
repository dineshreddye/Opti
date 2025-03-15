import React, { useState, useMemo } from "react";

import Filters from "./components/Filters";
import CampaignsTable from "./components/CampaignsTable";
import { isDateInRange } from "../../utils/common.utils";

function Campaigns({ campaigns, openCreateCampaignModal }) {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
  };

  const filteredCampaigns = useMemo(() => {
    return campaigns.filter((campaign) => {
      const {
        trafficSource = "",
        account = "",
        dateRange = [],
        feed = "",
        partner = "",
      } = filters;
      const {
        trafficeSource: source,
        adAccount,
        date,
        feed: campaignFeed,
        partner: campaignPartner,
      } = campaign;
      if (trafficSource) {
        if (source.toLowerCase() !== trafficSource.toLowerCase()) {
          return false;
        }
      }

      if (account) {
        if (adAccount.toLowerCase() !== account.toLowerCase()) {
          return false;
        }
      }
      if (feed) {
        if (campaignFeed.toLowerCase() !== feed.toLowerCase()) {
          return false;
        }
      }
      if (partner) {
        if (campaignPartner.toLowerCase() !== partner.toLowerCase()) {
          return false;
        }
      }

      if (dateRange && dateRange.length > 1) {
        if (!isDateInRange(date, dateRange[0], dateRange[1])) {
          return false;
        }
      }

      return true;
    });
  }, [filters, campaigns]);

  return (
    <div className="w-full h-full">
      <Filters data={campaigns} onFilterChange={handleFilterChange} />
      <div className="mt-3">
        <CampaignsTable
          data={filteredCampaigns}
          openCreateCampaignModal={openCreateCampaignModal}
        />
      </div>
    </div>
  );
}

export default Campaigns;
