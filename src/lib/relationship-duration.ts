/** Date-only arithmetic keeps the memorial duration independent of timezone. */
export function relationshipDuration(startDate: string, endDate: string) {
  const start = Date.parse(`${startDate.slice(0, 10)}T00:00:00Z`);
  const end = Date.parse(`${endDate.slice(0, 10)}T00:00:00Z`);
  const days = Math.floor(Math.max(0, end - start) / 86_400_000);
  return { days, hours: 0, minutes: 0, seconds: 0 };
}