

function hmsToSeconds(f) {
  
  if (typeof f === 'string') {
  var b = f.split(':');
  }
  return b[0]*3600 + b[1]*60 + (+b[2] || 0);
}

function secondsToHMS(secs) {
  function z(n){return (n<10?'0':'') + n;}
  var sign = secs < 0? '-':'';
  secs = Math.abs(secs);
  return sign + z(secs/3600 |0) + ':' + z((secs%3600) / 60 |0) + ':' + z(secs%60);
}
  
  var a = '00:13:00';
 var c = '12:22:46';

/* getTime = () =>{
  time = document.getElementById("time").innerHTML
  return time
};

if(document.getElementById("time")!= null){
var das = document.getElementById("time").innerHTML;
sessionStorage .setItem('das2', das);
};*/
//var z= '12:22:01';
//var za= hmsToSeconds(z);
console.log(z);
if(document.location.href == "https://www.utctime.net/ist-indian-time-now"){
  var z = document.getElementById("time").innerHTML;}

  document.getElementById("time1").innerHTML  = z ;

//var z = sessionStorage.getItem('das2');

chrome.runtime.onMessage.addListener((request) => {
  let {
    data,
  } = request;
  console.log(data);
});

var za= hmsToSeconds(z);
console.log(z);
var zc = hmsToSeconds(c);
console.log(secondsToHMS(za - zc));
var final=za-zc;
 document.getElementById('time1').innerHTML = secondsToHMS(final);  // -10:39:18

 // console.log(secondsToHMS(hmsToSeconds(z) - hmsToSeconds(z)));  //  10:39:18

//  document.getElementById('tmee').innerHTML  = secondsToHMS(zb - za);


  //  document.getElementById('tmee').innerHTML  = z;
  