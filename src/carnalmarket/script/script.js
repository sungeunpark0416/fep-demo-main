let grid = document.querySelector('.grid');
let columns = document.querySelectorAll('.grid__column');
// console.log(grid);
// console.log(columns);
columns.forEach(function (eachColumn, idx) {
  eachColumn.dataset.nth = idx + 1;
  eachColumn.addEventListener('click', function (e) {
    let nth = e.currentTarget.dataset.nth;
    grid.dataset.opennth = nth;
  });
});
