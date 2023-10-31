import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTimestamp(createdAt: Date): string {
  // Calculate the time difference in milliseconds
  const currentTime = new Date().getTime();
  const createdAtTime = createdAt.getTime();
  const timeDifference = currentTime - createdAtTime;

  // Define time units in milliseconds
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  const year = 365 * day;

  // Calculate the time ago
  if (timeDifference < minute) {
    const seconds = Math.round(timeDifference / 1000);
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  } else if (timeDifference < hour) {
    const minutes = Math.round(timeDifference / minute);
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (timeDifference < day) {
    const hours = Math.round(timeDifference / hour);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (timeDifference < month) {
    const days = Math.round(timeDifference / day);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (timeDifference < year) {
    const months = Math.round(timeDifference / month);
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else {
    const years = Math.round(timeDifference / year);
    return `${years} year${years > 1 ? "s" : ""} ago`;
  }
}
export function formatNumberWithExtension(num: number): string {
  let result = "";

  if (num >= 1000000) {
    result = (num / 1000000).toFixed(1) + "M";
    num /= 1000000;
  } else if (num >= 1000) {
    result = (num / 1000).toFixed(1) + "K";
    num /= 1000;
  } else {
    result = num ? num.toString() : "0";
  }

  return result;
}
