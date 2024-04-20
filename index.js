// Add your code here

function submitData (userName, userEmail) {
    const userObj

    fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email : userEmail
        }),
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        console.log(object);
    })
    .catch(function (error) {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
    });
  };
  
  //submitData("Mustafa Mehmedoglu", "mustafa@somemail.com");
