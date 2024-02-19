"use client";
import CountUp from "react-countup";

interface Props {
  prefix?: string;
  suffix?: string;
  end: number;
}
export default function Counter({ prefix, suffix, end }: Props) {
  return <CountUp prefix={prefix} suffix={suffix} end={end} duration={2} />;
}
