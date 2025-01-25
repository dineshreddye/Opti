/* eslint-disable no-self-compare */
/* eslint-disable no-restricted-syntax */
/**
 * Custom isNaN function to check if a value is not a number.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns true if the value is NaN; otherwise false.
 */
function isNaN(value) {
  return typeof value === "number" && value !== value; // NaN is the only value in JavaScript where value !== value
}

/**
 * Groups data by the specified key and sums up numeric values in the objects.
 *
 * @param {Array<Object>} data - List of objects to process.
 * @param {string} key - The key to group by.
 * @returns {Array<Object>} - A list of grouped objects with summed numeric values.
 */
export function groupAndSumByKey(data, key) {
  const groupedData = {};

  data.forEach((item) => {
    const groupKey = item[key];

    if (!groupedData[groupKey]) {
      // Initialize group if it doesn't exist
      groupedData[groupKey] = { [key]: groupKey };
    }

    // Iterate through all keys in the object
    for (const [k, v] of Object.entries(item)) {
      if (k !== key) {
        // Attempt to convert the value to a number
        const numValue = parseFloat(v);
        if (!isNaN(numValue)) {
          // Add to the group's total or initialize it
          groupedData[groupKey][k] = (groupedData[groupKey][k] || 0) + numValue;
        } else {
          // Preserve non-numeric fields if they are consistent
          groupedData[groupKey][k] = groupedData[groupKey][k] || v;
        }
      }
    }
  });

  // Round numeric values to 2 decimal places
  for (const group of Object.values(groupedData)) {
    for (const [k, v] of Object.entries(group)) {
      if (typeof v === "number") {
        group[k] = parseFloat(v.toFixed(2));
      }
    }
  }

  // Convert grouped data back to an array
  return Object.values(groupedData);
}
