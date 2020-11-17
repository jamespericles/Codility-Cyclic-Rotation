function solution(A, K) {
  // this function calls for an array and shiftCounts variable
  const rotate = (arr, shiftCount) => [
    ...arr.slice(-shiftCount),
    ...arr.slice(0, -shiftCount),
  ];

  //   rotations resulting in the same array as before (when K = A.length) are unnecessary so I chose to use division remainder
  const shiftCount = K % A.length;

  return shiftCount ? rotate(A, shiftCount) : A;
}
