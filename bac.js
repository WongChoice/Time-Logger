/*chrome.tabs.executeScript(null,{file:'./front.js'}, ()=> {

    document.getElementById('time').innerHTML

})*/

const buchecktton = document.createElement('button');
buchecktton.innerText = "buttonwa";
buchecktton.className = "buchecktton";
document.querySelector('body').appendChild(buchecktton);

function abc() {
    function works(){ 
        if (localStorage.getItem('k1') != k) {
            console.log(actualtime);
            let actualtime = localStorage.getItem('actualtime1');
            actualtime = actualtime + hmsToSeconds(p);
             actualtime = 780 - hmsToSeconds(p);
        console.log(actualtime);
        localStorage.setItem('k1', k)
       
            }
            if (localStorage.getItem('k1') == k||localStorage.getItem('k1') == null){
                actualtime = 780 - hmsToSeconds(p);
                localStorage.setItem('k1', k)
            }
           
            let ar = [p, k, c];
            localStorage.setItem(k, ar);

           
c = "00:00:30"
//let c = document.getElementById('time').innerHTML;
//let p = document.getElementById('time').innerHTML;
let p = "00:00:30"
let k = "00:00:30"; //unique id of audio
//let k = document.getElementById('timenow').innerHTML;

console.log(p);
//document.getElementById("time1").innerHTML= result.newStorage;
//let actualtimetoseconds = hmsToSeconds(p);


localStorage.setItem('actualtime1', actualtime);

let convertor = ((actualtime) * 100) / 780;
function hmsToSeconds(s) {
    var b = s.split(':');
    return b[0] * 3600 + b[1] * 60 + (+b[2] || 0);
}
let z1 = (Math.abs(100-convertor).toFixed(2)) + ' %';
console.log(Math.abs(100-convertor) + ' %');




let z2 = secondsToHMS(actualtime);
function secondsToHMS(secs) {
    function z(n) { return (n < 10 ? '0' : '') + n; }
    var sign = secs < 0 ? '-' : '';
    secs = Math.abs(secs);
    return sign + z(secs / 3600 | 0) + ':' + z((secs % 3600) / 60 | 0) + ':' + z(secs % 60);


}
chrome.storage.local.set({

    'z1': z1,
    'z2': z2,
    'z3': c,
    'actualtime': actualtime
}
);



console.log(c);

}

//add the save data button here
 buchecktton.addEventListener('click',()=>{

   
     works();
});
}
//setInterval(abc, 1000);

abc();





  // realarr = JSON.parse(allStorage());
   //console.log(realarr);
  
   
//localStorage.clear();


//selection


 ///download csv

 
function allStorage() {

   
    
    const arr = [
            ["name1", "city1", "some other info"],
             ["name2", "city2", "more info"]
         ];
           
           let values = [],
       keys = Object.keys(localStorage),
       i = keys.length;
       
       while ( i-- ) {
     
        values.push( localStorage.getItem(keys[i]) );
       
     //values[i] = JSON.parse(values[i]);
    
     
       }
       console.log(values);
       console.log(arr);
    
       var link = document.createElement("a");
       link.textContent = "Save as CSV";
       link.download = "file.csv";
          var csv = [values].map(function(v){return v.join(',')}).join('\n');
           link.href = encodeURI("data:text/csv,"+csv);
           return link;
           //console.log(values);
         // return values;
      
        
           
         }
         el = allStorage();
         document.body.appendChild(el);