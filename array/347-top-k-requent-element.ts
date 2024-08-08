function topKFrequent(nums: number[], k: number): number[] {
  let mapper = new Map();

  type mapTuple = [number, number];
  for (let i = 0; i < nums.length; i++) {
    if (mapper.has(nums[i])) mapper.set(nums[i], mapper.get(nums[i]) + 1);
    else mapper.set(nums[i], 1);
  }

  let numWithFreqArr: mapTuple[] = Array.from(mapper);

  numWithFreqArr.sort((a, b) => b[1] - a[1]);

  let result: number[] = [];

  for (let j = 0; j < k; j++) {
    result.push(numWithFreqArr[j][0]);
  }

  return result;
}
