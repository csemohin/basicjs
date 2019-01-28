// LocalScop And global Scop
function globalScop(){
    console.log("Hello Mohin i'm Global Scop");
    function localScop(){
        console.log("Hello LocalScop");
    }localScop();
}globalScop()