async function fetchUsers() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {

            throw new Error("Failed to fetch users");

        }

        const users = await response.json();

       displayUserList(users);

    } catch (error) {

        console.log("Error:", error);

    }

}

fetchUsers();

function displayUserList(users) {
    const userList=document.getElementById("userList");
    users.forEach(user => {

        const userDiv=document.createElement("div");
        userDiv.textContent=user.name;

        userDiv.addEventListener("click", function() {

    displayUserDetails(user);
    
    })

userList.appendChild(userDiv);


});


}


function displayUserDetails(user) {

    const userDetails = document.getElementById("userDetails");

    userDetails.innerHTML = `
        <h2>${user.name}</h2>
        <p>Email: ${user.email}</p>
        <p>Address: ${user.address.street}, ${user.address.city}</p>
    `;

}