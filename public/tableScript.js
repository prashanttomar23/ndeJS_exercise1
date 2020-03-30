// //let btnAdd = document.getElementById("buttonAdd");
// btnAdd.addEventListener("click", addUser);
// let btnUpdate = document.getElementById("buttonUpdate");
// btnUpdate.addEventListener("click", updateUser);
// let firstName=document.getElementById("fname");
// let lastName=document.getElementById("lname");

let table=document.createElement("table");
table.style.marginTop="50px";
// document.getElementById("buttonUpdate").style.display = "none";

// table.classList.add("tables");
// defaultUsers=[
//     {firstName:"Prashant",lastName:"Tomar"},
//     {firstName:"Dhoop",lastName:"Soni"},
//     {firstName:"Sahil",lastName:"Khan"},
//     {firstName:"Ravindra",lastName:"Singh"},
//     {firstName:"Bineet",lastName:"Singh"},
//     {firstName:"Risabh",lastName:"Khare"},
//     {firstName:"Subham",lastName:"Singh"},
//     {firstName:"Sanyog", lastName:"Singh"},
//     {firstName:"Sarang",lastName:"Singh"},
//     {firstName:"Nandu",lastName:"Bhide"}
// ]
// for(i=0;i<defaultUsers.length;i++){
//     (function addDefaultUsers(){
//         let firstName=defaultUsers[i].firstName;
//         let lastName=defaultUsers[i].lastName;

//         let div=document.createElement("div");
//         let tr=document.createElement("tr");
//         let td1=document.createElement("td");
//         let td2=document.createElement("td");
//         let editButton=document.createElement("button");
//         let deleteButton=document.createElement("button");
//         editButton.innerHTML="EDIT";
//         deleteButton.innerHTML="DELETE";

//         td1.innerHTML = firstName; 
//         td2.innerHTML = lastName;

//         div.append(editButton,deleteButton);
//         div.style.width = "200px";
//         tr.append(td1,td2,div);
//         table.append(tr);

//         editButton.classList.add("editButton");
//         deleteButton.classList.add("deleteButton");

//         editButton.addEventListener("click",editRow);
//         deleteButton.addEventListener("click",deleteRow);

//     })();
// }




// function addUser(user){
    
//     let div=document.createElement("div");
//     let tr=document.createElement("tr");
//     let td1=document.createElement("td");
//     let td2=document.createElement("td");
//     let editButton=document.createElement("button");
//     let deleteButton=document.createElement("button");
//     editButton.innerHTML="EDIT";
//     deleteButton.innerHTML="DELETE";

//     td1.innerHTML = user.firstName; 
//     td2.innerHTML = user.lastName;

//     div.append(editButton,deleteButton);
//     div.style.width = "200px";
//     tr.append(td1,td2,div);
//     table.append(tr);

    

//     editButton.classList.add("editButton");
//     deleteButton.classList.add("deleteButton");

//     editButton.addEventListener("click",editRow);
//     deleteButton.addEventListener("click",deleteRow);

    
// }
// //document.querySelector(".container").append(table);

// function editRow(event){
    
//     document.getElementById("buttonUpdate").style.display = "";
//     document.getElementById("buttonAdd").style.display = "none";
    
//     firstName.value = event.target.parentElement.parentElement.childNodes[0].innerHTML;
//     lastName.value = event.target.parentElement.parentElement.childNodes[1].innerHTML;
//     p=event.target;
// }
// function deleteRow(event){
//     event.target.parentElement.parentElement.remove();
//     document.getElementById("buttonUpdate").style.display = "none";
//     document.getElementById("buttonAdd").style.display = "";
    

// }
// function updateUser(){
//     document.getElementById("buttonUpdate").style.display = "none";
//     document.getElementById("buttonAdd").style.display = "";
//     p.parentElement.parentElement.childNodes[0].innerHTML=firstName.value;
//     p.parentElement.parentElement.childNodes[1].innerHTML=lastName.value;
//     firstName.value="";
//     lastName.value="";

// }
function addUser(user){
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let deleteButton=document.createElement("button");
    let editButton=document.createElement("button");
    td1.innerHTML=user.firstName;
    td2.innerHTML=user.lastName;
    deleteButton.innerHTML="DELETE";
    editButton.innerHTML="EDIT"
    deleteButton.setAttribute("id",user._id);
    tr.append(td1,td2,editButton,deleteButton);
    table.append(tr);
    document.body.append(table);
    //editButton.addEventListener("click",editRow);
    deleteButton.addEventListener("click",deleteData);
    

}
const getAllData = async() => {
    const data = await fetch("http://localhost:3000/users");
    const users = await data.json();
    users.forEach(user => {
        addUser(user);
        console.log(user);
    });
}

getAllData();

const deleteData = async() => {
    //id = '5e8081a0ae7c8de33c870852';
    let ID=event.target.id;
    //console.log(ID);
    console.log("from deletet");
    const result = await fetch("http://localhost:3000/users/" + ID, {
         method: "DELETE",
         headers: {
             'Content-Type': 'application/json'
        },
        //   body: JSON.stringify({
        //       fname: ,
        //       lname: 
        //  })
    });
    getAllData();
}





