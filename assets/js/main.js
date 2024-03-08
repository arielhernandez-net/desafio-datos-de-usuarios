const liPost = document.getElementById("users");

(async function() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();
        
        data.results.forEach(users => { 
            const li = document.createElement("p");
            li.innerHTML = `
            <img src="${users.picture.large}" alt="">
            <p>${users.name.first} ${users.name.last}</p>
            <p>${users.email}</p>
            <p>${users.phone}</p>
            `;
            liPost.appendChild(li);
            
        });
    } catch (error) {
        console.log(error);
    }
})();
