let start;
let addnumber;
let arr = [];
let count = 1;

do {
    start = +prompt('How many elements in massive you want?\nmin 5 simbols\nmax 20 simbols');
} while (start < 5 || start > 20 || start !== start);

function addInMassiveNumbers(start) {

do {
    addnumber = +prompt(`Send number for add in massive ${count}`);
    count = count + 1;
    start = start - 1;
    arr.push(addnumber);

} while (start >= 1);

};


function SelectionSort(arr)      
{                             
    var n = arr.length; 
    for (var i = 0; i < n-1; i++) 
     { var min = i; 
       for (var j = i+1; j < n; j++) 
        { if (arr[j] < arr[min]) min = j; }  
       var t = arr[min]; arr[min] = arr[ i ]; arr[ i ] = t; 
     }                     
  alert(`Add massive result: ${arr}`); 
  console.log(arr);   // На выходе сортированный по возрастанию массив. 
  
} ;
addInMassiveNumbers(start);
SelectionSort(arr);






