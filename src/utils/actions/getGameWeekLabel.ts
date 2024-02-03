import { format, startOfWeek, getWeek } from "date-fns";

export function getGameWeekLabel(date: Date): string {
  const weekStart = startOfWeek(date, { weekStartsOn: 1 });
  return `Week ${getWeek(weekStart)} - ${format(weekStart, "yyyy")}`;
}
