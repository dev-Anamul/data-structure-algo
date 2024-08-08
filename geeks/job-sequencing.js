class Solution {
  /**
   * JobScheduling
   * @param {Array<number>} arr
   * @param {number} n
   * @returns {number}
   */
  JobScheduling(arr, n) {
    arr.sort((a, b) => b[2] - a[2]);
    let maxDeadline = 0;

    for (let i = 0; i < n; i++) {
      maxDeadline = Math.max(maxDeadline, arr[i][1]);
    }

    let result = 0;
    let slot = Array(maxDeadline).fill(false);

    for (let i = 0; i < n; i++) {
      for (let j = Math.min(n, arr[i][1]) - 1; j >= 0; j--) {
        if (!slot[j]) {
          slot[j] = true;
          result += arr[i][2];
          break;
        }
      }
    }
    return result;
  }
}
