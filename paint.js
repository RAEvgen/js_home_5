(function (){
 	'use strict';

	var  brush = document.createElement('input'); 
	brush.setAttribute('type', 'button'); 
	brush.setAttribute('value', 'brush');

	var brushSize = document.createElement('input');
	brushSize.setAttribute('type', 'range');
	brushSize.setAttribute('min', '1');
	brushSize.setAttribute('max', '100')
	brushSize.setAttribute('value', '50');

	var colorBrush = document.createElement('input');
	colorBrush.setAttribute('type', 'color');
	colorBrush.setAttribute('value', '#333');

	var eraser = document.createElement('input');
	eraser.setAttribute('type', 'button');
	eraser.setAttribute('value', 'eraser');

	var canvas = document.createElement('canvas');
	var paint = document.getElementById('paint');

	paint.appendChild(brush);
	paint.appendChild(colorBrush);
	paint.appendChild(brushSize);
	paint.appendChild(eraser);
	paint.appendChild(canvas);
 	 
 	}());