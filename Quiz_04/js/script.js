let userInfo=0
let url = "https://randomuser.me/api/"
let xhr = new XMLHttpRequest();
xhr.open("GET",url,true);
xhr.onreadystatechange = function(){
    if (this.readyState === 4 && this.status === 200){
        let response = JSON.parse(this.responseText)
            console.log(response)
            userInfo=response.results[0]
            console.log(userInfo)
            let pfp = document.getElementById("pfp")
            pfp.innerHTML = `<img src="${userInfo.picture.large}"/>`
    }else if(this.readyState === 4){
        console.log("Error :(",this.statusText)
    }
}
xhr.send();

function showName(){  
   let newinfo = document.getElementById("info")
   newinfo.innerHTML = `
   <p>Hi, My name is</p>
   <span>${userInfo.name.first} ${userInfo.name.last}</span>`
}
function showEAddr(){  
   let newinfo2 = document.getElementById("info")
   newinfo2.innerHTML = `
   <p>My email address is</p>
   <span>${userInfo.email}</span>`
}
function showBday(){  
    let newinfo2 = document.getElementById("info")
    let bday = userInfo.dob.date
    let newbday=bday.slice(0,10).replaceAll("-","/")

    newinfo2.innerHTML = `
    <p>My birthday is</p>
    <span>${newbday}</span>`
}
function showAddr(){  
   let newinfo2 = document.getElementById("info")
   newinfo2.innerHTML = `
   <p>My address is</p>
   <span>${userInfo.location.street.number} ${userInfo.location.street.name}</span>`
}
function showPhone(){  
    let newinfo2 = document.getElementById("info")
    newinfo2.innerHTML = `
    <p>My phone number is</p>
    <span>${userInfo.phone}</span>`
}
function showPass(){  
    let newinfo2 = document.getElementById("info")
    newinfo2.innerHTML = `
    <p>My password is</p>
    <span>${userInfo.login.password}</span>`
}


let coso = document.getElementById("info")
coso.addEventListener("mouseover", showName(), false);
coso.addEventListener("mouseout", showName(), false);