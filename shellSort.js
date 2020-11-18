const shellSort = arr => {
  const gap = arr.length;
  let h = 1;
  while ( h < gap / 3 ) {
    h = 3 * h + 1;
  }
  console.log(h,gap);
  while ( h >= 1 ) {
    for ( let i = h; i < gap; i++ ) {
      console.log(i,h);
      for ( let j = i; j >= h && arr[ j ] < arr[ j - h ];  j -= h ) {
        console.log(j,i,h);
        console.log(arr[j],arr[j-h]);
        [ arr[ j ], arr[ j - h ] ] = [ arr[ j - h ], arr[ j ] ];
      }
    }
    h = ( h - 1 ) / 3;
  }

  return arr;
}


const arr = [17, 26, 93, 44, 77, 31, 54, 55, 20];
const result = shellSort(arr);

result;
console.log(result);