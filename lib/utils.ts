import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  // const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
  return formattedDate;
}

export function getTimeAgo(createdAt: string): string {
  const now = new Date();
  const date = new Date(createdAt);

  const timestamp = date.getTime();
  const secondsElapsed = Math.floor((now.getTime() - timestamp) / 1000);

  if (secondsElapsed < 60) {
    return `${secondsElapsed} seconds ago`;
  }

  const minutesElapsed = Math.floor(secondsElapsed / 60);

  if (minutesElapsed < 60) {
    return `${minutesElapsed} minutes ago`;
  }

  const hoursElapsed = Math.floor(minutesElapsed / 60);

  if (hoursElapsed < 24) {
    return `${hoursElapsed} hours ago`;
  }

  const daysElapsed = Math.floor(hoursElapsed / 24);

  if (daysElapsed < 30) {
    return `${daysElapsed} days ago`;
  }

  const monthsElapsed = Math.floor(daysElapsed / 30);

  if (monthsElapsed < 12) {
    return `${monthsElapsed} months ago`;
  }

  const yearsElapsed = Math.floor(monthsElapsed / 12);

  return `${yearsElapsed} years ago`;
}
