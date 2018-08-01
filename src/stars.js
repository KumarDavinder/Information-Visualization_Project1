var width = 900;
var height = 500;
var color;
var pointStarZoomed;
var zoom;

var star = [{ "x": 6.5, "y": 0},  { "x": 9, "y": 5},{ "x": 14, "y": 5.5}, 
        { "x": 10.5, "y": 9}, { "x": 12, "y": 14},  { "x": 6.5, "y": 11.5},
        { "x": 2, "y": 14},  { "x": 3.5, "y": 9},{ "x": 0, "y": 5.5},  
        { "x": 5, "y": 5},{ "x": 6.5, "y": 0}];

var lineFunction = d3.svg.line()
        .x(function(d) { return d.x; })
        .y(function(d) { return d.y; })
        .interpolate("linear");

var svgContainer = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("style", "outline-width:2px; outline-style:solid; outline-color:black")
        .attr("class", "svgContainer")
        .attr("id", "IdSvg")
        .append("g");

//var group = svgContainer.append("g").attr("class","starClass");
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

for (var i = 0; i < 30; i++) {
    pointStarZoomed = [];
    zoom = Math.floor(Math.random() * 10);
    star.forEach(function (point) {
        pointStarZoomed.push({ "x": (point.x * zoom), "y": (point.y *zoom)});
    });
    svgContainer
    .append("g")
    .attr("class","starClass") //Math.floor(Math.random() * (max - min + 1)) + min ---- 14x14 è la grandezza base box stella
    .attr("transform", "translate("+(Math.floor(Math.random() * ((900 - (14 * zoom)) - 0 + 1)) + 0)+","+(Math.floor(Math.random() * ((500 - (14 * zoom)) - 0 + 1)) + 0)+")")
    .append("path")
    .attr("d", lineFunction(pointStarZoomed))
    .attr("stroke", "white")
    .attr("stroke-width", .1)
    .style("fill", getRandomColor);
}

document.getElementById("IdSvg").onmousemove = function() { 
   //console.log("muoversi");
      //  console.log(moving);
    //if(moving == 1) {
   
        //moving = 0;
        //console.log("non");
        //console.log(moving);
        moveStars(event);
        getMouseDirection(event);
    //}
};

// var origin_coord;
// var origin_x;
// var origin_y;
var box;
var box_x;
var box_y;
// var center_star_x;
// var center_star_y; 
var threshold;

