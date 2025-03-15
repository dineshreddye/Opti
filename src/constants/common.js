import {
  FileTextOutlined,
  HomeOutlined,
  PoundOutlined,
  SettingOutlined,
  SoundOutlined,
} from "@ant-design/icons";

export const STATUS = {
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
};

export const CAMPAIGN_KEYS = {
  DATE: "date",
  CAMPAIGN_NAME: "campaignName",
  ADSET: "adSet",
  ADNAME: "adName",
  TRAFFIC_SOURCE: "trafficeSource",
  STATUS: "status",
  ADACCOUNT: "adAccount",
  BUDGET: "budget",
  RESULTS: "results",
  IMPRESSIONS: "impressions",
  AMOUNT_SPENT: "amountSpent",
  LINK_CLICKS: "linkClicks",
  CONVERSIONS: "conversions",
  NET: "net",
  ROI: "roi",
  FEED: "feed",
  PARTNER: "partner",
};

export const FEED = {
  GOOGLE: "Google",
  YAHOO: "Yahoo",
};

export const PARTNER = {
  CLICKSCO: "Clicksco",
  BIGPIPES: "Bigpipes",
  SPIGOT: "Spigot",
  JUBLEE: "Jublee",
};

export const PARTY_KEYS = {
  ADCORE: "adcore",
  M4M: "m4m",
  MW: "mw",
};

export const PARTY_LABELS = {
  [PARTY_KEYS.ADCORE]: "Ad Core",
  [PARTY_KEYS.M4M]: "M4M",
  [PARTY_KEYS.MW]: "MW",
};

export const PARTY_OPTIONS = [
  {
    key: PARTY_KEYS.ADCORE,
    label: PARTY_LABELS[PARTY_KEYS.ADCORE],
  },
  {
    key: PARTY_KEYS.M4M,
    label: PARTY_LABELS[PARTY_KEYS.M4M],
  },
  {
    key: PARTY_KEYS.MW,
    label: PARTY_LABELS[PARTY_KEYS.MW],
  },
];

export const PARTNER_OPTIONS_GOOGLE = [
  {
    key: `${PARTNER.CLICKSCO}_${FEED.GOOGLE}`,
    label: PARTNER.CLICKSCO,
  },
  {
    key: `${PARTNER.BIGPIPES}_${FEED.GOOGLE}`,
    label: PARTNER.BIGPIPES,
  },
  {
    key: `${PARTNER.SPIGOT}_${FEED.GOOGLE}`,
    label: PARTNER.SPIGOT,
  },
  {
    key: `${PARTNER.JUBLEE}_${FEED.GOOGLE}`,
    label: PARTNER.JUBLEE,
  },
];

export const PARTNER_OPTIONS_YAHOO = [
  {
    key: `${PARTNER.CLICKSCO}_${FEED.YAHOO}`,
    label: PARTNER.CLICKSCO,
  },
  {
    key: `${PARTNER.BIGPIPES}_${FEED.YAHOO}`,
    label: PARTNER.BIGPIPES,
  },
  {
    key: `${PARTNER.SPIGOT}_${FEED.YAHOO}`,
    label: PARTNER.SPIGOT,
  },
  {
    key: `${PARTNER.JUBLEE}_${FEED.YAHOO}`,
    label: PARTNER.JUBLEE,
  },
];

export const FEED_OPTIONS = [
  {
    key: FEED.GOOGLE,
    label: FEED.GOOGLE,
    children: PARTNER_OPTIONS_GOOGLE,
  },
  {
    key: FEED.YAHOO,
    label: FEED.YAHOO,
    children: PARTNER_OPTIONS_YAHOO,
  },
];

export const PAGES = {
  DASHBOARD: "DASHBOARD",
  CAMPAIGNS: "CAMPAIGNS",
  REPORTS: "REPORTS",
  SETTINGS: "SETTINGS",
  BILLING: "BILLINGS",
};

export const SIDEBAR_MENU_ITEMS = [
  {
    key: PAGES.DASHBOARD,
    label: "Dashboard",
    icon: <HomeOutlined />,
    children: FEED_OPTIONS,
  },
  {
    key: PAGES.CAMPAIGNS,
    label: "Campaigns",
    icon: <SoundOutlined />,
  },
  {
    key: PAGES.REPORTS,
    label: "Reports",
    icon: <FileTextOutlined />,
  },
  {
    key: PAGES.BILLING,
    label: "Billings",
    icon: <PoundOutlined />,
  },
  {
    key: PAGES.SETTINGS,
    label: "Settings",
    icon: <SettingOutlined />,
  },
];

export const NUMBER_TO_MONTH_MAPPING = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};
