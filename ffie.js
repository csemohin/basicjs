// Immediately Invoked Function Expressions (IIFE)
var controllr = (function myObject(){
    var std = {
        name: "mohin",
        vill: "Odda",
        profession: "eng"
    }
    return std;
}
)();

var interface = (function(){
    return "hello "+ controllr.name;
})()

console.log(interface);

