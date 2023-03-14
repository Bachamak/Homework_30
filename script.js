let arr = [1, 2, [1.1, 1.2, 1.3], 3];
  
function generateList(arr) {
    
let q = "<ul>";
const count = arr.length;
    for (let i = 0; i < count; ++i) {
    let row = arr[i];
        if (Array.isArray(row)) {
        q += "<li><ul>";
            for (let j = 0; j < row.length; ++j) {
                q += `<li>${row[j]}</li>`;
            }
            q += "</ul></li>";
        }
        else
            q += `<li>${row}</li>`;
        }
    q += "</ul>";
    document.body.innerHTML = q;
}
generateList(arr);