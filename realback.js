function new232(){
      
  chrome.notifications.create({
   title:'ADS Central',
   iconUrl:'images/icon.png',
     message: 'Time to switch status',
     type: 'basic'

   })
 }
function timer(){
    console.log("new");
    chrome.storage.local.get(["tile","date","status"], function(result){
      console.log(result.tile);
      console.log(result.status);
        if(result.tile == null && result.status=="there" ){
          secs = 32400;
          console.log(result.tile);
        }
        if(result.tile!=null){
          secs = result.tile;
          console.log(result.tile);
          
      
      
      console.log(secs);
      if(secs!==0){
        console.log(secs);
      
      secs = Math.abs(secs);
      secs = secs-1;
      console.log(secs);
    }
      
    }
    

  chrome.storage.local.set({'tile': secs});
if(secs==14400){new232();}
})
  }
  setInterval(timer,1000);
  //context menu
/*
  chrome.contextMenus.create({
    id : "1",
    title: "tests", 
    contexts:["selection"], 
  //  onclick: getSel
  });
  
*/