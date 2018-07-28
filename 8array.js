const arr = [1, 2, 3, 5, 64, 4, 32, 2];
// quick unique
uniqueArr = new Set(arr);

uniqueArr; //?
//array truncation using .length
//array.length = 3; //shaves off all entries with index 3 or greaer

//map reduce filter slice concat (and sort, splice)  CHAINING!

thing = arr
  .map(x => x * 2)
  .filter(x => x >= 8)
  .reduce((result, x) => result + String(x), '');

thing; //?

//splice and push pitfalls

//alter original in place and push returns the pushed item, not the changed array

//object.keys, object.values. object.entries