function moveStars(event) {
    if(direction == "leftUp"){
        d3.selectAll(".starClass")
        .each(function(d) {
            // origin_coord =  d3.select(this).attr("transform").split("(")[1];
            // origin_x = parseInt(origin_coord.split(",")[0]);
            // origin_y = parseInt(origin_coord.split(",")[1].split(")")[0]);
             box =  d3.select(this).node().getBBox();
             box_x = parseInt(box.width); 
             box_y = parseInt(box.height);
             //center_star_x = (origin_x + (box_x/2));
             //center_star_y = (origin_y + (box_y/2));
            threshold = Math.floor((Math.random() * 10) + 1);
             if (threshold > 5){
                 d3.select(this) // Transform to d3 Object
                .transition()
                .duration((3000))
                .attr("transform", "translate("+(Math.floor(Math.random() * ((450 - box_x) - 0 + 1)) + 0)+","+0+")") //Math.floor(Math.random() * (max - min + 1)) + min
                .transition()
                .duration(( 3000))
                .attr("transform", "translate("+event.clientX+","+event.clientY+")")
                .transition()
                .duration(Math.random() * 2000)
                .attr("transform", "translate("+(Math.floor(Math.random() * ((900 - box_x) - 0 + 1)) + 0)+","+(Math.floor(Math.random() * ((500 - box_y) - 0 + 1)) + 0)+")");
            }
            else{
                 d3.select(this) // Transform to d3 Object
                .transition()
                .duration((3000))
                .attr("transform", "translate("+0+","+(Math.floor(Math.random() * ((250 - box_y) - 0 + 1)) + 0)+")")
                .transition()
                .duration(( 3000))
                .attr("transform", "translate("+event.clientX+","+event.clientY+")")
                .transition()
                .duration(Math.random() * 2000)
                .attr("transform", "translate("+(Math.floor(Math.random() * ((900 - box_x) - 0 + 1)) + 0)+","+(Math.floor(Math.random() * ((500 - box_y) - 0 + 1)) + 0)+")");
            }
        });

    }
     else if(direction == "rightUp"){
        d3.selectAll(".starClass")
        .each(function(d) {
            origin_coord =  d3.select(this).attr("transform").split("(")[1];
            //origin_x = parseInt(origin_coord.split(",")[0]);
            //origin_y = parseInt(origin_coord.split(",")[1].split(")")[0]);
            box =  d3.select(this).node().getBBox();
            box_x = parseInt(box.width); 
            box_y = parseInt(box.height);
            //center_star_x = (origin_x + (box_x/2));
            //center_star_y = (origin_y + (box_y/2));
            threshold = Math.floor((Math.random() * 10) + 1);
            if (threshold > 5){
                 d3.select(this) // Transform to d3 Object
                .transition()
                .duration((3000))
                .attr("transform", "translate("+((Math.floor(Math.random() * (900 - 450 + 1)) + 450) - box_x)+","+0+")") //Math.floor(Math.random() * (max - min + 1)) + min
                .transition()
                .duration(( 3000))
                .attr("transform", "translate("+event.clientX+","+event.clientY+")")
                .transition()
                .duration(Math.random() * 2000)
                .attr("transform", "translate("+(Math.floor(Math.random() * ((900 - box_x) - 0 + 1)) + 0)+","+(Math.floor(Math.random() * ((500 - box_y) - 0 + 1)) + 0)+")");
            }
            else{
                 d3.select(this) // Transform to d3 Object
                .transition()
                .duration((3000))
                .attr("transform", "translate("+(900 - box_x)+","+(Math.floor(Math.random() * ((250 - box_y) - 0 + 1)) + 0)+")")
                .transition()
                .duration(( 3000))
                .attr("transform", "translate("+event.clientX+","+event.clientY+")")
                .transition()
                .duration(Math.random() * 2000)
                .attr("transform", "translate("+(Math.floor(Math.random() * ((900 - box_x) - 0 + 1)) + 0)+","+(Math.floor(Math.random() * ((500 - box_y) - 0 + 1)) + 0)+")");
            }
        });
    }
    else if(direction == "rightDown"){
        d3.selectAll(".starClass")
        .each(function() {
            // origin_coord =  d3.select(this).attr("transform").split("(")[1];
            // origin_x = parseInt(origin_coord.split(",")[0]);
            // origin_y = parseInt(origin_coord.split(",")[1].split(")")[0]);
             box =  d3.select(this).node().getBBox();
             box_x = parseInt(box.width); 
             box_y = parseInt(box.height);
             //center_star_x = (origin_x + (box_x/2));
             //center_star_y = (origin_y + (box_y/2));
            threshold = Math.floor((Math.random() * 10) + 1); //spargio le stelle randomicamente sulle due pareti
        // your update code here as it was in your example
            if (threshold > 5){
                 d3.select(this) // Transform to d3 Object
                .transition()
                .duration((3000))
                .attr("transform", "translate("+(900 - box_x)+","+((Math.floor(Math.random() * ((500 - box_y) - 250 + 1)) + 250))+")") //Math.floor(Math.random() * (max - min + 1)) + min
                .transition()
                .duration(( 3000))
                .attr("transform", "translate("+event.clientX+","+event.clientY+")")
                .transition()
                .duration(Math.random() * 2000)
                .attr("transform", "translate("+(Math.floor(Math.random() * ((900 - box_x) - 0 + 1)) + 0)+","+(Math.floor(Math.random() * ((500 - box_y) - 0 + 1)) + 0)+")");
            }
            else{
                 d3.select(this) // Transform to d3 Object
                .transition()
                .duration((3000))
                .attr("transform", "translate("+(((Math.floor(Math.random() * ((900 - box_x) - 450 + 1))) + 450)) +","+(500 - box_y)+")")
                .transition()
                .duration(( 3000))
                .attr("transform", "translate("+event.clientX+","+event.clientY+")")
                .transition()
                .duration(Math.random() * 2000)
                .attr("transform", "translate("+(Math.floor(Math.random() * ((900 - box_x) - 0 + 1)) + 0)+","+(Math.floor(Math.random() * ((500 - box_y) - 0 + 1)) + 0)+")");
            }
        });
    }
    else if(direction == "leftDown"){
        d3.selectAll(".starClass")
        .each(function(d) {
            // origin_coord =  d3.select(this).attr("transform").split("(")[1];
            // origin_x = parseInt(origin_coord.split(",")[0]);
            // origin_y = parseInt(origin_coord.split(",")[1].split(")")[0]);
             box =  d3.select(this).node().getBBox();
             box_x = parseInt(box.width); 
             box_y = parseInt(box.height);
             //center_star_x = (origin_x + (box_x/2));
             //center_star_y = (origin_y + (box_y/2));
            threshold = Math.floor((Math.random() * 10) + 1);
        // your update code here as it was in your example
            if (threshold > 5){
                 d3.select(this) // Transform to d3 Object
                .transition()
                .duration((3000))
                .attr("transform", "translate("+0+","+((Math.floor(Math.random() * ((500 - box_y) - 250 + 1)) + 250))+")") //Math.floor(Math.random() * (max - min + 1)) + min
                .transition()
                .duration(( 3000))
                .attr("transform", "translate("+event.clientX+","+event.clientY+")")
                .transition()
                .duration(Math.random() * 2000)
                .attr("transform", "translate("+(Math.floor(Math.random() * ((900 - box_x) - 0 + 1)) + 0)+","+(Math.floor(Math.random() * ((500 - box_y) - 0 + 1)) + 0)+")");
            }
            else{
                 d3.select(this) // Transform to d3 Object
                .transition()
                .duration((3000))
                .attr("transform", "translate("+((Math.floor(Math.random() * ((450 - box_x) - 0 + 1))) + 0)+","+(500 - box_y)+")")
                .transition()
                .duration(( 3000))
                .attr("transform", "translate("+event.clientX+","+event.clientY+")")
                .transition()
                .duration(Math.random() * 2000)
                .attr("transform", "translate("+(Math.floor(Math.random() * ((900 - box_x) - 0 + 1)) + 0)+","+(Math.floor(Math.random() * ((500 - box_y) - 0 + 1)) + 0)+")");
            }
        });
    }
    else if(direction == "onlyUp"){
        d3.selectAll(".starClass")
        .each(function() {
            // origin_coord =  d3.select(this).attr("transform").split("(")[1];
            // origin_x = parseInt(origin_coord.split(",")[0]);
            // origin_y = parseInt(origin_coord.split(",")[1].split(")")[0]);
             box =  d3.select(this).node().getBBox();
             box_x = parseInt(box.width); 
             box_y = parseInt(box.height);
             //center_star_x = (origin_x + (box_x/2));
             //center_star_y = (origin_y + (box_y/2));
            // your update code here as it was in your example
             d3.select(this) // Transform to d3 Object
            .transition()
            .duration((3000))
            .attr("transform", "translate("+((Math.floor(Math.random() * ((900 - box_x) - 0 + 1)) + 0))+","+0+")") //Math.floor(Math.random() * (max - min + 1)) + min
            .transition()
            .duration(( 3000))
            .attr("transform", "translate("+event.clientX+","+event.clientY+")")
            .transition()
            .duration(Math.random() * 2000)
            .attr("transform", "translate("+(Math.floor(Math.random() * ((900 - box_x) - 0 + 1)) + 0)+","+(Math.floor(Math.random() * ((500 - box_y) - 0 + 1)) + 0)+")");
        });
    }
    else if(direction == "onlyRight"){
        d3.selectAll(".starClass")
        .each(function() {
            // origin_coord =  d3.select(this).attr("transform").split("(")[1];
            // origin_x = parseInt(origin_coord.split(",")[0]);
            // origin_y = parseInt(origin_coord.split(",")[1].split(")")[0]);
             box =  d3.select(this).node().getBBox();
             box_x = parseInt(box.width); 
             box_y = parseInt(box.height);
             //center_star_x = (origin_x + (box_x/2));
             //center_star_y = (origin_y + (box_y/2));
            // your update code here as it was in your example
             d3.select(this) // Transform to d3 Object
            .transition()
            .duration((3000))
            .attr("transform", "translate("+(900 - box_x)+","+((Math.floor(Math.random() * ((500 - box_y) - 0 + 1)) + 0))+")") //Math.floor(Math.random() * (max - min + 1)) + min
            .transition()
            .duration(( 3000))
            .attr("transform", "translate("+event.clientX+","+event.clientY+")")
            .transition()
            .duration(Math.random() * 2000)
            .attr("transform", "translate("+(Math.floor(Math.random() * ((900 - box_x) - 0 + 1)) + 0)+","+(Math.floor(Math.random() * ((500 - box_y) - 0 + 1)) + 0)+")");
        });
    }
    else if(direction == "onlyDown"){
        d3.selectAll(".starClass")
        .each(function() {
            // origin_coord =  d3.select(this).attr("transform").split("(")[1];
            // origin_x = parseInt(origin_coord.split(",")[0]);
            // origin_y = parseInt(origin_coord.split(",")[1].split(")")[0]);
             box =  d3.select(this).node().getBBox();
             box_x = parseInt(box.width); 
             box_y = parseInt(box.height);
             //center_star_x = (origin_x + (box_x/2));
             //center_star_y = (origin_y + (box_y/2));
            // your update code here as it was in your example
             d3.select(this) // Transform to d3 Object
            .transition()
            .duration((3000))
            .attr("transform", "translate("+((Math.floor(Math.random() * ((900 - box_x) - 0 + 1)) + 0))+","+(500 - box_y)+")") //Math.floor(Math.random() * (max - min + 1)) + min
            .transition()
            .duration(( 3000))
            .attr("transform", "translate("+event.clientX+","+event.clientY+")")
            .transition()
            .duration(Math.random() * 2000)
            .attr("transform", "translate("+(Math.floor(Math.random() * ((900 - box_x) - 0 + 1)) + 0)+","+(Math.floor(Math.random() * ((500 - box_y) - 0 + 1)) + 0)+")");
        });
    }
    else if(direction == "onlyLeft"){
        d3.selectAll(".starClass")
        .each(function() {
            // origin_coord =  d3.select(this).attr("transform").split("(")[1];
            // origin_x = parseInt(origin_coord.split(",")[0]);
            // origin_y = parseInt(origin_coord.split(",")[1].split(")")[0]);
             box =  d3.select(this).node().getBBox();
             box_x = parseInt(box.width); 
             box_y = parseInt(box.height);
             //center_star_x = (origin_x + (box_x/2));
             //center_star_y = (origin_y + (box_y/2));
            // your update code here as it was in your example
             d3.select(this) // Transform to d3 Object
            .transition()
            .duration((3000))
            .attr("transform", "translate("+0+","+((Math.floor(Math.random() * ((500 - box_y) - 0 + 1)) + 0))+")") //Math.floor(Math.random() * (max - min + 1)) + min
            .transition()
            .duration(( 3000))
            .attr("transform", "translate("+event.clientX+","+event.clientY+")")
            .transition()
            .duration(Math.random() * 2000)
            .attr("transform", "translate("+(Math.floor(Math.random() * ((900 - box_x) - 0 + 1)) + 0)+","+(Math.floor(Math.random() * ((500 - box_y) - 0 + 1)) + 0)+")");
        });
    }

}

