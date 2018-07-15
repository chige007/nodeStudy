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

console.log('--------------- forEach (对数组的每个元素执行一次提供的函数) ---------------');
// array.forEach(callback(currentValue, index, array){
//     //do something
// }, this)
var arr_forEach = '';
['a','b','c','dd','e','f','g','h','i','j'].forEach(function(item) {
    arr_forEach += item;
});
console.log(arr_forEach);

console.log('--------------- includes (用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false) ---------------');
// arr.includes(searchElement)需要查找的元素值。
// arr.includes(searchElement, fromIndex)从该索引处开始查找 searchElement。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。默认为 0。
var arr_includes = ['dog','cat','tiger','mouse','bee'];
console.log(arr_includes.includes('tiger'));
console.log(arr_includes.includes('ger'));
console.log(arr_includes.includes('tiger',1));
console.log(arr_includes.includes('tiger',4));

console.log('--------------- indexOf (返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1) ---------------');
// arr.indexOf(searchElement)要查找的元素
// arr.indexOf(searchElement[, fromIndex = 0])开始查找的位置。
var arr_indexOf = [1,2,3,4,5,6,7,8,9];
var arr_indexOf_1 = arr_indexOf.indexOf(1);
var arr_indexOf_2 = arr_indexOf.indexOf(10);
var arr_indexOf_3 = arr_indexOf.indexOf(3,1);
var arr_indexOf_4 = arr_indexOf.indexOf(3,5);
console.log(arr_indexOf_1);
console.log(arr_indexOf_2);
console.log(arr_indexOf_3);
console.log(arr_indexOf_4);

console.log('--------------- join (将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串) ---------------');
// str = arr.join(separator)
var arr_join = ['Fire', 'Wind', 'Rain'];
console.log(arr_join.join());
console.log(arr_join.join(''));
console.log(arr_join.join('-'));

console.log('--------------- keys (返回一个新的Array迭代器，它包含数组中每个索引的键) ---------------');
var arr_keys = ['a', 'b', 'c'];
var iterator_keys = arr_keys.keys(); 
for (let key of iterator_keys) {
  console.log(key); // expected output: 0 1 2
}

console.log('--------------- lastIndexOf (返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。) ---------------');
// arr.lastIndexOf(searchElement[, fromIndex = arr.length - 1])
var arr_lastIndexOf = [1,2,3,4,5,6,7,8,9,10];
console.log(arr_lastIndexOf.lastIndexOf(6));
console.log(arr_lastIndexOf.lastIndexOf(6,6));

console.log('--------------- map (创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。) ---------------');
// let new_array = arr.map(function callback(currentValue, index, array) { 
//     // Return element for new_array 
// }[, thisArg])
var arr_map = [1,2,3,4,5,6].map(function(currentValue, index, array){
    return currentValue * index;
});
console.log(arr_map);

console.log('--------------- pop (从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度) ---------------');
var arr_pop = [1,2,3,4,5,6];
var arr_pop_2 = arr_pop.pop();
console.log(arr_pop)
console.log(arr_pop_2)

console.log('--------------- push (将一个或多个元素添加到数组的末尾，并返回新数组的长度) ---------------');
var arr_push = [1,2,3,4,5,6];
console.log(arr_push)
var arr_push_2 = arr_push.push(100);
console.log(arr_push_2)
var arr_push_3 = arr_push.push(100,101);
console.log(arr_push)

console.log('--------------- reduce (对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为单个值。) ---------------');
// arr.reduce(callback[, initialValue])
// callback参数：accumulator-累加器累加回调的返回值，currentValue-数组中正在处理的元素，currentIndex-数组中正在处理的当前元素的索引，array-调用reduce的数组
var arr_reduce = [1,2,3,4,5,6];
var fun_reduce = (accumulator,currentValue,currentIndex) => {
    console.log(currentValue);
    return accumulator+currentValue;
}
var arr_reduce = arr_reduce.reduce(fun_reduce);
console.log(arr_reduce)

console.log('--------------- reduceRight (对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为单个值。) ---------------');
// arr.reduceRight(callback[, initialValue])
// callback
// 一个回调函数，用来操作数组中的每个元素，可接受四个参数：
//     previousValue
//     上一次调用回调的返回值，或提供的 initialValue
//     currentValue
//     当前被处理的元素
//     index
//     当前处理元素的索引
//     array
//     调用 reduce 的数组
// initialValue
// 可作为第一次调用回调 callback 的第一个参数
var arr_reduceRight = ['1','2','3','4','5'];
var arr_reduceRight = arr_reduceRight.reduceRight(function(prev, cur){
    return prev + cur; 
}); 
console.log(arr_reduceRight);

console.log('--------------- reverse() 方法将数组中元素的位置颠倒。 ---------------');
var arr_reverse = [1,2,3,4].reverse();
console.log(arr_reverse);

console.log('--------------- shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。---------------');
var arr_shift = [1,2,3,4,5];
var arr_shift_2 = arr_shift.shift();
console.log(arr_shift);
console.log(arr_shift_2);

console.log('--------------- slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。 ---------------');
// arr.slice();
// arr.slice(begin);
// arr.slice(begin, end);
var arr_slice = ['a','b','c','d','e'];
console.log(arr_slice.slice());
console.log(arr_slice.slice(2));
console.log(arr_slice.slice(2,4));

console.log('--------------- some() 方法测试数组中的某些元素是否通过由提供的函数实现的测试。 ---------------');
var arr_some = [1,2,3,4,5,6,7,8,9];
var some_func = function(elem){
    return elem > 10;
}
console.log(arr_some.some(some_func));

console.log('--------------- sort() 方法用就地（ in-place ）的算法对数组的元素进行排序，并返回数组。 sort 排序不一定是稳定的。默认排序顺序是根据字符串Unicode码点。 ---------------');
var arr_sort = [10,2,13,'a','*',6,0,-1,'b'];
console.log(arr_sort.sort());
console.log(arr_sort.sort( (a,b) => a - b) );

console.log('--------------- splice() 方法通过删除现有元素和/或添加新元素来更改一个数组的内容。 ---------------');
var arr_splice = [1,2,3,4,5,6,7,8,9];
arr_splice.splice(1,2,'a');
console.log(arr_splice);

console.log('--------------- toLocaleString() 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。 ---------------');
var arr_localeString = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
var arr_localeString = arr_localeString.toLocaleString('en', {timeZone: "UTC"});
console.log(arr_localeString);

console.log('--------------- toString() 返回一个字符串，表示指定的数组及其元素。---------------');
var arr_toString = [1,2,'a','bc',0,34];
console.log(arr_toString.toString());
console.log(typeof arr_toString.toString());

console.log('--------------- unshift() 方法将一个或多个元素添加到数组的开头，并返回新数组的长度。 ---------------');
var arr_unshift = [1,2,3,4,5,6];
arr_unshift.unshift(4,5)
console.log(arr_unshift);
