import { CAMPAIGN_KEYS } from "../../constants/common";

function parseObject(obj) {
  // Destructure required fields and return the transformed object
  const { date, amountSpent, net, roi, linkClicks } = obj;
  // console.log({ date });
  // const splitDates = date.split("-");
  // const formattedDate = `${splitDates[1]}-${splitDates[0]}-${splitDates[2]}`;

  return {
    [CAMPAIGN_KEYS.DATE]: date,
    [CAMPAIGN_KEYS.AMOUNT_SPENT]: Number(amountSpent) || 0,
    [CAMPAIGN_KEYS.NET]: Number(net) || 0,
    [CAMPAIGN_KEYS.ROI]: Number(roi) || 0,
    [CAMPAIGN_KEYS.LINK_CLICKS]: Number(linkClicks) || 0,
  };
}

function sortByDate(list, dateKey) {
  return list.sort((a, b) => {
    // Parse the dates from the strings
    const dateA = a[dateKey].split("-").reverse().join("-");
    const dateB = b[dateKey].split("-").reverse().join("-");

    // Compare the parsed dates
    return new Date(dateA) - new Date(dateB);
  });
}

export function parseDataForConsolidatedGraph(data) {
  const parsedData = sortByDate(data.map(parseObject), CAMPAIGN_KEYS.DATE);

  const ret = [];
  if (parsedData.length > 0) {
    ret.push(Object.keys(parsedData[0]));
    parsedData.forEach((obj) => ret.push(Object.values(obj)));
  }

  return ret;
}
