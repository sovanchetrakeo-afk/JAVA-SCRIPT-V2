let students=[
    {name:"Alice",score:85},
    {name:"Bob",score:92},
    {name:"charlie",score:78}
]
function CheckResult(students){
if(students.score>=80){
    return students.name +":Passed";
}else {
    return students.name +":Failed";
}
}
let check =students.map(CheckResult);
console.log('["'+check.join('","')+'"]');