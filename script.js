// let arr = [1, 2, [1.1, 1.2, 1.3], 3];
  
// function generateList(arr) {
    
// let q = "<ul>";
// const count = arr.length;
//     for (let i = 0; i < count; ++i) {
//     let row = arr[i];
//         if (Array.isArray(row)) {
//         q += "<li><ul>";
//             for (let j = 0; j < row.length; ++j) {
//                 q += `<li>${row[j]}</li>`;
//             }
//             q += "</ul></li>";
//         }
//         else
//             q += `<li>${row}</li>`;
//         }
//     q += "</ul>";
//     document.body.innerHTML = q;
// }
// generateList(arr);



// var generateList = function generateList(ary) {
//     var ul = document.createElement('ul');
   
//     ary.forEach(function(el) {
//       var li = document.createElement('li');
//       var childElement;
   
//       if (Array.isArray(el)) {
//         childElement = generateList(el);
//       } else {
//         childElement = document.createTextNode(el)
//       }
   
//       li.appendChild(childElement);
//       ul.appendChild(li);
//     })
//     return ul;
//   }
// document.body.appendChild(generateList([1, 2, [1.1, 1.2, ['1.2.1', '1.2.2'], 1.3], 3]))



const generateList = array => `<ul>${array.map(el => {
    return `<li>${Array.isArray(el) ? generateList(el) : el }</li>`
  }).join('')}</ul>`;
  const array = [1, 2, [1.1, 1.2, [5.1, 5.2], [6.1, 6.2], 1.3], 3];
document.body.innerHTML = generateList(array);