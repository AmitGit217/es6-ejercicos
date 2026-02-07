const pointsList = [32, 54, 21, 64, 75, 43]
const copyPointsList = [...pointsList];


const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const copyToy = {...toy};


const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];
const mergedPointsList = [...pointsList, ...pointsLis2];


const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
const mergedToy = {...toy2, ...toyUpdate};


const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsWithoutYellow = [...colors.slice(0, 2), ...colors.slice(3)];