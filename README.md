## D3

### Introduction to D3
D3 or Data-Driven Documents is a powerful Javascript library to create dynamic data visualization using Shapes, Line and Text. You must have a good understanding of HTML, CSS and Javascript to use D3. You must know how to access the console and the DOM tree in your browser.

You will learned how HTML5, SVG and Javascript work together to create wonderful visual and animations.

### Let's get started
You can download the latest version from their site [d3.org](https://d3js.org/#introduction) or you can link directly this snippet `<script src="https://d3js.org/d3.v4.min.js"></script>`

### Basic Shapes Key Attributes 
- rect - means "rectangle" 
- circle
- ellipse
- line
- text
- path 
- `polygon` and `polyline` is also part of the shape attributes but they are not mostly used because it's much easier to use path.

## Creating Rectangle
1. Lets start by creating a data array, put some numbers like what we do in regular javascript. Create an SVG element in our html page. We have to select the body and append the svg element.

```js
var dataArray = [5, 15, 20];

// select the body element and append the svg
var svg = d3.select("body").append("svg")
  .attr("height", "100%") //give a 100% height for our svg
  .attr("width", "100%"); //give a 100% width for our svg
```
2. Now we will create our rectangle in our SVG element.
- We will select all the rectangle, the data array and append the rectangles.


``` js
//create rectangles
svg
  .selectAll("rect")
  .data(dataArray)
  .enter()
  .append("rect");
```
3. Let's set the attributes for our rectangle.
- It must have an `x` & `y` for their axis and `width` & `height`
```js
svg.selectAll("rect")
      .data(dataArray)
      .enter().append("rect")
      // create attributes for the rectangle
                .attr("height", "200")
                .attr("width", "50")
                .attr("x", "20")
                .attr("y", "100");
```
if you check the page you will see the bar. But you can only see one rectangle its because they are in top of each other. The reason is they are sitting on the same location on the page. To fixed this we have to change the position in their attributes.

4. We cannot do it manually because we are writing in one line of code. so we need a function to change the position of our rectangles.
```js
svg.selectAll("rect")
      .data(dataArray)
      .enter().append("rect")
                // make a function for the height
                .attr("height",function(d,i){ return d*15; })
                .attr("width","50")
                // make a function for the x and y axis
                .attr("x",function(d,i){ return 60*i; })
                .attr("y",function(d,i){ return 300-(d*15); });
```

### Manipulating a previous Canvas D3 Animation
Link to example: http://landlord-carol-10680.bitballoon.com/
1. Styling the words displaying on the screen by font, text-alignment, color, and the shape of the outlines
``` js
// font size and family
context.font = context2.font = "325px Futura";
//text alignment
context.textAlign = context2.textAlign = "center";
// font color
context.fillStyle = context2.fillStyle = "#394AFF";
// line format
context.lineJoin = context2.lineJoin = "round";
```
2. This is how the animation of the stroke is created, the line width is how think the line stroke is, the stroke style has the colors of the line stroke.

``` js
(function next() {
  var i = 0.5, text = words.shift();
  context.clearRect(0, 0, width, height);
  //placement of word
  context.fillText(text, width / 2, height / 2 + 100);
  var timer = d3.timer(function() {
    if (++i > text.length * 30) return timer.stop(), next();
    context2.save();
    context2.clearRect(0, 0, width, height);
    context2.lineWidth = i & 9 ? i * 5 + 3 : i * 5;
    context2.strokeStyle = i & 1.9 ? "white" : gradient ;
    context2.strokeText(text, width / 2, height / 2 + 100);
    context2.restore();
    context2.drawImage(canvas, 0, 0);
    context.drawImage(canvas2, 0, 0);
  });
})();
```

### Some Examples
* https://bl.ocks.org/mbostock/4062045
* https://bl.ocks.org/mbostock/43aebffeacf96d8d881f
* https://bl.ocks.org/mbostock/34f08d5e11952a80609169b7917d4172

