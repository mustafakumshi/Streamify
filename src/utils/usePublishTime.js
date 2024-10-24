import { useMemo } from "react";

const usePublishTime = (publishedAt) => {
  const publishTime = useMemo(() => {
    const currentDate = new Date();
    const targetDate = new Date(publishedAt);
    const differenceMs = currentDate - targetDate;

    const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

    if (differenceDays >= 365) {
      const differenceYears = Math.floor(differenceDays / 365);
      if (differenceYears === 1) {
        return "1 year ago";
      } else {
        return `${differenceYears} years ago`;
      }
    } else if (differenceDays >= 30) {
      const differenceMonths = Math.floor(differenceDays / 30);
      if (differenceMonths === 1) {
        return "1 month ago";
      } else {
        return `${differenceMonths} months ago`;
      }
    } else if (differenceDays > 0) {
      if (differenceDays === 1) {
        return "1 day ago";
      } else {
        return `${differenceDays} days ago`;
      }
    } else {
      const differenceHours = Math.floor(differenceMs / (1000 * 60 * 60));
      if (differenceHours === 1) {
        return "1 hour ago";
      } else if (differenceHours > 0) {
        return `${differenceHours} hours ago`;
      } else {
        const differenceMinutes = Math.floor(differenceMs / (1000 * 60));
        if (differenceMinutes === 1) {
          return "1 minute ago";
        } else {
          return `${differenceMinutes} minutes ago`;
        }
      }
    }
  }, [publishedAt]);
  return publishTime;
};
export default usePublishTime;
