
  

async function datashow() {
    let mytable = `
      <table border="1px" width="600px" bgcolor="lightblue">
        <tr bgcolor="pink">
          <th>Product No</th>
          <th>Product Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
    `;
  
    let url = `http://localhost:3000/employees`;
  
    try {
      // Fetch data from the server
      let response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      let data = await response.json();
  
      // Generate table rows
      data.map((item) => {
        mytable += `
          <tr id="row-${item.id}">
            <td id="productno-${item.id}" contenteditable="true">${item.productno}</td>
            <td id="productname-${item.id}" contenteditable="true">${item.productname}</td>
            <td id="category-${item.id}" contenteditable="true">${item.category}</td>
            <td id="price-${item.id}" contenteditable="true">${item.price}</td>
            <td>
              <button onclick="saveRow('${item.id}')">Save</button>
              <button onclick="editRow('${item.id}')">Edit</button>
              <button onclick="deleteRow('${item.id}')">Delete</button>
            </td>
          </tr>
        `;
      });
  
      mytable += "</table>";
      document.getElementById("demo").innerHTML = mytable;
    } catch (error) {
      console.error("Error:", error);
      document.getElementById("demo").innerHTML = `<p>Failed to load data.</p>`;
    }
  }
  
  // Save the edited row back to the server
  async function saveRow(id) {
    try {
      let productno = document.getElementById(`productno-${id}`).innerText.trim();
      let productname = document.getElementById(`productname-${id}`).innerText.trim();
      let category = document.getElementById(`category-${id}`).innerText.trim();
      let price = document.getElementById(`price-${id}`).innerText.trim();
  
      let updatedData = {
        productno: productno,
        productname: productname,
        category: category,
        price: price,
      };
  
      let response = await fetch(`http://localhost:3000/employees/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(updatedData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      alert("Row updated successfully!");
      console.log("Updated data:", updatedData);
    } catch (error) {
      console.error("Error updating row:", error);
      alert("Failed to update the row.");
    }
  }
  
  // Enable editing for the row (if needed)
  function editRow(id) {
    document.getElementById(`productno-${id}`).contentEditable = "true";
    document.getElementById(`productname-${id}`).contentEditable = "true";
    document.getElementById(`category-${id}`).contentEditable = "true";
    document.getElementById(`price-${id}`).contentEditable = "true";
  }
  
  // Delete the row from the server and the table
  async function deleteRow(id) {
    try {
      let response = await fetch(`http://localhost:3000/employees/${id}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      alert("Row deleted successfully!");
      document.getElementById(`row-${id}`).remove();
    } catch (error) {
      console.error("Error deleting row:", error);
      alert("Failed to delete the row.");
    }
  }
  
  // Call the function to display the data
  datashow();
  