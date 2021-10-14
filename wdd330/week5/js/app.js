import Hike from "./hiking.js";

const myHike = new Hike("listofhikes");
window.addEventListener('load', () => {
    myHike.showHikeList();
});
myHike.hikeList;