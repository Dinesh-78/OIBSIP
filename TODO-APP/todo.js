const title = document.getElementById("input-title");
const desc = document.getElementById("input-desc");
const table = document.getElementById("table");
const sub = document.querySelector('button');

function addtask(event) {
  event.preventDefault(); 

  let str = "Please enter a valid input.";
  if (title.value === "" || desc.value === "") {
    alert(str);
    document.querySelector('.error').innerHTML = str;
  } else {
    str = "";
    
    let tr = document.createElement("tr"); // Create a new <tr> element

    let lit = document.createElement("td");
    lit.innerText = title.value;
    tr.appendChild(lit); // Append the <td> element to the <tr> element

    let lid = document.createElement("td");
    lid.innerText = desc.value;
    tr.appendChild(lid); 
    
    let b = document.createElement("td");
    let btn = document.createElement("button");
    btn.innerHTML = "DELETE";
    btn.addEventListener("click", function() {
      tr.remove(); 
    });
    b.appendChild(btn);
    tr.appendChild(b);
    
    table.appendChild(tr); 

    title.value = ""; 
    desc.value = "";
  }
}

sub.addEventListener('click', addtask);
