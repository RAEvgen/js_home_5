(function(){
    'use strict';
    var handlers = {};
    canvas.addEventListener('mousedown', handlers.startDraw);
    canvas.addEventListener('mouseup', handlers.endDraw);
    canvas.addEventListener('mouseOut', handlers.endDraw);
    canvas.addEventListener('mousemove', handlers.draw);

    handlers.startDraw = function () {

    };

    handlers.endDraw = function () {

    };

    handlers.draw = function () {
        // var brushSize = ;
    };
    
}());
