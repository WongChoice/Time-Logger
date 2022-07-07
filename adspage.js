const buchecktton2 = document.createElement("a");
buchecktton2.innerText = "00:08:00";
buchecktton2.value="00:08:00"
buchecktton2.id = "check";

//z= document.getElementById("check");
var z="there";

console.log(z);
let date = String( Date());

chrome.storage.local.get(['date','status'],function(e){
console.log(date);
console.log(e.date);
if(e.date!= date && e.status == "there"){

chrome.storage.local.set({
    'status': z,
    'date': date,
    'tile': null
});
}
});