function secondsToHMS(secs) {
    function z(n) { return (n < 10 ? '0' : '') + n; }
    var sign = secs < 0 ? '-' : '';
    secs = Math.abs(secs);
    return sign + z(secs / 3600 | 0) + ':' + z((secs % 3600) / 60 | 0) + ':' + z(secs % 60);


}
function hmsToSeconds(s) {
    var b = s.split(':');
    return b[0] * 3600 + b[1] * 60 + (+b[2] || 0);
}
const buchecktton = document.createElement('button');
buchecktton.innerText = "buttonwa";
buchecktton.className = "buchecktton";
document.querySelector('body').appendChild(buchecktton);
let addedtime;
addedtime = 500;//remember to delete it for testing purpose only
function abc() {


    c = "00:00:30"
    //let c = document.getElementById('time').innerHTML;
    //let p = document.getElementById('time').innerHTML;
    let p = "00:00:30" //time of audio
    let k = "00:00:30"; //unique id of audio
    //let k = document.getElementById('timenow').innerHTML;


    //document.getElementById("time1").innerHTML= result.newStorage;
    //let actualtimetoseconds = hmsToSeconds(p);
    function works() {
        if (localStorage.getItem('k1') != k) {
            console.log(actualtime);
            let d = localStorage.getItem('addedtime');
            addedtime = d + hmsToSeconds(p);

            console.log(actualtime);
            localStorage.setItem('k1', k)

        }
        if (localStorage.getItem('k1') == k || localStorage.getItem('k1') == null) {

            localStorage.setItem('k1', k)
        }
    }
    let ar = [p, k, c];
    localStorage.setItem(k, ar);

    chrome.storage.local.set({

        k: ar
    });



    localStorage.setItem('addedtime', addedtime);
    actualtime = 780 - addedtime;

    let convertor = ((actualtime) * 100) / 780;
 
    let z1 = (Math.abs(100 - convertor).toFixed(2)) + ' %';
    console.log(Math.abs(100 - convertor) + ' %');



    let z2 = secondsToHMS(addedtime);
    
    chrome.storage.local.set({

        'z1': z1,
        'z2': z2,
        'z3': c,
        'actualtime': addedtime
    }
    );



    console.log(c);



    //add the save data button here
    buchecktton.addEventListener('click', () => {


        works();
    });
    //


    
    //
}
setInterval(abc, 1000);





// switch text through message passing

function replace() {

    var txtarea = document.getElementById("wmd-input");

    var allText = txtarea.value;

    console.log(allText);//works
    var start = txtarea.selectionStart;
    var finish = txtarea.selectionEnd;
    var allText = txtarea.value;
    var newText = allText.substring(0, start) + "mytextreplacemnt" + allText.substring(finish, allText.length);

    txtarea.value = newText;
    console.log(newText);
}


