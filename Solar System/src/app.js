const canvas = document.getElementById('solar-canvas');
const context = canvas.getContext('2d', { alpha: false });
import { drawStar } from './lib/drawStar.js';
import {
	venusData,
	mercuryData,
	earthData,
	marsData,
	jupiterData,
	saturnData,
	uranusData,
	neptuneData
} from './lib/planetData.js';


const sunPosition = {
	x: 190,
	y: 150,
  };
  
  const planets = [mercuryData, venusData, earthData,
	marsData, jupiterData, saturnData, uranusData, neptuneData];
  
  let maxDistanceShowing = Math.max(...planets.map(function(pl){
	return pl.dist;
  }));
//   planets.forEach(function (planetData) {
// 	if (maxDistanceShowing < planetData.dist) {
// 	  maxDistanceShowing = planetData.dist;
// 	}
//   });
  
  const scaleFactor = (canvas.width - 100) / (maxDistanceShowing * 2);
  
  
  const sunData = {
	name: "Sun",
	color: "yellow",
	radius: 9,
	x: sunPosition.x,
	y: sunPosition.y,
	planets,
	scaleFactor,
  };
  
  function clear(context) {
	context.clearRect(0, 0, canvas.width, canvas.height);
  }
  
  clear(context);
  drawStar(context, sunData);