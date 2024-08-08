function minimumDifference(nums: number[], k: number): number {
  if (nums.length === 1) return 0;
  nums.sort((a, b) => a - b);

  let l = nums.length - 1,
    r = nums.length - 1,
    minDif = Number.MAX_SAFE_INTEGER;

  while (l >= 0) {
    if (r - l + 1 === k) {
      minDif = Math.min(minDif, nums[r] - nums[l]);
      r--;
    }
    l--;
  }

  return minDif;
}

console.log(
  minimumDifference(
    [
      41900, 69441, 94407, 37498, 20299, 10856, 36221, 2231, 54526, 79072,
      84309, 76765, 92282, 13401, 44698, 17586, 98455, 47895, 98889, 65298,
      32271, 23801, 83153, 12186, 7453, 79460, 67209, 54576, 87785, 47738,
      40750, 31265, 77990, 93502, 50364, 75098, 11712, 80013, 24193, 35209,
      56300, 85735, 3590, 24858, 6780, 50086, 87549, 7413, 90444, 12284, 44970,
      39274, 81201, 43353, 75808, 14508, 17389, 10313, 90055, 43102, 18659,
      20802, 70315, 48843, 12273, 78876, 36638, 17051, 20478,
    ],
    5
  )
);
