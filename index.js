

async function display() {
  let table = `
     <table>
     <tr>
     <th>Name</th>
     <th>Age</th>
     </tr>
  `;
  let url = "http://localhost:3000/students";
  try {
    let responseObj = await fetch(url);
    console.log(responseObj);

    let data = await responseObj.json();
    console.log(data);
    // array of objects function perform map or forEach

    data.map((x) => {
      table += `
                <tr>
                <td>${x.name}</td>
                <td>${x.age}</td>
                </tr>
      `;
    });

    table += "</table>";
    document.getElementById("demo").innerHTML = table;
  } catch (error) {
    console.error("Error:", error);
  }   
}
display();