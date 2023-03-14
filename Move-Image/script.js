// Accessing image element
const imgEl = document.querySelector("img");

// Function to change image position
const changeImagePosition = function (ev) {
  // storing key pressed value like ArrowUp, ArrowDown etc. using event obj
  const keyPressed = ev.key;

  // Accessing all the computed styles on image element
  const style = window.getComputedStyle(imgEl);
  // Storing the value of transform property which is retured in matrix form as string like matrix(1, 2, 0, 5, 10)
  const coordinate = style.getPropertyValue("transform");
  // console.log("updated coordinate: ", coordinate);

  /* remove the matrix word and parenthesis to get coordinates
  matrix(1, 2, 0, 5, 10) => ['1', '2', '0', '5', '10']
  */
  const coordinateArr = coordinate.slice(7, coordinate.length - 1).split(",");

  // Converting all String values to numbers to use it as coordinates
  // ['1', '2', '0', '5', '10'] => [1, 2, 0, 5, 10]
  const finalCoord = [...coordinateArr].map((val) => Number(val));

  // Testing all the arrow keys and updating and setting the transform property with relevant
  // coordinates. We need to change only last two values of the array
  // as it represents the x and y coord respectively, left remains unchanged
  // Here moving image 5 unit of distance
  switch (keyPressed) {
    case "ArrowUp":
      imgEl.style.setProperty(
        "transform",
        `matrix(
          ${finalCoord[0]},
          ${finalCoord[1]},
          ${finalCoord[2]},
          ${finalCoord[3]},
          ${finalCoord[4]},
          ${finalCoord[5] - 5})`
      );
      break;
    case "ArrowDown":
      imgEl.style.setProperty(
        "transform",
        `matrix(
          ${finalCoord[0]},
          ${finalCoord[1]},
          ${finalCoord[2]},
          ${finalCoord[3]},
          ${finalCoord[4]},
          ${finalCoord[5] + 5})`
      );
      break;
    case "ArrowRight":
      imgEl.style.setProperty(
        "transform",
        `matrix(
          ${finalCoord[0]},
          ${finalCoord[1]},
          ${finalCoord[2]},
          ${finalCoord[3]},
          ${finalCoord[4] + 5},
          ${finalCoord[5]})`
      );
      break;
    case "ArrowLeft":
      imgEl.style.setProperty(
        "transform",
        `matrix(
          ${finalCoord[0]},
          ${finalCoord[1]},
          ${finalCoord[2]},
          ${finalCoord[3]},
          ${finalCoord[4] - 5},
          ${finalCoord[5]})`
      );
      break;
    default:
      console.log("Invalid key press");
  }
};

window.addEventListener("keydown", changeImagePosition);
