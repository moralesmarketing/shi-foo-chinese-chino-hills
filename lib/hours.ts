import { business } from "@/lib/site-data";

export function getOpenStatus(now: Date = new Date()) {
  const day = now.getDay();
  const today = business.hoursByDay[day];
  const minutes = now.getHours() * 60 + now.getMinutes();

  const toMinutes = (t: string) => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
  };

  const openMin = toMinutes(today.open);
  const closeMin = toMinutes(today.close);
  const isOpen = minutes >= openMin && minutes < closeMin;

  const fmt = (t: string) => {
    const [h, m] = t.split(":").map(Number);
    const period = h >= 12 ? "PM" : "AM";
    const h12 = h % 12 === 0 ? 12 : h % 12;
    return m === 0 ? `${h12} ${period}` : `${h12}:${String(m).padStart(2, "0")} ${period}`;
  };

  return {
    isOpen,
    today: today.day,
    label: isOpen ? `Open now · closes ${fmt(today.close)}` : `Closed · opens ${fmt(today.open)}`,
    todayHours: `${fmt(today.open)} – ${fmt(today.close)}`,
  };
}