var last_position = {};
var w = 0.7;
var direction;
function getMouseDirection(e) {
    if (typeof(last_position.x) != 'undefined') {
        var deltaX = last_position.x - e.offsetX,
            deltaY = last_position.y - e.offsetY;
        if (deltaX > 0 && Math.abs(deltaX) >= w && deltaY > 0 && Math.abs(deltaY) >= w ) {
            direction = "leftUp";
        }
        else if (deltaX < 0 && Math.abs(deltaX) >= w && deltaY > 0 && Math.abs(deltaY) >= w) {
            direction = "rightUp";
        }
        else if (deltaX > 0 && Math.abs(deltaX) >= w && deltaY < 0 && Math.abs(deltaY) >= w) {
            direction = "leftDown";
        } 
        else if (deltaX < 0 && Math.abs(deltaX) >= w && deltaY < 0 && Math.abs(deltaY) >= w) {
            direction = "rightDown";
        } 
        else if (deltaX > 0 && Math.abs(deltaY) < w) {
            direction = "onlyLeft";
        } 
        else if (deltaX < 0 && Math.abs(deltaY) < w) {
            direction = "onlyRight";
        } 
        else if (deltaY > 0 && Math.abs(deltaX) < w) {
            direction = "onlyUp";
        } 
        else if (deltaY < 0 && Math.abs(deltaX) < w) {
            direction = "onlyDown";
        }
    }
    last_position = {
        x : e.offsetX,
        y : e.offsetY
    };
    console.log(direction);
}



// var last_position = {};
// function getMouseDirection(e) {
//     if (typeof(last_position.x) != 'undefined') {
//         var deltaX = last_position.x - e.offsetX,
//             deltaY = last_position.y - e.offsetY;
//         if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 0) {
//             xDirection = "left";
//         } else if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < 0) {
//             xDirection = "right";
//         } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
//             yDirection = "up";
//         } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY < 0) {
//             yDirection = "down";
//         }
//     }
//     last_position = {
//         x : e.offsetX,
//         y : e.offsetY
//     };
//     console.log(xDirection + " " + yDirection);
// }


