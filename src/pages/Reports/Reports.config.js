import { CAMPAIGN_KEYS } from "../../constants/common";

export const TRAFFIC_SOURCE_CONFIG = [
  {
    title: "Traffic Source",
    dataIndex: CAMPAIGN_KEYS.TRAFFIC_SOURCE,
    key: CAMPAIGN_KEYS.TRAFFIC_SOURCE,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.TRAFFIC_SOURCE]?.localeCompare(
        b[CAMPAIGN_KEYS.TRAFFIC_SOURCE],
      ),
  },
  {
    title: "Amount Spent",
    dataIndex: CAMPAIGN_KEYS.AMOUNT_SPENT,
    key: CAMPAIGN_KEYS.AMOUNT_SPENT,
    render: (text) => `$${Number(text).toFixed(2)}`,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.AMOUNT_SPENT] - b[CAMPAIGN_KEYS.AMOUNT_SPENT],
  },
  {
    title: "Impressions",
    dataIndex: CAMPAIGN_KEYS.IMPRESSIONS,
    key: CAMPAIGN_KEYS.IMPRESSIONS,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.IMPRESSIONS] - b[CAMPAIGN_KEYS.IMPRESSIONS],
  },
  {
    title: "Link Clicks",
    dataIndex: CAMPAIGN_KEYS.LINK_CLICKS,
    key: CAMPAIGN_KEYS.LINK_CLICKS,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.LINK_CLICKS] - b[CAMPAIGN_KEYS.LINK_CLICKS],
  },
  {
    title: "Conversions",
    dataIndex: CAMPAIGN_KEYS.CONVERSIONS,
    key: CAMPAIGN_KEYS.CONVERSIONS,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.CONVERSIONS] - b[CAMPAIGN_KEYS.CONVERSIONS],
  },
  {
    title: "NET",
    dataIndex: CAMPAIGN_KEYS.NET,
    key: CAMPAIGN_KEYS.NET,
    render: (text) => `$${Number(text).toFixed(2)}`,
    sorter: (a, b) => a[CAMPAIGN_KEYS.NET] - b[CAMPAIGN_KEYS.NET],
  },
  {
    title: "ROI",
    dataIndex: CAMPAIGN_KEYS.ROI,
    key: CAMPAIGN_KEYS.ROI,
    render: (text) => `${Number(text).toFixed(2)}%`,
    sorter: (a, b) => a[CAMPAIGN_KEYS.ROI] - b[CAMPAIGN_KEYS.ROI],
  },
];

export const AD_ACCOUNT_SOURCE_CONFIG = [
  {
    title: "Ad Account Name",
    dataIndex: CAMPAIGN_KEYS.ADACCOUNT,
    key: CAMPAIGN_KEYS.ADACCOUNT,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.ADACCOUNT]?.localeCompare(b[CAMPAIGN_KEYS.ADACCOUNT]),
  },
  {
    title: "Amount Spent",
    dataIndex: CAMPAIGN_KEYS.AMOUNT_SPENT,
    key: CAMPAIGN_KEYS.AMOUNT_SPENT,
    render: (text) => `$${Number(text).toFixed(2)}`,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.AMOUNT_SPENT] - b[CAMPAIGN_KEYS.AMOUNT_SPENT],
  },
  {
    title: "Impressions",
    dataIndex: CAMPAIGN_KEYS.IMPRESSIONS,
    key: CAMPAIGN_KEYS.IMPRESSIONS,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.IMPRESSIONS] - b[CAMPAIGN_KEYS.IMPRESSIONS],
  },
  {
    title: "Link Clicks",
    dataIndex: CAMPAIGN_KEYS.LINK_CLICKS,
    key: CAMPAIGN_KEYS.LINK_CLICKS,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.LINK_CLICKS] - b[CAMPAIGN_KEYS.LINK_CLICKS],
  },
  {
    title: "Conversions",
    dataIndex: CAMPAIGN_KEYS.CONVERSIONS,
    key: CAMPAIGN_KEYS.CONVERSIONS,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.CONVERSIONS] - b[CAMPAIGN_KEYS.CONVERSIONS],
  },
  {
    title: "NET",
    dataIndex: CAMPAIGN_KEYS.NET,
    key: CAMPAIGN_KEYS.NET,
    render: (text) => `$${Number(text).toFixed(2)}`,
    sorter: (a, b) => a[CAMPAIGN_KEYS.NET] - b[CAMPAIGN_KEYS.NET],
  },
  {
    title: "ROI",
    dataIndex: CAMPAIGN_KEYS.ROI,
    key: CAMPAIGN_KEYS.ROI,
    render: (text) => `${Number(text).toFixed(2)}%`,
    sorter: (a, b) => a[CAMPAIGN_KEYS.ROI] - b[CAMPAIGN_KEYS.ROI],
  },
];

