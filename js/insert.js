// document.getElementById("btn1").addEventListener("click",add);

// async function add(e){
//     e.preventDefault();
//     let productno=document.getElementById("eno").value;
//     let productname=document.getElementById("nm").value;
//     let category=document.getElementById("city").value;
//     let price=document.getElementById("salary").value;
//     let url="http://localhost:3000/employees";

//     //post request

//     try{
//         let response=await fetch(url,{
//             method:"post",
//             body:JSON.stringify({
//                 productno:productno,
//                 productname:productname,
//                 category:category,
//                 price:price,
//             }),
//             headers:{
//                 "Content-Type":"application/json; charset=UTF-8",
//             },
//         });
//         console.log(response);
//         let value=await response.json();
//         console.log(value);
//         alert("data is successfully sent");
//     } catch(error){
//         console.log(error);
//         alert("error occured while sending data");
//     }
    
// }





// function editRow(id){
//     document.getElementById(`eno-${id}`).removeAttribute("readonly");
//     document.getElementById(`nm-${id}`).removeAttribute("readonly");
//     document.getElementById(`ct-${id}`).removeAttribute("readonly");
//     document.getElementById(`sl-${id}`).removeAttribute("readonly");

//     document.getElementById(`edit-${id}`).style.display="none";
//     document.getElementById(`save-${id}`).style.display="inline";
// }

// async function saveRow(id){
//     let myemployeeno=document.getElementById(`eno-${id}`).value;
//     let myname=document.getElementById(`nm-${id}`).value;
//     let mycity=document.getElementById(`ct-${id}`).value;
//     let mysalary=document.getElementById(`sl-${id}`).value;

//     let url=`http://localhost:3000/employees/${id}`;

//     let responseObj=await fetch(url,{
//         method:"PUT",
//         headers:{
//             "Content-Type":"applicvation/json; charset=utf-8",
//         },
//         body:JSON.stringify({
//             employeeno:myemployeeno,
//             name:myname,
//             city:mycity,
//             salary:mysalary,
//         }),
//     });
//     console.log(responseObj);
//     let data=await responseObj.json();
//     console.log(data);
//     alert("data updated successfully");
// }

// async function recDel(id) {
//     let url=`http://localhost:3000/employees/${id}`;

//     let responseObj= await fetch(url,{
//         method:"DELETE",
//     });
//     console.log(responseObj);
//     let data=await responseObj.json();
//     console.log(data);
//     alert("data successfully deleted");
    
// }





// async function display(){
//     let table=`
//     <table>
//     <tr>
//     <th>Employeeno</th>
//     <th>Employee Name</th>
//     <th>City</th>
//     <th>Actions</th>
//     </tr>`;
//     let url="http://localhost:3000/employees";
//     let responseObj=await fetch(url);
//     let mydata=await responseObj.json();
//     mydata.map((key)=>{
//         table+=`
//         <tr>
//         <td><input type="number" value="${key.employeeno}" id="eno-${key.id}"readonly></td>
//         <td><input type="text" value="${key.name}" id="nm-${key.id}"readonly></td>
//         <td><input type="text" value="${key.city}" id="ct-${key.id}"readonly></td>
//         <td><input type="number" value="${key.salary}" id="sl-${key.id}"readonly></td>
//         <td>
//         <a onclick="recDel('${key.id}')" class ="button button-delete">Delete</a>
//         <a onclick="editRow('${key.id}')" id="edit-${key.id}" class ="button button-edit">Edit</a>
//         <a onclick ="saveRow('${key.id}')" id="save-${key.id}"  class ="button button-save">Save</a>
//         </td>
//         </tr>`
//         ;
//     })

//     table += `</table>`;
//     document.getElementById("demo").innerHTML = table;
// }
// display();




// async function display() {
//     let table = `
//        <table>
//        <tr>
//        <th>Name</th>
//        <th>Age</th>
//        </tr>
//     `;
//     let url = "http://localhost:3000/employees";
//     try {
//       let responseObj = await fetch(url);
//       console.log(responseObj);
  
//       let data = await responseObj.json();
//       console.log(data);
//       // array of objects function perform map or forEach
  
//       data.map((x) => {
//         table += `
//                   <tr>
//                   <td>${x.name}</td>
//                   <td>${x.age}</td>
//                   </tr>
//         `;
//       });
  
//       table += "</table>";
//       document.getElementById("demo").innerHTML = table;
//     } catch (error) {
//       console.error("Error:", error);
//     }   
//   }
//   display();




