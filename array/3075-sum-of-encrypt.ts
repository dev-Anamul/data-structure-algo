function sumOfEncryptedInt(nums: number[]): number {
  return nums.reduce((acc, cur) => acc + encrypt(cur), 0);
}

const encrypt = (num: number): number => {
  let maxDigit = 0;
  let i = 0;

  while (num !== 0) {
    maxDigit = Math.max(maxDigit, num % 10);
    num = Math.floor(num / 10);
    i++;
  }

  let maxNum = 0;
  while (i >= 1) {
    maxNum += maxDigit * 10 ** (i - 1);
    i--;
  }

  return maxNum;
};

console.log(sumOfEncryptedInt([10, 21, 31]));
