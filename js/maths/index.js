export function Vector2D(a,b,c){
let vec = {x:a, y:b, z:c}
 function MultiplyScalar(p,q,r){
    vec.x = p*vec.x
    vec.y = q*vec.x
    vec.z = r*vec.x
    
    return vec
}

Vector2D.MultiplyScalar = MultiplyScalar

return vec
}