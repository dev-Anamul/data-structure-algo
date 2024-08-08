function isOneBitCharacter(bits: number[]): boolean {
  if (bits.length === 2) {
    return bits[0] === 0 && bits[1] === 0;
  }
  return bits.length % 2 !== 0 && bits[bits.length - 1] === 0;
}
