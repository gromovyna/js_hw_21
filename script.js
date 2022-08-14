let finsishArr =[]

renderJson =(nameOfFile)=>{
let xhr = new XMLHttpRequest();
xhr.open("GET",nameOfFile,false);
xhr.send();

let response = xhr.response;

let parse = jsonObj => JSON.parse(jsonObj);

finsishArr = finsishArr.concat(parse(response).children)
}

renderJson("user1.json");
renderJson("user2.json");

console.log(finsishArr); 
