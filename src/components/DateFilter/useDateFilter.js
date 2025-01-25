import dayjs from "dayjs";

export const predefinedRanges = {
  "Last 7 Days": [dayjs().subtract(7, "day"), dayjs()],
  "Last 15 Days": [dayjs().subtract(15, "day"), dayjs()],
  "Last 30 Days": [dayjs().subtract(30, "day"), dayjs()],
};

const useDateFilter = (onFilter) => {
  const handleRangeSelect = (key) => {
    const range = predefinedRanges[key];
    if (onFilter) {
      onFilter(range, key);
    }
  };

  return {
    predefinedRanges,
    handleRangeSelect,
  };
};

export default useDateFilter;