// async function display() {
//     let table = `
//        <table>
//        <tr>
//        <th>Name</th>
//        <th>Age</th>
//        </tr>
//     `;
//     let url = "http://localhost:3000/students";
//     try {
//       let responseObj = await fetch(url);
//       console.log(responseObj);
  
//       let data = await responseObj.json();
//       console.log(data);
//       // array of objects function perform map or forEach
  
//       data.map((x) => {
//         table += `
//                   <tr>
//                   <td>${x.name}</td>
//                   <td>${x.age}</td>
//                   </tr>
//         `;
//       });
  
//       table += "</table>";
//       document.getElementById("demo").innerHTML = table;
//     } catch (error) {
//       console.error("Error:", error);
//     }   
//   }
//   display();




// function editRow(id){
//     document.getElementById(`eno-${id}`).removeAttribute("readonly");
//     document.getElementById(`nm-${id}`).removeAttribute("readonly");
//     document.getElementById(`ct-${id}`).removeAttribute("readonly");
//     document.getElementById(`sl-${id}`).removeAttribute("readonly");

//     document.getElementById(`edit-${id}`).style.display="none";
//     document.getElementById(`save-${id}`).style.display="inline";
// }

// async function saveRow(id){
//     let myemployeeno=document.getElementById(`eno-${id}`).value;
//     let myname=document.getElementById(`nm-${id}`).value;
//     let mycity=document.getElementById(`ct-${id}`).value;
//     let mysalary=document.getElementById(`sl-${id}`).value;

//     let url=`http://localhost:3000/employees/${id}`;

//     let responseObj=await fetch(url,{
//         method:"PUT",
//         headers:{
//             "Content-Type":"applicvation/json; charset=utf-8",
//         },
//         body:JSON.stringify({
//             productno:myemployeeno,
//             productname:myname,
//             category:mycity,
//             price:mysalary,
//         }),
//     });
//     console.log(responseObj);
//     let data=await responseObj.json();
//     console.log(data);
//     alert("data updated successfully");
// }

// async function recDel(id) {
//     let url=`http://localhost:3000/employees/${id}`;

//     let responseObj= await fetch(url,{
//         method:"DELETE",
//     });
//     console.log(responseObj);
//     let data=await responseObj.json();
//     console.log(data);
//     alert("data successfully deleted");
    
// }





// async function display(){
//     let table=`
//     <table>
//     <tr>
//     <th>Employeeno</th>
//     <th>Employee Name</th>
//     <th>City</th>
//     <th>Actions</th>
//     </tr>`;
//     let url="http://localhost:3000/employees";
//     let responseObj=await fetch(url);
//     let mydata=await responseObj.json();
//     mydata.map((key)=>{
//         table+=`
//         <tr>
//         <td><input type="number" value="${key.employeeno}" id="eno-${key.id}"readonly></td>
//         <td><input type="text" value="${key.name}" id="nm-${key.id}"readonly></td>
//         <td><input type="text" value="${key.city}" id="ct-${key.id}"readonly></td>
//         <td><input type="number" value="${key.salary}" id="sl-${key.id}"readonly></td>
//         <td>
//         <a onclick="recDel('${key.id}')" class ="button button-delete">Delete</a>
//         <a onclick="editRow('${key.id}')" id="edit-${key.id}" class ="button button-edit">Edit</a>
//         <a onclick ="saveRow('${key.id}')" id="save-${key.id}"  class ="button button-save">Save</a>
//         </td>
//         </tr>`
//         ;
//     })

//     table += `</table>`;
//     document.getElementById("demo").innerHTML = table;
// }
// display();


document.getElementById("btn1").addEventListener("click", add);

async function add(e) {
  e.preventDefault();

  // Retrieve form data
  let productno = document.getElementById("eno").value.trim();
  let productname = document.getElementById("nm").value.trim();
  let category = document.getElementById("city").value.trim();
  let price = document.getElementById("salary").value.trim();

  // Validate form fields
  if (!productno || !productname || !category || !price) {
    alert("All fields are required!");
    return;
  }

  // Backend URL
  let url = "http://localhost:3000/employees"; // Ensure this matches your server endpoint

  // Send POST request
  try {
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        productno: productno,
        productname: productname,
        category: category,
        price: price,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
     
    });

    if (response.ok) {
      let value = await response.json();
      console.log("Response from server:", value);

      // Alert success
      alert("Data successfully saved to the JSON file!");

      // Clear form fields
      document.getElementById("eno").value = "";
      document.getElementById("nm").value = "";
      document.getElementById("city").value = "";
      document.getElementById("salary").value = "";
    } else {
      throw new Error(`Server error: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while saving the data. Check console for details.");
  }
}
