// async function datashow() {
//     let mytable=`
//     <table border="1px" width="600px" bgcolor="lightblue">
//     <tr bgcolor="yellow">
//     <th>product no</th>
//     <th>product name</th>
//     <th>category</th>
//     <th>price</th>
//     </tr>
//     `;

//     //url of the server to fetch data
//     let url=`http://localhost:3000/employees`;

//     //get data from the server

//     let myobj=await fetch(url);
//     console.log(myobj); //response object

//     //converting response object to json object (array of objects)

//     let data=await myobj.json();
//     console.log(data);

//     //looping through each object 
//     data.map((key)=>{
//         mytable+=`
//         <tr>
//         <td>${key.employee}</td>
//          <td>${key.employee}</td>
//           <td>${key.employee}</td>

//         `
//     })
    
// }
// mytable+="</table>"
// document.getElementById("demo").innerHTML=mytable;



async function datashow() {
    let mytable = `
      <table border="5px" width="600px"  >
        <tr bgcolor="lightgreen">
          <th>productno</th>
          <th>productname</th>
          <th>category</th>
          <th>price</th>
        </tr>
    `;
  
    let url = `http://localhost:3000/employees`;
  
    try {
      // Fetch data from the server
      let response = await fetch(url);
  
      // Check if the fetch request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Parse the JSON data
      let data = await response.json();
  
      // Loop through the array of employees and build the table rows
      data.map((item) => {
        mytable += `
          <tr>
            <td>${item.productno}</td>
            <td>${item.productname}</td>
            <td>${item.category}</td>
            <td>${item.price}</td>
          </tr>
        `;
      });
  
      // Close the table
      mytable += "</table>";
     document.getElementById("demo").innerHTML=mytable;
     
    } catch (error) {
      console.error("Error:", error);
      document.getElementById("demo").innerHTML = `<p>Failed to load data.</p>`;
    }
  }
  
  // Call the function to display data
  datashow();
  