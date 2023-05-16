let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "김상신 / 정우성",
    start: todayStr + "T01:00:00",
    end: todayStr + "T02:00:00",
  },
  {
    id: createEventId(),
    title: "김상신 / 정우성",
    start: todayStr + "T13:00:00",
    end: todayStr + "T15:30:00",
  },
];

export function createEventId() {
  return String(eventGuid++);
}
