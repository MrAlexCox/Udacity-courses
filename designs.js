// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function clear() {
      var div = document.getElementById('container');
      while(div.firstChild)
      div.removeChild(div.firstChild);

}

var color = document.querySelector('#colorPicker').value;
var myTable = document.querySelector('pixelCanvas');
var height = document.querySelector('#inputHeight').value;
var width = document.querySelector('#inputWidth').value;
var sizePicker = document.querySelector('#sizePicker')
var submitButton = document.querySelector('#submitButton')

submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  var height = document.querySelector('#inputHeight').value;
  var width = document.querySelector('#inputWidth').value;

  var myTable = document.getElementById('pixelCanvas')

  clear();

  makeGrid(height, width);

});

// function makeGrid(height, width) {
//
//       var table = document.createElement('table'), tr, td, i;
//
//       for (var rows = 0; rows < height; rows++) {
//             var row = table.insertRow(rows);
//           for (var columns = 0; columns < width; columns++) {
//               var cell = row.insertCell(columns);
//           };
//       };
//   };



// function makeGrid(height, width){
//
//     var table = document.getElementById('pixelCanvas'), tr, td, row, cell;
//     for (rows = 0; rows < height; rows++) {
//         var row = table.insertRow(-1);
//
//         for (cells = 1; cells < width.length; cells++) {
//             var oneCell = row.insertCell('cells');
//             tr.appendChild(oneCell);
//             oneCell.addEventListener("mousedown", function() {
//               const color = document.querySelector('#colorPicker').value;
//
//                oneCell.style.backgroundColor = color;
//
//             });
//
//             // td.innerHTML = row * 22 + cell + 1;
//         }
//     }
//     document.getElementById('container').appendChild(table);
// };

function makeGrid(height, width){
    var table = document.createElement('table'), tr, td, row, cell;
    console.log(height, width)
    for (row = 0; row < height; row++) {
        var tr = document.createElement('tr');
        for (cell = 0; cell < width; cell++) {
            var oneCell = document.createElement('td');
            tr.appendChild(oneCell);
            oneCell.addEventListener("click", function() {
              const color = document.querySelector('#colorPicker').value;
              oneCell.style.backgroundColor = color;

            });


            // td.innerHTML = row * 22 + cell + 1;
        }            table.appendChild(tr);

    }


    document.getElementById('container').appendChild(table);
};

// function setColour () {
//   const color = document.querySelector('#colorPicker').value;
//   this.style.backgroundColor = color;
// }



// function changeColour() {
//
// const cells = document.querySelectorAll('td');
// for (var i = 0; i < cells.length; i++) {
//   cells[i].addEventListener('click', function (event) {
//     const color = document.querySelector('#colorPicker').value;
//     event.target.style.backgroundColor = color;
//   });
// }};
//   var table = document.getElementsByTagName('table');
//   var cells = table.getElementsByTagName('td');
//   var color = document.querySelector('#colorPicker').value;
//
//     for (var i = 0; i < cells.length; i++) {
//       var cell = cells[i];
//       cell.onclick = console.log(cell)
//     }
//   };
      // cell.onclick = function () {
      //
      //   // // if cell.style.backgroundColor == 'color' {
      //   //   cell.style.backgroundColor = 'white'
      //   // } else{
      //   //   document.cell.style.backgroundColor = 'color'
      //   // }
      //
      // })

// function changeColour() {
//   var cells = document.querySelectorAll("td")
//
//   for (var i = 0; i < cells.length; i++){
//     cells[i].addEventListener("click", tableText)
//   }
// }
//
// function tableText() {
//     console.log(hello);
// }


  // document.getElementById('newdata').style.backgroundColor = "green";
