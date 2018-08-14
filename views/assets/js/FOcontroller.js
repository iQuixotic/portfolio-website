let mywidth = window.innerWidth;
const originalWidth = mywidth;
let prevWidth=0;

// needed to properly load the carousel on screens that start out 
// smaller than 600px, but then increase in size
screenSizeUpdateHack = (arg) => {    
    if(prevWidth < 600 && arg>600 && originalWidth<600) {
        location.reload();
        prevWidth = arg;
    } 
    else {
        prevWidth = arg;
    }
}