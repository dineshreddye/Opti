import { CAMPAIGN_KEYS } from "../../../../constants/common";

export const TRAFFIC_SOURCE_TABLE_CONFIG = {
  columns: [
    {
      title: "Traffic Source",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Impressions",
      dataIndex: CAMPAIGN_KEYS.IMPRESSIONS,
      key: CAMPAIGN_KEYS.IMPRESSIONS,
    },
    {
      title: "Link Clicks",
      dataIndex: CAMPAIGN_KEYS.LINK_CLICKS,
      key: CAMPAIGN_KEYS.LINK_CLICKS,
    },
    {
      title: "Amount",
      dataIndex: CAMPAIGN_KEYS.AMOUNT_SPENT,
      key: CAMPAIGN_KEYS.AMOUNT_SPENT,
    },
    // {
    //   title: "Revenue",
    //   dataIndex: "Revenue",
    //   key: "Revenue",
    // },
    {
      title: "ROI",
      dataIndex: CAMPAIGN_KEYS.ROI,
      key: CAMPAIGN_KEYS.ROI,
    },
    // {
    //   title: "Net",
    //   dataIndex: "Net",
    //   key: "Net",
    // },
  ],
};

export const PERFORMANCE_BY_AD_ACCOUNT_TABLE_CONFIG = {
  columns: [
    {
      title: "Ad Account",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Impressions",
      dataIndex: CAMPAIGN_KEYS.IMPRESSIONS,
      key: CAMPAIGN_KEYS.IMPRESSIONS,
    },
    {
      title: "Link Clicks",
      dataIndex: CAMPAIGN_KEYS.LINK_CLICKS,
      key: CAMPAIGN_KEYS.LINK_CLICKS,
    },
    {
      title: "Amount",
      dataIndex: CAMPAIGN_KEYS.AMOUNT_SPENT,
      key: CAMPAIGN_KEYS.AMOUNT_SPENT,
    },
    // {
    //   title: "Revenue",
    //   dataIndex: "Revenue",
    //   key: "Revenue",
    // },
    {
      title: "ROI",
      dataIndex: CAMPAIGN_KEYS.ROI,
      key: CAMPAIGN_KEYS.ROI,
    },
    // {
    //   title: "Net",
    //   dataIndex: "Net",
    //   key: "Net",
    // },
  ],
};
