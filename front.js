/*let z1= chrome.tabs.executeScript(null, {file:'./bac.js'}, () =>{
    time = document.getElementById("time").innerHTML
    return time
  });*/


function test(){

chrome.storage.local.get(["z1"], function (result) {
  console.log(result.z1);
  document.getElementById("time1").innerHTML = result.z1;

});


chrome.storage.local.get(["z2"], function (result) {
  console.log(result.z2);
document.getElementById("time2").innerHTML = result.z2;

});
chrome.storage.local.get(["z3"], function (result) {
console.log(result.z3);
 // document.getElementById("time3").innerHTML = result.z3;


});

}
setInterval(test,1000);
test();
//var secs =32400;
// countdown


function timer(){

  chrome.storage.local.get('tile', function(result){

   
      secs = result.tile;
    
 
  /*
  if(localStorage.getItem('tile')==null){
    secs=32400;
    }
    
    if(localStorage.getItem('tile')!=null){
      secs=localStorage.getItem('tile');
    }
    */
    console.log(secs);
    if(secs!=0){
     
    function z(n) { return (n < 10 ? '0' : '') + n; }
    var sign = secs < 0 ? '-' : '';
    secs = Math.abs(secs);
    secs = secs-1;
    
    chrome.storage.local.get(["actualtime"], function (result) {
      console.log(result.z3);
        document.getElementById("time4").innerHTML = (((3600*(780-(result.actualtime)))/secs)/60).toFixed(2);
      
        aht2 = (((3600*(result.actualtime))/(32400-secs))/60);
        document.getElementById("time3").innerHTML = aht2.toFixed(2);
      });

      
    
    document.getElementById("counter").innerHTML= sign + z(secs / 3600 | 0) + ':' + z((secs % 3600) / 60 | 0) + ':' + z(secs % 60);
 
   
}
})
}
setInterval(timer,1000);

//timer();



/*chrome.runtime.onMessage.addListener('click',function(){



},false)

//console.log(localStorage.getItem('actualtime'));

// context menu





var file = document.getElementById("file").files[0];
document.getElementById("myBtn").addEventListener("click", function () {

var reader = new FileReader();
reader.addEventListener('load', function() {
reader.onload = function(e){
 dictionary=[e.target.result]
  console.log(e.target.result);
  
} });
reader.readAsText(file);
//console.log(reader.readAsText(file));
});
*/


//export to csv


document.getElementById("myBtn").addEventListener("click", function() {

  var reader = new FileReader();
  reader.addEventListener('load', function() {
    document.getElementById('file').innerText = this.result;
    dic = this.result;
localStorage.setItem('dict',dic);
  });
 file= reader.readAsText(document.querySelector('input').files[0]);
 
});

const dictionary= localStorage.getItem('dict').split(', ');
document.getElementById("but").onclick = function dic() {
  var word = document.getElementById("inp").value;
  // var dictionary = new Array("Java","Python","Swift","HTML","PHP");
  // This line is unnecessary; use the dictionary var already created.
  
  let out = [];
  for(var i = 0; i < dictionary.length; i++) {
      if(dictionary[i] == word) {
       
         out.push(dictionary[i]);
          
          
          
      }
      
      if(i == dictionary.length - 1) {
          document.getElementById("result").innerHTML = "Element Not Found"; 
      }
      
  }
  console.log(out);
  if(out !=null){document.getElementById("result").innerHTML =out;}else{document.getElementById("result").innerHTML ="no Element found"}
   
}
//replace
//download csv

 


   
    
  const arr = [
          ["name1", "city1", "some other info"],
           ["name2", "city2", "more info"]
       ];
         
         
    /* keys = Object.keys(localStorage);
     console.log(keys); */
     let values = [];
     chrome.storage.local.get(null, function(items) {
      var Keys = Object.keys(items);

      console.log(Keys);
      i= Keys.length;
     console.log(items[Keys[7]]) ;
    // console.log(test);
     while ( i-- ) {
 
          values.push(items[Keys[i]]) ;
      console.log(values);
  
    }
      function call(){
     var link = document.createElement("a");
     link.textContent = "Save as CSV";
     link.download = "file.csv";
        var csv = [values].map(function(v){return v.join(',')}).join('\r\n');
         link.href = encodeURI("data:text/csv,"+csv);
         return link;
        }
         el = call();
         document.body.appendChild(el);
       
        }
         
       
        );

    

      
