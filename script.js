/*
*   Modals (popup boxes)
*/

// Map containing button and modal pairs
var datamap = new Map([
    [document.getElementById("helix"), document.getElementById("helixModal")],
    [document.getElementById("dome"), document.getElementById("domeModal")],
    [document.getElementById("amber"), document.getElementById("amberModal")],
    [document.getElementById("root"), document.getElementById("rootModal")],
    [document.getElementById("claw"), document.getElementById("clawModal")],
    [document.getElementById("skull"), document.getElementById("skullModal")],
    [document.getElementById("armor"), document.getElementById("armorModal")],
    [document.getElementById("cover"), document.getElementById("coverModal")],
    [document.getElementById("plume"), document.getElementById("plumeModal")],
    [document.getElementById("jaw"), document.getElementById("jawModal")],
    [document.getElementById("sail"), document.getElementById("sailModal")]
]);

datamap.forEach((value, key) => {
    doModal(key, value);
});

function doModal(anchor, popupbox) {

    // Get the <span> element that closes the modal
    var span = popupbox.getElementsByClassName("close")[0];

    anchor.addEventListener("click", function () {
        popupbox.style.display = "block";
    });

    span.addEventListener("click", function () {
        popupbox.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target == popupbox) {
            popupbox.style.display = "none";
        }
    });
}


/*
*   Set locations of fossil buttons
*/


setAll(); // set positions initially
window.addEventListener('resize', setAll); // set positions after window resize


// function for setting position. x = percentage of width, y = percentage of height
function setPos(x, y, objID){
    // get overall width and height
    var width = $('body').width();
    var height = $('body').height();

    // set location of object
    $("#" + objID).offset({top: (y*height), left: (x*width)});
    
    // check positions
    //console.log(width);
    //console.log(height);
    //var obj = $( "#" + objID ).position();
    //console.log(obj.top);
  };

  // Set specific locations of all the buttons
  function setAll(){
    setPos(0.67,0.81,"helix");
    setPos(0.3, 0.66, "dome");
    setPos(0.2, 0.58, "amber");
    setPos(0.46, 0.91, "root");
    setPos(0.85, 0.95, "claw");
    setPos(0.05, 0.4, "skull");
    setPos(0.5, 0.41, "armor");
    setPos(0.89, 0.43, "cover");
    setPos(0.77, 0.48, "plume");
    setPos(0.7, 0.389, "jaw");
    setPos(0.43, 0.434, "sail");
  }


