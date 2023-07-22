import dayjs from 'dayjs'
import duration from "dayjs/plugin/duration";
import { useState, useMemo } from "react";

dayjs.extend(duration);

interface CountdownProps {
  endTime: Date;
}

export const Countdown: React.FC<CountdownProps> = ({
  endTime,
}) => {
  const [time, setTime] = useState<string>();

  useMemo(() => {
    var currentTime = dayjs();
    var diffTime = Math.abs(dayjs(endTime).unix() - currentTime.unix());

    var duration = dayjs.duration(diffTime, "seconds");
    var interval = 1000;
    let intervalL = setInterval(function() {
      duration = dayjs.duration(
        duration.asSeconds() - interval / 1000,
        "seconds"
      );
      const timestamp = duration.format("HH:mm:ss")
      setTime(timestamp);
    }, interval);
    return () => clearInterval(intervalL);
  }, []);

  return <>{time}</>;
};
