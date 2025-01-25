import _filter from "lodash/filter";
import _get from "lodash/get";
import { CAMPAIGN_KEYS } from "../constants/common";

export function filterByDateRange(data, from, to) {
  // Parse 'from' and 'to' dates into Date objects
  const fromDate = new Date(from);
  const toDate = new Date(to);

  // Filter the data
  return data.filter((item) => {
    const itemDate = new Date(item[CAMPAIGN_KEYS.DATE]);
    return itemDate >= fromDate && itemDate <= toDate;
  });
}

export function sumByKey(data, key) {
  // Ensure the input is an array
  if (!Array.isArray(data)) {
    return 0;
  }

  // Calculate the sum of values for the given key
  return data.reduce((sum, item) => {
    const value = item[key];
    // Add to sum only if the value is a valid number
    return sum + (Number(value) || 0);
  }, 0);
}

export function getValuesByKey(data, key) {
  return data.map((item) => {
    return { value: Number(item[key]) || 0 };
  });
}

export function groupAndSortWithSumByKeyName(data, keyName) {
  if (!Array.isArray(data)) {
    throw new Error("Input data must be an array.");
  }
  if (typeof keyName !== "string") {
    throw new Error("Key name must be a string.");
  }

  // Group data by the specified key and calculate sums
  const groupedData = data.reduce((acc, item) => {
    const groupKey = item[keyName] || "Undefined"; // Handle undefined keys
    if (!acc[groupKey]) {
      acc[groupKey] = { count: 0 };
    }

    acc[groupKey].count += 1;

    // Use Object.keys and map to iterate over the object instead of for...of
    Object.keys(item).forEach((k) => {
      const v = item[k];
      // if (typeof v === "number") {
      acc[groupKey][k] = (acc[groupKey][k] || 0) + (Number(v) || 0);
      // }
    });

    return acc;
  }, {});

  // Convert grouped data into an array and sort by group size in descending order
  const sortedGroups = Object.entries(groupedData)
    .map(([key, values]) => {
      // Truncate number values to two decimal places
      const truncatedValues = Object.keys(values).reduce((result, k) => {
        const v = values[k];
        // eslint-disable-next-line no-param-reassign
        result[k] = typeof v === "number" ? parseFloat(v.toFixed(2)) : v;
        return result;
      }, {});

      return { key, ...truncatedValues };
    })
    .sort((a, b) => b.count - a.count);

  return sortedGroups;
}

/**
 * Check if a date is within the range of start date and end date (inclusive).
 *
 * @param {string | Date} date - The date to check.
 * @param {string | Date} startDate - The start date of the range.
 * @param {string | Date} endDate - The end date of the range.
 * @returns {boolean} - Returns true if the date is within the range, inclusive; otherwise false.
 */
export function isDateInRange(date, startDate, endDate) {
  // Convert all inputs to Date objects
  const targetDate = new Date(date);
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Validate the Date objects using their time value
  if (
    targetDate.toString() === "Invalid Date" ||
    start.toString() === "Invalid Date" ||
    end.toString() === "Invalid Date"
  ) {
    throw new Error("Invalid date provided");
  }

  // Check if the target date is within the range (inclusive)
  return targetDate >= start && targetDate <= end;
}

export const getUndeletedCampaigns = (campaigns) => {
  return _filter(campaigns, (campaign) => {
    return _get(campaign, "isDeleted") !== true;
  });
};
