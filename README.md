## D3

### What is D3?
D3 (D3.js) is a JavaScript library that takes data, and visualizes the information on the web using graphics and animations. It uses HTML, canvas, and SVG to take the information, and turn it into a graphic through DOM manipulation. 

### Similarities/Differences to other technologies


## Introduction to D3
D3 or Data-Driven Documents is a powerful Javascript library to create dynamic data visualization using Shapes, Line and Text. You must have a good understanding of HTML, CSS and Javascript to use D3. You must know how to access the console and the DOM tree in your browser.

You will learned how HTML5, SVG and Javascript work together to create wonderful visual and animations.

## Let's get started
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

### Some Examples
* https://bl.ocks.org/mbostock/4062045
* https://bl.ocks.org/mbostock/43aebffeacf96d8d881f
* https://bl.ocks.org/mbostock/34f08d5e11952a80609169b7917d4172

