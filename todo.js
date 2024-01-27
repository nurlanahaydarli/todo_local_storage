let todo_list = document.getElementById("todo_list")
let todo_input = document.getElementById("todo_input")
let todo_btn = document.getElementById("todo_btn")

const data = JSON.parse(localStorage.getItem("information")) ?? [];

todo_btn.addEventListener("click",function (){
    let value = todo_input.value;
    let form = {
        value : value
    }
    if(!value){
        todo_input.classList.add("is-invalid")
        return
    }else{
        todo_input.classList.remove("is-invalid")
    }
    data.push(form)
    localStorage.setItem("information", JSON.stringify(data));
    todo_input.value = ""
    renderInformation()
})

function renderInformation() {
    todo_list.innerHTML = data
        .map((item) =>{
           return `
        
             <li class="list-group-item">${item.value}</li>
           
           `
    }).join("");
}
renderInformation();