import { CAMPAIGN_KEYS } from "../../constants/common";

export const TRAFFIC_SOURCE_CONFIG = [
  {
    title: "Traffic Source",
    dataIndex: CAMPAIGN_KEYS.TRAFFIC_SOURCE,
    key: CAMPAIGN_KEYS.TRAFFIC_SOURCE,
  },
  {
    title: "Amount Spent",
    dataIndex: CAMPAIGN_KEYS.AMOUNT_SPENT,
    key: CAMPAIGN_KEYS.AMOUNT_SPENT,
    render: (text) => `$${Number(text).toFixed(2)}`,
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
    title: "Conversions",
    dataIndex: CAMPAIGN_KEYS.CONVERSIONS,
    key: CAMPAIGN_KEYS.CONVERSIONS,
  },
  {
    title: "NET",
    dataIndex: CAMPAIGN_KEYS.NET,
    key: CAMPAIGN_KEYS.NET,
    render: (text) => `$${Number(text).toFixed(2)}`,
  },
  {
    title: "ROI",
    dataIndex: CAMPAIGN_KEYS.ROI,
    key: CAMPAIGN_KEYS.ROI,
    render: (text) => `${Number(text).toFixed(2)}%`,
  },
];

export const AD_ACCOUNT_SOURCE_CONFIG = [
  {
    title: "Ad Account Name",
    dataIndex: CAMPAIGN_KEYS.ADACCOUNT,
    key: CAMPAIGN_KEYS.ADACCOUNT,
  },
  {
    title: "Amount Spent",
    dataIndex: CAMPAIGN_KEYS.AMOUNT_SPENT,
    key: CAMPAIGN_KEYS.AMOUNT_SPENT,
    render: (text) => `$${Number(text).toFixed(2)}`,
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
    title: "Conversions",
    dataIndex: CAMPAIGN_KEYS.CONVERSIONS,
    key: CAMPAIGN_KEYS.CONVERSIONS,
  },
  {
    title: "NET",
    dataIndex: CAMPAIGN_KEYS.NET,
    key: CAMPAIGN_KEYS.NET,
    render: (text) => `$${Number(text).toFixed(2)}`,
  },
  {
    title: "ROI",
    dataIndex: CAMPAIGN_KEYS.ROI,
    key: CAMPAIGN_KEYS.ROI,
    render: (text) => `${Number(text).toFixed(2)}%`,
  },
];

export const AD_SOURCE_CONFIG = [
  {
    title: "Ad",
    dataIndex: CAMPAIGN_KEYS.ADNAME,
    key: CAMPAIGN_KEYS.ADNAME,
  },
  {
    title: "Amount Spent",
    dataIndex: CAMPAIGN_KEYS.AMOUNT_SPENT,
    key: CAMPAIGN_KEYS.AMOUNT_SPENT,
    render: (text) => `$${Number(text).toFixed(2)}`,
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
    title: "Conversions",
    dataIndex: CAMPAIGN_KEYS.CONVERSIONS,
    key: CAMPAIGN_KEYS.CONVERSIONS,
  },
  {
    title: "NET",
    dataIndex: CAMPAIGN_KEYS.NET,
    key: CAMPAIGN_KEYS.NET,
    render: (text) => `$${Number(text).toFixed(2)}`,
  },
  {
    title: "ROI",
    dataIndex: CAMPAIGN_KEYS.ROI,
    key: CAMPAIGN_KEYS.ROI,
    render: (text) => `${Number(text).toFixed(2)}%`,
  },
];
export const CAMPAIGNS_SOURCE_CONFIG = [
  {
    title: "Campaign",
    dataIndex: CAMPAIGN_KEYS.CAMPAIGN_NAME,
    key: CAMPAIGN_KEYS.CAMPAIGN_NAME,
  },
  {
    title: "Amount Spent",
    dataIndex: CAMPAIGN_KEYS.AMOUNT_SPENT,
    key: CAMPAIGN_KEYS.AMOUNT_SPENT,
    render: (text) => `$${Number(text).toFixed(2)}`,
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
    title: "Conversions",
    dataIndex: CAMPAIGN_KEYS.CONVERSIONS,
    key: CAMPAIGN_KEYS.CONVERSIONS,
  },
  {
    title: "NET",
    dataIndex: CAMPAIGN_KEYS.NET,
    key: CAMPAIGN_KEYS.NET,
    render: (text) => `$${Number(text).toFixed(2)}`,
  },
  {
    title: "ROI",
    dataIndex: CAMPAIGN_KEYS.ROI,
    key: CAMPAIGN_KEYS.ROI,
    render: (text) => `${Number(text).toFixed(2)}%`,
  },
];
