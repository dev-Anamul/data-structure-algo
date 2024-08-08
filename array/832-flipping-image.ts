function flipAndInvertImage(image: number[][]): number[][] {
  for (let i = 0; i < image.length; i++) {
    let len = image[i].length;
    let temp: number[] = [];
    for (let j = 0; j < len; j++) {
      temp[j] = (image[i].pop() as number) === 1 ? 0 : 1;
    }
    image[i] = [...temp];
  }

  return image;
}

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
);
