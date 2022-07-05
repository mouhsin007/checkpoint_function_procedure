function dot_product(v1,v2){
var ps=0;
for(let i=0;i<3;i++){
    ps+=v1[i]*v2[i]
}
console.log(ps)
}
//dot_product([1,2,3],[4,3,6])
function isOrtogonal(){
    var nPair=[[1,2,3],[2,8,7],[7,2,3],[9,8,7]]
    for(let i=0;i<nPair.length;i++){
        dot_product(nPair[i],nPair[i+1])
    }
    
}