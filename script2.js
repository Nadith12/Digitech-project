let List = JSON.parse(localStorage.getItem("List")) || [];

  const warning = document.createElement("div");
  warning.style.color = "red";
  document.body.insertBefore(warning, document.querySelector(".list-container"));

toDoList();

document.getElementById('button').onclick = function () {
  const inputElement = document.querySelector('.input');
  const inputValue = inputElement.value.toLowerCase();

  if (inputValue === "") {
    warning.textContent = "Please type something in the input before clicking Add. :)";
  }
  else {
    List.push(inputValue);
    toDoList();
    inputElement.value = "";
    warning.textContent = "";
  }
};

function toDoList () {

  let elementHTML = "";

  for (let i = 0; i < List.length; i++) {
    const listValue = List[i];
    const html = `<p> 
    <span>${listValue}</span>
    <button class="delete" onclick="deleteElement(${i})"> Delete </button>
    </p>`;

    elementHTML += html;
  };

  document.querySelector(".list-container").innerHTML = elementHTML;

  localStorage.setItem("List" , JSON.stringify(List));

};

function deleteElement (i) {
  List.splice (i,1);
  toDoList();
};