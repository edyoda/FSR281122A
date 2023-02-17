// Best Case: O(1), This will take place if the element to be searched is on the first index of the given list. So, the number of comparisons, in this case, is 1.
// Average Case: O(n), This will take place if the element to be searched is on the middle index of the given list.
// Worst Case: O(n), This will take place if:
// The element to be searched is on the last index
// The element to be searched is not present on the list

var arr = [90, 20, 19, 10, 100];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] == 100) {
    console.log(arr[i]);
    break;
  }
}
