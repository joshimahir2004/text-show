// let fistName = 'MJ';
// console.log(fistName);
// let Name = 10;
// console.log(Name);


// let person = {
//   name:'mahir joshi',
//   number: 10
// };
// console.log(person);


//array
// let person = ["mj", " red", "blue"];
// console.log(person[0]);

// function
// function person(name){
 
//     console.log(name + "Hi " );
// }
// person("Mahir");

// function_2
// function square(number) {
//     let num2 = number * number;
//     return num2;
// }
// // num(3);
// console.log(square(3));


// ex

function count() {
  let input = document.getElementById('Input').value;
  let lbl = document.getElementById('lbl');
  lbl.innerText =  input;
}

function footer() {

  let footer =  document.getElementById("footer_id");
  if(footer.style.marginTop= "100rem"){
    footer.style.marginTop= "0rem";
  }
  else{
    footer.style.marginTop= "100rem";
  }
}

function closeme(){
  let footer =  document.getElementById("footer_id");
  if(footer.style.marginTop= "0"){
    footer.style.marginTop= "100rem";
  }
  else{
    footer.style.marginTop= "0";
  }
}