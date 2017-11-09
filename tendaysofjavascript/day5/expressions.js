/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    let area = expressions[0];
    let perimeter = expressions[1];
    let order = [];
    
    order.push((perimeter + Math.sqrt(perimeter * perimeter - 16 * area))/4);
    order.push((perimeter - Math.sqrt(perimeter * perimeter - 16 * area))/4);
    order.sort(function(a, b){return a-b});
    console.log(`${order[0]} 
${order[1]}`);
    //console.log(literals);
    //console.log(...expressions)
}

//other answer
function sides(literals, ...expressions) {
    var A = expressions[0];
    var P = expressions[1];
    var s1 = (P+Math.sqrt(Math.pow(P, 2)-(16*A)))/4;
    var s2 = (P-Math.sqrt(Math.pow(P, 2)-(16*A)))/4;
    return [s1, s2].sort();
}

