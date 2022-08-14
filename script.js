let finsishArr =[]

renderJson =(nameOfFile)=>{
let user = new XMLHttpRequest();
user.open("GET",nameOfFile,false);
user.send();

 let response = user.response;

let parse = jsonObj => JSON.parse(jsonObj);

finsishArr = finsishArr.concat(parse(response).children)
}

renderJson("user1.json");
renderJson("user2.json");

console.log(finsishArr); 
