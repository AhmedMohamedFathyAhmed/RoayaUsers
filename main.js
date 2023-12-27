var btn=document.getElementById("btn");
var nameInput=document.getElementById("nameUser");
var areaReq=document.getElementById("area-req");
var priceArea=document.getElementById("price-area");
var phoneUser=document.getElementById("phone-user");


var resetInput=document.getElementsByClassName("control");
var currentIndexRaw;
var array

// console.log(nameInputUser);

if(localStorage.getItem("listEmployeeUser")==null){
    array=[];
}
else{
    
    array=JSON.parse(localStorage.getItem("listEmployeeUser"));
    displayData();
}




btn.onclick=function addEmployee(){
    if(btn.innerHTML=="Save Data"){
        employee();
    }
    else{
        EditRow();
    }
    displayData();
    reset();
}

function employee(){
    
var employee={
    name:nameInput.value,
    areaReq:areaReq.value,
    priceArea:priceArea.value,
    phoneUser:phoneUser.value,
    // phone:phoneInput.value,  
    // phoneTwo:phoneInputTwo.value,  
    // price:priceInput.value,  


}
// console.log(nameInputUserValue,"uaa");

    array.push(employee);
    localStorage.setItem("listEmployeeUser",JSON.stringify(array));
}


function deleteItem(index){
    array.splice(index,1);
    localStorage.setItem("listEmployeeUser",JSON.stringify(array));
    displayData();
}

function displayData(){

    let tr="";
    for(var i=0; i<array.length; i++){
    tr+=
    `
        <tr>
        <td>${array[i].name}</td>
        <td>${array[i].areaReq}</td>
        <td>${array[i].priceArea}</td>
        <td>${array[i].phoneUser}</td>
     
        <td><button class="btn btn-danger" onClick="deleteItem(${i})">Delete</button></td>
        <td><button class="btn btn-info" onClick="Update(${i})">Update</button></td>
        </tr>
        
    `
}
    document.getElementById("tbody").innerHTML=tr;
}
    
function reset(){

    for(var i=0;i<resetInput.length;i++){
        resetInput[i].value="";
    }
}

function Update(i){
    
    nameInput.value=array[i].name;
    areaReq.value=array[i].areaReq;
    priceArea.value=array[i].priceArea;
    phoneUser.value=array[i].phoneUser;
    // salaryInput.value=array[i].salary;
    // phoneInput.value=array[i].phone;
    // phoneInputTwo.value=array[i].phoneTwo;
    // priceInput.value=array[i].price;
    btn.innerHTML="update Employee";
    currentIndexRaw=i;

}

function EditRow(){
   
    var employee={

        "name":nameInput.value,
        "areaReq":areaReq.value,
        "priceArea":priceArea.value,
        "phoneUser":phoneUser.value,
        // "salary":salaryInput.value,
        // "phone":phoneInput.value, 
        // "phoneTwo":phoneInputTwo.value, 
        // "price":priceInput.value,   
    
    }
       array[currentIndexRaw]=employee;
       localStorage.setItem("listEmployeeUser",JSON.stringify(array));
        btn.innerHTML="Save Data";
        
}

function search(searchText){
    var tr="";
    for(var i=0;i<array.length; i++){
        
        if(array[i].name.toLowerCase().includes(searchText.toLowerCase())){
           
            tr+=
            `
                <tr>
                <td>${array[i].name}</td>
                <td>${array[i].areaReq}</td>
                <td>${array[i].priceArea}</td>
                <td>${array[i].phoneUser}</td>
                <td><button class="btn btn-danger" onClick="deleteItem(${i})">Delete</button></td>
                <td><button class="btn btn-info" onClick="Update(${i})">Update</button></td>
                </tr>
            `
        }
       
}
    document.getElementById("tbody").innerHTML=tr;
    
}

function searchTwo(searchTexts){
    var tr="";
    for(var ij=0;ij<array.length; ij++){
        
        if(array[ij].priceArea.includes(searchTexts)){
           
            tr+=
            `
                <tr>
                <td>${array[ij].name}</td>
                <td>${array[ij].areaReq}</td>
                <td>${array[ij].priceArea}</td>
                <td>${array[ij].phoneUser}</td>
                <td><button class="btn btn-danger" onClick="deleteItem(${ij})">Delete</button></td>
                <td><button class="btn btn-info" onClick="Update(${ij})">Update</button></td>
                </tr>
            `
        }
       
}
    document.getElementById("tbody").innerHTML=tr;
    
}
// nameInput.onkeyup=function(){
//     validateName()
// }

// function validateName(){

//     var nameRegex=/^[A-Z][a-z]{2,7}$/;
//     if(!nameRegex.test(nameInput.value)){
//         btn.disabled="true";
//         return false;
//     }
//     else{
//         btn.removeAttribute("disabled");
//         return true;
//     }

// }



/*   ddddddddddd */

// ageInput.onkeyup=function(){
//     validateAge()
// }


// function validateAge(){

//     var ageRegex=/^(80|[2-7][0-9])$/;
//     if(!ageRegex.test(ageInput.value)){
//         btn.disabled="true";
//         return false;
//     }
//     else{
//         btn.removeAttribute("disabled");
//         return true;
//     }

// }

/*ccccccccccccc */

// phoneInput.onkeyup=function(){
//     validatePhone();
// }


// function validatePhone(){

//     var phoneRegex=/^(010|012|015)[0-9]{8}$/;
//     if(!phoneRegex.test(phoneInput.value)){
//         btn.disabled="true";
//         return false;
//     }
//     else{
//         btn.removeAttribute("disabled");
//         return true;
//     }

// }

