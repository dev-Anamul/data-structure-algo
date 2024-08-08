function countTime(time: string): number {
  let hChoi = hourChoices(time.split(":")[0]);
  let mChoi = minutesChoices(time.split(":")[1]);
  console.log(hChoi, mChoi);

  return hChoi * mChoi;
}

const hourChoices = (hour: string): number => {
  if (hour.charAt(0) === "?" && hour.charAt(1) === "?") return 24;
  if (hour.charAt(0) === "?" && hour.charAt(1) <= "3") return 3;
  if (hour.charAt(0) === "?" && hour.charAt(1) > "3") return 2;
  if (hour.charAt(0) === "2" && hour.charAt(1) === "?") return 4;
  if (hour.charAt(0) < "2" && hour.charAt(1) === "?") return 10;
  return 1;
};

const minutesChoices = (min: string) => {
  if (min.charAt(0) === "?" && min.charAt(1) === "?") return 60;
  if (min.charAt(0) !== "?" && min.charAt(1) === "?") return 10;
  if (min.charAt(0) === "?" && min.charAt(1) !== "?") return 6;
  if (min.charAt(0) !== "?" && min.charAt(1) !== "?") return 1;
  return 10;
};

console.log(countTime("0?:0?"));
