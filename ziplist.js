const arr1 = ['a', 'b', 'c'];
const arr2 = [1, 2, 3];

function zipList(list1, list2) {
  const merge = [];
  for (let i = 0; i < list1.length; i++) {
    merge.push(list1[i]);
    merge.push(list2[i]);
  }
  return merge;
}
function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.union(_.zip(list1, list2)));
}
console.log(zipList(arr1, arr2));
console.log(zipListTheSimpleWay(arr1, arr2));
