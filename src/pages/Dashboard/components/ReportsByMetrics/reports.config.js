import { CAMPAIGN_KEYS } from "../../../../constants/common";
import { getValuesByKey, sumByKey } from "../../../../utils/common.utils";

export function getReportsConfig(metrics) {
  return [
    {
      title: "Amount Spent",
      value: sumByKey(metrics, CAMPAIGN_KEYS.AMOUNT_SPENT),
      graphValues: getValuesByKey(metrics, CAMPAIGN_KEYS.AMOUNT_SPENT),
      dotColor: "#f1bf48",
    },
    // {
    //   title: "Revenue",
    //   value: sumByKey(metrics, "Revenue"),
    //   graphValues: getValuesByKey(metrics, "Revenue"),
    //   dotColor: "#7a45ff",
    // },
    {
      title: "NET",
      value: sumByKey(metrics, CAMPAIGN_KEYS.NET),
      graphValues: getValuesByKey(metrics, CAMPAIGN_KEYS.NET),
      dotColor: "#5893e1",
    },
    {
      title: "ROI",
      value: sumByKey(metrics, CAMPAIGN_KEYS.ROI),
      graphValues: getValuesByKey(metrics, CAMPAIGN_KEYS.ROI),
      dotColor: "#de8085",
    },
    {
      title: "Link Clicks",
      value: sumByKey(metrics, CAMPAIGN_KEYS.LINK_CLICKS),
      graphValues: getValuesByKey(metrics, CAMPAIGN_KEYS.LINK_CLICKS),
      dotColor: "#f1bf48",
    },
    {
      title: "Conversions",
      value: sumByKey(metrics, CAMPAIGN_KEYS.CONVERSIONS),
      graphValues: getValuesByKey(metrics, CAMPAIGN_KEYS.CONVERSIONS),
      dotColor: "#7a45ff",
    },
    // {
    //   title: "CPA",
    //   value: sumByKey(metrics, "CPA"),
    //   graphValues: getValuesByKey(metrics, "CPA"),
    //   dotColor: "#5893e1",
    // },
  ];
}
