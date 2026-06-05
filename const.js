
var p='global';
var q='global';

function test(){
    var p='local';
    let q='local';
    console.log(p);
    console.log(q);
}

