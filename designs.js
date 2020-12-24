// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function clear() {
  // create a function that clears out the grid then call change
}


function change() {
  var a = 1;
  var b = 2;
  document.getElementById("inputHeight").value = a;
  document.getElementById("inputWidth").value = b;
  makeGrid(a,b);

}

function makeGrid(a, b) {

      for (var rows = 0; rows < b; rows++) {
          for (var columns = 0; columns < a; columns++) {
              $("#container").append("<div class='grid' onclick="changeColour();"></div>");
          };
      };
  };

function changeColour() {
  // create a function which will change the background colour of the clicked on div. Needs to use $colourpicker
  var col = getElementById $colourpicker

  document.getElementById('newdata').style.backgroundColor = "green";

}
