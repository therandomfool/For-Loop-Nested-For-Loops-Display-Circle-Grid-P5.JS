x=1;
function setup() {

  createCanvas(800, 800);
  background(220);


  // vert y-axis
  for (let i = 0; i < width; i += 40) {
    if (i % 20 === 0){
      x+=12.75;
    }
    // horizontal x-axis
    for(let j = 0; j < height; j+= 40){
      circle(j+20, i + 20, 20);
      if (x === 0){
        x = 1;
      }
      fill(x);
      
    }

  }
}

function draw() {

}