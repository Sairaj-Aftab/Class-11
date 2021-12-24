const team = document.querySelector('.dev');
const stu = document.querySelector('.stu');
const tbody = document.querySelector('tbody');

dev.map(data => {
    team.innerHTML += `
    <div class="member">
                <img src="${data.photo}" alt="">
                <h2>${data.name}</h2>
                <h3>${data.skill}</h3>
                <div class="info">
                    <h6>ID No    : ${data.id}</h6>
                    <h6>Location : ${data.location}</h6>
                    <h6>Email    : ${data.email}</h6>
                    <h6>Phone    : ${data.phone}</h6>
                </div>
            </div>
    `
})

student.map(data => {
    stu.innerHTML += `
    <div class="member">
                <img src="${data.photo}" alt="">
                <h3>Name : ${data.name}</h3>
                <h3>Roll : ${data.roll}</h3>
                <h3>Age  : ${data.age}</h3>
                <h3>Location : ${data.location}</h3>
            </div>`
})

phoneList.map(data => {
    tbody.innerHTML += `<tr>
    <td>${data.id}</td>
    <td>${data.name}</td>
    <td>${data.location}</td>
    <td>${data.phone}</td>
    <td><img src="${data.photo}" alt=""></td>
</tr>`
})