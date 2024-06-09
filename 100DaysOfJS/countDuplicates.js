const fruits = ['banana', 'apple', 'banana', 'orange', 'apple', 'banana'];
let obj = {}
const countDup = fruits.forEach((i)=>{
    return obj[i] = (obj[i]||0)+1
})

console.log(obj);

// 2
function count() {
    array_elements = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];

    array_elements.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                console.log(current + ' comes --> ' + cnt + ' times<br>');
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        console.log(current + ' comes --> ' + cnt + ' times');
    }

}

count();

// 3

// Initial array
let array = ['a', 'b', 'c', 'd', 'd', 'e', 'a', 'b', 'c', 'f', 'g', 'h', 'h', 'h', 'e', 'a'];

// Unique array without duplicates ['a', 'b', ... , 'h']
let unique = [...new Set(array)];

// This array counts duplicates [['a', 3], ['b', 2], ... , ['h', 3]] 
let duplicates = unique.map(value => [value, array.filter(str => str === value).length]);
console.log(duplicates);

// 4

const countFruits = fruits.reduce((acc,itr)=>{
    acc[itr]=(acc[itr] || 0) + 1
    return acc
}, {})

console.log(countFruits);