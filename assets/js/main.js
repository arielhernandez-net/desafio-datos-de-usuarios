const userList = document.getElementById("users");

(async function() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();
        
        data.results.forEach(users => { 
            const innerUsers = document.createElement("div");
            innerUsers.classList.add("card", "px-0","m-1", "text-nowrap");
            innerUsers.style.width = "20rem";
            innerUsers.innerHTML = `
                <img src="${users.picture.large}" class="card-img-top" alt="User Image">
                <div class="card-body text-center">
                    <h5 class="card-title">${users.name.first} ${users.name.last}</h5>
                    <p class="card-text fs-6 ">Email: ${users.email}</p>
                    <p class="card-text">Phone: ${users.phone}</p>
                </div>`;
            userList.appendChild(innerUsers);

        });
    } catch (error) {
        console.log(error);
    }
})();
