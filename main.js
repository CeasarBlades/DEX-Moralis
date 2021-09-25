Moralis.initialize("LbiSWmE9ZRuFlAoWOeczjASm0Uki6VastlLRZEGY"); // Application id from moralis.io
Moralis.serverURL = "https://l6ue1ww5mprb.grandmoralis.com:2053/serverL"; //Server url from moralis.io

async function login() {
    try {
        currentUser = Moralis.User.current();
        if(!currentUser){
            currentUser = await Moralis.Web3.authenticate();
        }
    } catch (error) {
        console.log(error);
    }
}

function openModal(){
    document.getElementById("token_modal").style.display = "block";
}
document.getElementById("from_token_select").onclick = openModal;
document.getElementById("login_button").onclick = login;