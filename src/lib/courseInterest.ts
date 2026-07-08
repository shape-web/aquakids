export const COURSE_INTEREST_EVENT = "aquakids:course-interest";

export function selectCourseInterest(value: string) {
  if (typeof window === "undefined") return;

  window.dispatchEvent(
    new CustomEvent<string>(COURSE_INTEREST_EVENT, { detail: value })
  );

  const target = document.getElementById("kontakt");
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}
