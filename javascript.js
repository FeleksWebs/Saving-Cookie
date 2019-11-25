var inputCookie = document.getElementById('inputCookie')
var txt = document.getElementById('txt')

function SetCookie(){
    if(inputCookie.value != ""){
        document.cookie = "name="+inputCookie.value+";expires = Fri, 5 Aug 2099 01:00:00 UTC;"
        console.log(document.cookie) 
        
    }

}

function DeleteCookie(){
    document.cookie = "name=;expires = Thu, 01 Jan 1970 00:00:00 GMT"
}

function DisplayCookie(){
    var InsideCookie = document.cookie.split('=')
    txt.innerHTML = 'Your cookie is ' +'[ ' + InsideCookie[1] + ' ]'
    console.log(typeof document.cookie)

    if(InsideCookie[1] ===  undefined ){
        txt.innerHTML = "[ Cookie is empty ]"
    }
}