export const AD_SOURCE_CONFIG = [
  {
    title: "Ad",
    dataIndex: CAMPAIGN_KEYS.ADNAME,
    key: CAMPAIGN_KEYS.ADNAME,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.ADNAME]?.localeCompare(b[CAMPAIGN_KEYS.ADNAME]),
  },
  {
    title: "Amount Spent",
    dataIndex: CAMPAIGN_KEYS.AMOUNT_SPENT,
    key: CAMPAIGN_KEYS.AMOUNT_SPENT,
    render: (text) => `$${Number(text).toFixed(2)}`,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.AMOUNT_SPENT] - b[CAMPAIGN_KEYS.AMOUNT_SPENT],
  },
  {
    title: "Impressions",
    dataIndex: CAMPAIGN_KEYS.IMPRESSIONS,
    key: CAMPAIGN_KEYS.IMPRESSIONS,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.IMPRESSIONS] - b[CAMPAIGN_KEYS.IMPRESSIONS],
  },
  {
    title: "Link Clicks",
    dataIndex: CAMPAIGN_KEYS.LINK_CLICKS,
    key: CAMPAIGN_KEYS.LINK_CLICKS,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.LINK_CLICKS] - b[CAMPAIGN_KEYS.LINK_CLICKS],
  },
  {
    title: "Conversions",
    dataIndex: CAMPAIGN_KEYS.CONVERSIONS,
    key: CAMPAIGN_KEYS.CONVERSIONS,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.CONVERSIONS] - b[CAMPAIGN_KEYS.CONVERSIONS],
  },
  {
    title: "NET",
    dataIndex: CAMPAIGN_KEYS.NET,
    key: CAMPAIGN_KEYS.NET,
    render: (text) => `$${Number(text).toFixed(2)}`,
    sorter: (a, b) => a[CAMPAIGN_KEYS.NET] - b[CAMPAIGN_KEYS.NET],
  },
  {
    title: "ROI",
    dataIndex: CAMPAIGN_KEYS.ROI,
    key: CAMPAIGN_KEYS.ROI,
    render: (text) => `${Number(text).toFixed(2)}%`,
    sorter: (a, b) => a[CAMPAIGN_KEYS.ROI] - b[CAMPAIGN_KEYS.ROI],
  },
];
export const CAMPAIGNS_SOURCE_CONFIG = [
  {
    title: "Campaign",
    dataIndex: CAMPAIGN_KEYS.CAMPAIGN_NAME,
    key: CAMPAIGN_KEYS.CAMPAIGN_NAME,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.CAMPAIGN_NAME]?.localeCompare(
        b[CAMPAIGN_KEYS.CAMPAIGN_NAME],
      ),
  },
  {
    title: "Amount Spent",
    dataIndex: CAMPAIGN_KEYS.AMOUNT_SPENT,
    key: CAMPAIGN_KEYS.AMOUNT_SPENT,
    render: (text) => `$${Number(text).toFixed(2)}`,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.AMOUNT_SPENT] - b[CAMPAIGN_KEYS.AMOUNT_SPENT],
  },
  {
    title: "Impressions",
    dataIndex: CAMPAIGN_KEYS.IMPRESSIONS,
    key: CAMPAIGN_KEYS.IMPRESSIONS,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.IMPRESSIONS] - b[CAMPAIGN_KEYS.IMPRESSIONS],
  },
  {
    title: "Link Clicks",
    dataIndex: CAMPAIGN_KEYS.LINK_CLICKS,
    key: CAMPAIGN_KEYS.LINK_CLICKS,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.LINK_CLICKS] - b[CAMPAIGN_KEYS.LINK_CLICKS],
  },
  {
    title: "Conversions",
    dataIndex: CAMPAIGN_KEYS.CONVERSIONS,
    key: CAMPAIGN_KEYS.CONVERSIONS,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.CONVERSIONS] - b[CAMPAIGN_KEYS.CONVERSIONS],
  },
  {
    title: "NET",
    dataIndex: CAMPAIGN_KEYS.NET,
    key: CAMPAIGN_KEYS.NET,
    render: (text) => `$${Number(text).toFixed(2)}`,
    sorter: (a, b) => a[CAMPAIGN_KEYS.NET] - b[CAMPAIGN_KEYS.NET],
  },
  {
    title: "ROI",
    dataIndex: CAMPAIGN_KEYS.ROI,
    key: CAMPAIGN_KEYS.ROI,
    render: (text) => `${Number(text).toFixed(2)}%`,
    sorter: (a, b) => a[CAMPAIGN_KEYS.ROI] - b[CAMPAIGN_KEYS.ROI],
  },
];
export const FEED_SOURCE_CONFIG = [
  {
    title: "Feed",
    dataIndex: CAMPAIGN_KEYS.FEED,
    key: CAMPAIGN_KEYS.FEED,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.FEED]?.localeCompare(b[CAMPAIGN_KEYS.FEED]),
  },
  {
    title: "Amount Spent",
    dataIndex: CAMPAIGN_KEYS.AMOUNT_SPENT,
    key: CAMPAIGN_KEYS.AMOUNT_SPENT,
    render: (text) => `$${Number(text).toFixed(2)}`,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.AMOUNT_SPENT] - b[CAMPAIGN_KEYS.AMOUNT_SPENT],
  },
  {
    title: "Impressions",
    dataIndex: CAMPAIGN_KEYS.IMPRESSIONS,
    key: CAMPAIGN_KEYS.IMPRESSIONS,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.IMPRESSIONS] - b[CAMPAIGN_KEYS.IMPRESSIONS],
  },
  {
    title: "Link Clicks",
    dataIndex: CAMPAIGN_KEYS.LINK_CLICKS,
    key: CAMPAIGN_KEYS.LINK_CLICKS,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.LINK_CLICKS] - b[CAMPAIGN_KEYS.LINK_CLICKS],
  },
  {
    title: "Conversions",
    dataIndex: CAMPAIGN_KEYS.CONVERSIONS,
    key: CAMPAIGN_KEYS.CONVERSIONS,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.CONVERSIONS] - b[CAMPAIGN_KEYS.CONVERSIONS],
  },
  {
    title: "NET",
    dataIndex: CAMPAIGN_KEYS.NET,
    key: CAMPAIGN_KEYS.NET,
    render: (text) => `$${Number(text).toFixed(2)}`,
    sorter: (a, b) => a[CAMPAIGN_KEYS.NET] - b[CAMPAIGN_KEYS.NET],
  },
  {
    title: "ROI",
    dataIndex: CAMPAIGN_KEYS.ROI,
    key: CAMPAIGN_KEYS.ROI,
    render: (text) => `${Number(text).toFixed(2)}%`,
    sorter: (a, b) => a[CAMPAIGN_KEYS.ROI] - b[CAMPAIGN_KEYS.ROI],
  },
];
export const PARTNER_SOURCE_CONFIG = [
  {
    title: "Partner",
    dataIndex: CAMPAIGN_KEYS.PARTNER,
    key: CAMPAIGN_KEYS.PARTNER,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.PARTNER]?.localeCompare(b[CAMPAIGN_KEYS.PARTNER]),
  },
  {
    title: "Amount Spent",
    dataIndex: CAMPAIGN_KEYS.AMOUNT_SPENT,
    key: CAMPAIGN_KEYS.AMOUNT_SPENT,
    render: (text) => `$${Number(text).toFixed(2)}`,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.AMOUNT_SPENT] - b[CAMPAIGN_KEYS.AMOUNT_SPENT],
  },
  {
    title: "Impressions",
    dataIndex: CAMPAIGN_KEYS.IMPRESSIONS,
    key: CAMPAIGN_KEYS.IMPRESSIONS,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.IMPRESSIONS] - b[CAMPAIGN_KEYS.IMPRESSIONS],
  },
  {
    title: "Link Clicks",
    dataIndex: CAMPAIGN_KEYS.LINK_CLICKS,
    key: CAMPAIGN_KEYS.LINK_CLICKS,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.LINK_CLICKS] - b[CAMPAIGN_KEYS.LINK_CLICKS],
  },
  {
    title: "Conversions",
    dataIndex: CAMPAIGN_KEYS.CONVERSIONS,
    key: CAMPAIGN_KEYS.CONVERSIONS,
    sorter: (a, b) =>
      a[CAMPAIGN_KEYS.CONVERSIONS] - b[CAMPAIGN_KEYS.CONVERSIONS],
  },
  {
    title: "NET",
    dataIndex: CAMPAIGN_KEYS.NET,
    key: CAMPAIGN_KEYS.NET,
    render: (text) => `$${Number(text).toFixed(2)}`,
    sorter: (a, b) => a[CAMPAIGN_KEYS.NET] - b[CAMPAIGN_KEYS.NET],
  },
  {
    title: "ROI",
    dataIndex: CAMPAIGN_KEYS.ROI,
    key: CAMPAIGN_KEYS.ROI,
    render: (text) => `${Number(text).toFixed(2)}%`,
    sorter: (a, b) => a[CAMPAIGN_KEYS.ROI] - b[CAMPAIGN_KEYS.ROI],
  },
];
