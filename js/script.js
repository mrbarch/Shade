//let name = 'Fast and Furious'
//let part = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//for(let i = 0; i < part[i + 1]; i++){
  //console.log(i)
//}

let subaru = {
  speed: 109,
  model: "impreza",
  color: "blue",
  oil: true

}
let owner = {
  name: "Bogdan",
  age: 29,
}
if(owner.age >= 18 && subaru.oil){
  alert("you can ride")
} else if(owner.age > 30){
  alert("buy new documents")
} else {
  alert("you should be older")
}

console.log(owner.age)
