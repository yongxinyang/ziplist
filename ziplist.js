const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

function zipList(arr1, arr2) {
  const returnList = [];
  for (let i = 0; i < arr1.length; i++) {
    returnList.push(arr1[i], arr2[i]);
  }
  return returnList;
}

function zipListTheSimpleWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}

console.log(zipList(list1, list2));
console.log(zipListTheSimpleWay(list1, list2));
