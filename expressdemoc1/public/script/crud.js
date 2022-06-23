const contact=document.querySelector('.contact-container')
const addForm=document.querySelector('.contact-form')
let output=''
fetch("http://localhost:3001/employeeDetails").then((res)=>res.json()).then((data)=>{
data.map((item)=>{
    output+=`<div class="col-3">
    <div class="card" style="width: 18rem;">
        <div class="card-body" data-id=${item.id}>
          <h5 class="card-title">${item.id}</h5>
          <p class="card-text">${item.empName}</p>
          <p class="card-text">${item.empRole}</p>
          <p class="card-text">${item.empEmail}</p>
          <a href="#" class="btn btn-primary">delete</a>
        </div>
      </div>
    </div>`
    contact.innerHTML=output
})
}).catch((err)=>console.log(err))
addForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const uname=document.getElementById("username").value
    const uid=document.getElementById("userid").value
    const data={
        id: uid,
        empName:uname,
        empEmail: "xyz@gmail.com",
        empRole: "HR"
    }
    const url="http://localhost:3001/employeeDetails"
 fetch(url,{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    }).then((res)=>res.json()).then((data)=>location.reload()).catch((err)=>console.log(err))
})
contact.addEventListener('click',(e)=>{
    e.preventDefault()
  const userid= e.target.parentElement.dataset.id
  fetch(`http://localhost:3001/employeeDetails/${userid}`,{
    method:'DELETE'
}).then((res)=>res.json()).then((data)=>location.reload()).catch((err)=>console.log(err))
})