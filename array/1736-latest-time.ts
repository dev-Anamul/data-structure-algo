function maximumTime(time: string): string {
  let hours = hoursGenerator(time.split(":")[0]);
  let min = minutesGenerator(time.split(":")[1]);

  return hours + ":" + min;
}

const hoursGenerator = (time: string): string => {
  let hours = "";

  if (time.charAt(0) === "?" && time.charAt(1) === "?") hours = "23";
  else if (time.charAt(0) === "?") {
    if (+time.charAt(1) <= 3) hours = "2" + time.charAt(1);
    else hours = "1" + time.charAt(1);
  } else if (time.charAt(1) === "?") {
    if (time.charAt(0) === "2") hours = "23";
    else hours = time.charAt(0) + "9";
  } else hours = time;

  return hours;
};

const minutesGenerator = (time: string): string => {
  let min = "";
  if (time.charAt(0) === "?" && time.charAt(1) === "?") min = "59";
  else if (time.charAt(1) === "?") min = time.charAt(0) + "9";
  else if (time.charAt(0) === "?") min = "5" + time.charAt(1);
  else min = time;

  return min;
};

console.log(maximumTime("00:01"));
