import { CAMPAIGN_KEYS } from "../../../../constants/common";
import { getValuesByKey, sumByKey } from "../../../../utils/common.utils";

export function getReportsConfig(metrics) {
  const amountSpent = sumByKey(metrics, CAMPAIGN_KEYS.AMOUNT_SPENT);
  const net = sumByKey(metrics, CAMPAIGN_KEYS.NET);
  return [
    {
      title: "Amount Spent",
      value: `$${amountSpent}`,
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
      value: net.toFixed(2),
      graphValues: getValuesByKey(metrics, CAMPAIGN_KEYS.NET),
      dotColor: "#5893e1",
    },
    {
      title: "ROI",
      value: Number.isNaN((net / amountSpent) * 100)
        ? 0
        : `${((net / amountSpent) * 100).toFixed(2)}%`,
      graphValues: getValuesByKey(metrics, CAMPAIGN_KEYS.ROI),
      dotColor: "#de8085",
    },
    {
      title: "Link Clicks",
      value: Math.floor(sumByKey(metrics, CAMPAIGN_KEYS.LINK_CLICKS)),
      graphValues: getValuesByKey(metrics, CAMPAIGN_KEYS.LINK_CLICKS),
      dotColor: "#f1bf48",
    },
    {
      title: "Conversions",
      value: Math.floor(sumByKey(metrics, CAMPAIGN_KEYS.CONVERSIONS)),
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
