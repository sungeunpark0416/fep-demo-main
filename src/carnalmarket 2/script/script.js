// let grid = document.body.querySelector('#grid');
// let stickies = document.body.querySelectorAll('.column > .sticky');
// // 컬럼의 자녀요소 sticky 가져오는 구문

// // console.log(grid);
// // console.log(columns);

// stickies.forEach(function (eachSticky, idx) => {
//   // forEach 안에 있는 구문 eachColumn = 각각의 컬럼개체를 넣음, idx = 0부터 세는 array 숫자를 보여줌
//   eachColumn.dataset.nth = idx + 1;
//   // 각각의 컬럼들에게 순서를 부여해놓는 작업
//   // class를 붙일 수 있지만, 이 방법이 더 편함
//   // +1은 0을 1로 바꿔주는 작업 (0부터 셈)
//   eachColumn.addEventListener('click', (e) => {
//     let clickedNth = e.currentTarget.dataset.nth;
//     // 클릭된 애가 nth의 데이터를 가져옴
//     grid.dataset.selectedNth = clickedNth;
//   });
// });

let grid = document.body.querySelector('#grid');
let stickies = document.body.querySelectorAll('.column > .sticky');

stickies.forEach(function (eachSticky, idx) {
  eachSticky.dataset.nth = idx + 1;

  // 각각의 컬럼들한테 너는 몇번째인지 번호를 붙이는 것

  eachSticky.addEventListener('click', function (e) {
    let clickedNth = e.currentTarget.dataset.nth;
    grid.dataset.selectedNth = clickedNth;
  });
});
