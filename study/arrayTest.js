console.log('--------------- from ---------------');
// Array.from(arrayLike[, mapFn[, thisArg]])
var arr_from = Array.from('chenyc');
console.log(arr_from);//[ 'c', 'h', 'e', 'n', 'y', 'c' ]
var arr_from_2 = Array.from([1,2,3],x => x+x);
console.log(arr_from_2);//[ 2, 4, 6 ]

console.log('--------------- isArray ---------------');
// Array.isArray(obj)
var arr_isArray = Array.isArray([1,2,3]);
var arr_isArray_2 = Array.isArray(123);
console.log(arr_isArray);//true
console.log(arr_isArray_2);//false

console.log('--------------- of (创建数组)---------------');
// Array.of(element0[, element1[, ...[, elementN]]])
var arr_of = Array.of(7,2,3);
console.log(arr_of);//[ 7, 2, 3 ]

console.log('--------------- concat (合并数组) ---------------');
// var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
var arr_concat = [1,2,3].concat(['a','b','c']);
console.log(arr_concat);

console.log('--------------- copyWithin (浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小) ---------------');
// arr.copyWithin(target)
// arr.copyWithin(target, start)
// arr.copyWithin(target, start, end)
var arr_copyWithin = [1,2,3,4,5,6,7,8,9,10].copyWithin(-2);
console.log(arr_copyWithin);//[ 1, 2, 3, 4, 5, 6, 7, 8, 1, 2 ]
var arr_copyWithin_2 = [1,2,3,4,5,6,7,8,9,10].copyWithin(1, 3);
console.log(arr_copyWithin_2);//[ 1, 4, 5, 6, 7, 8, 9, 10, 9, 10 ]
var arr_copyWithin_3 = [1,2,3,4,5,6,7,8,9,10].copyWithin(1, 3, 6);
console.log(arr_copyWithin_3);//[ 1, 4, 5, 6, 5, 6, 7, 8, 9, 10 ]
var arr_copyWithin_4 = [1,2,3,4,5,6,7,8,9,10].copyWithin(-4, 3, 6);
console.log(arr_copyWithin_4);//[ 1, 2, 3, 4, 5, 6, 4, 5, 6, 10 ]
var arr_copyWithin_5 = [1,2,3,4,5,6,7,8,9,10].copyWithin(-5, -4, -1);
console.log(arr_copyWithin_5);//[ 1, 2, 3, 4, 5, 7, 8, 9, 9, 10 ]

console.log('--------------- entries (返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对) ---------------');
var iterator = [[1,5], "b", "c"].entries();
console.log(iterator.next());//{ value: [ 0, 'a' ], done: false }
console.log(iterator.next());//{ value: [ 1, 'b' ], done: false }

console.log('--------------- every (测试数组的所有元素是否都通过了指定函数的测试) ---------------');
function every_test(currentValue) {
    return currentValue < 40;
}
var arr_every = [1, 30, 41, 29, 10, 13];
console.log(arr_every.every(every_test));

console.log('--------------- fill (用一个固定值填充一个数组中从起始索引到终止索引内的全部元素) ---------------');
// arr.fill(value[, start[, end]])
// [start, end) 
var arr_fill = [1,2,3,4,5,6,7,8,9,10].fill(5);
console.log(arr_fill);//[ 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ]
var arr_fill_2 = [1,2,3,4,5,6,7,8,9,10].fill(5,2,6);
console.log(arr_fill_2);//[ 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ]
var arr_fill_3 = [1,2,3,4,5,6,7,8,9,10].fill(5,-6,-2);
console.log(arr_fill_3);//[ 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ]

console.log('--------------- filter (创建一个新数组, 其包含通过所提供函数实现的测试的所有元素) ---------------');
// var new_array = arr.filter(callback(element[, index[, array]])[, thisArg])
var arr_filter = [1,2,3,4,5,6,7,8,9,10].filter(num => num%2 == 0);
console.log(arr_filter);

console.log('--------------- find (返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined) ---------------');
// arr.find(callback[, thisArg])
var arr_find = [1,2,3,4,5,6,7,8,9,10].find(num => num%2 == 0);
console.log(arr_find);

console.log('--------------- findIndex (返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1) ---------------');
// arr.find(callback[, thisArg])
var arr_findIndex = ['a','b','c','dd','e','f','g','h','i','j'].findIndex(str => str.length > 1);
console.log(arr_findIndex);


