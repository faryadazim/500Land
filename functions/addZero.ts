export default function formatNumber(number: any) {
  // Use toLocaleString() with 'en-US' locale to add comma separator
  const formattedNumber = number.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Return the formatted number
  return formattedNumber;
}
