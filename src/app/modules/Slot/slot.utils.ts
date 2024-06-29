const formatMinutes = (minutes: number) => {
  const hours = Math.floor(minutes / 60)
    .toString()
    .padStart(2, '0');
  const mins = (minutes % 60).toString().padStart(2, '0');
  return `${hours}:${mins}`;
};

export const generateSlotWithTimeInterval = (
  duration: number,
  startTime: string,
  endTime: string,
) => {
  type TSlotTimeIntervals = {
    startTime: string;
    endTime: string;
  };

  const slotTimeIntervals: TSlotTimeIntervals[] = [];
  // Convert start time and end time to minutes
  const startMinutes =
    parseInt(startTime.split(':')[0]) * 60 + parseInt(startTime.split(':')[1]);
  const endMinutes =
    parseInt(endTime.split(':')[0]) * 60 + parseInt(endTime.split(':')[1]);

  // Calculate total duration and number of slots
  const totalDuration = endMinutes - startMinutes;
  const numberOfSlots = Math.ceil(totalDuration / duration);

  // Generate slot time intervals
  for (let i = 0; i < numberOfSlots; i++) {
    const slotStartMinutes = startMinutes + i * duration;
    const slotEndMinutes = Math.min(slotStartMinutes + duration, endMinutes);

    slotTimeIntervals.push({
      startTime: formatMinutes(slotStartMinutes),
      endTime: formatMinutes(slotEndMinutes),
    });
  }

  return slotTimeIntervals;
};
