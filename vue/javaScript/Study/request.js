const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    // 通信成功时，状态值为4
    if (xhr.readyState === 4){
        if (xhr.status === 200){
            console.log(xhr.responseText);
        } else {
            console.error(xhr.statusText);
        }
    }
};
xhr.onerror = function (e) {
    console.error(xhr.statusText);
};
xhr.open('GET', 'http://101.33.211.100:11030/pets/petsBasic/findAllPets', true);
xhr.send(null);
