function closerFunctin(){
    var x = 10;
    return function(){
        var y = 20;
        var z = x+y;
        console.log(z);
    }
}
var total = closerFunctin();
total()
