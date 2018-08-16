let mywidth = window.innerWidth;
const originalWidth = mywidth;
let prevWidth=0;

// needed to properly load the carousel on screens that start out 
// smaller than 600px, but then increase in size
screenSizeUpdateHack = (arg) => {    
    if(originalWidth < 600 && prevWidth < 600 && arg > 600) {
        location.reload();
        prevWidth = arg;
    } else {
        prevWidth = arg;
    }
}