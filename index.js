// Add your code here

function submitData (userName, userEmail) {
    const userObj = {
        name: userName,
        email : userEmail
    };

    return fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userObj),
    })
    .then(function (response) {
        return response.json();
    })
    .then(object => {
        document.body.append(object.id);
        return object;
    })
    .catch(function (error) {
        //console.error("Error:", error);
        const errorMessage = document.createElement('div');
        errorMessage.innerHTML = error.message;
        document.body.appendChild(errorMessage);
        //throw error;
    });
}
  
  //submitData("Mustafa Mehmedoglu", "mustafa@somemail.com");
