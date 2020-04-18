let saveCookies = document.getElementById("SaveCookies")
let netflixId = document.getElementById("NetflixId")
let secureNetflixId = document.getElementById("SecureNetflixId")
let cookiesContainer = document.getElementById("CookiesContainer")
let queryContainer = document.getElementById("QueryContainer")

if(getCookie("NetflixId") && getCookie("SecureNetflixId")){
    queryContainer.style.display = "block"
}

saveCookies.addEventListener("click" , e => {
    if(!(netflixId.value && secureNetflixId.value)){
        alert("Digite os cookies!")
    }else{
        document.cookie = `NetflixId=${netflixId.value}`
        document.cookie = `SecureNetflixId=${secureNetflixId.value}`
        alert("Cookie Salvos")
        window.location.reload()
    }
})

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }