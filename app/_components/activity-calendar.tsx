"use client";

import {
  ActivityCalendar,
  Props as CalendarProps,
  BlockElement,
  Activity,
} from "react-activity-calendar";

// Extend the original Props with extra options
export interface ExtendedCalendarProps extends CalendarProps {
  hideTotalCount?: boolean;
  hideColorLegend?: boolean;
  hideMonthLabels?: boolean;
}

// Typed wrapper component
export default function GithubCalendar(props: ExtendedCalendarProps) {
  return <ActivityCalendar {...props} />;
}
