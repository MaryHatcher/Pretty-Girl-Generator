let apiURL = "https://api.airtable.com/v0/appds3yRXb0CtUoZF/Table%201?api_key=key1vt4SKxNqfcEUl" // this is the link found under EXAMPLE USING QUERY PARAMETER and my API KEY then replace the name with TABLE ID
let eyesURL ="https://api.airtable.com/v0/appds3yRXb0CtUoZF/Eyes?api_key=key1vt4SKxNqfcEUl"
let browsURL ="https://api.airtable.com/v0/appds3yRXb0CtUoZF/Brows?api_key=key1vt4SKxNqfcEUl"
let mouthsURL ="https://api.airtable.com/v0/appds3yRXb0CtUoZF/Mouths?api_key=key1vt4SKxNqfcEUl"
let bodiesURL ="https://api.airtable.com/v0/appds3yRXb0CtUoZF/Bodies?api_key=key1vt4SKxNqfcEUl"
let hairsURL ="https://api.airtable.com/v0/appds3yRXb0CtUoZF/Hairs?api_key=key1vt4SKxNqfcEUl"
let nosesURL ="https://api.airtable.com/v0/appds3yRXb0CtUoZF/Noses?api_key=key1vt4SKxNqfcEUl"

let data; //this is a global variable to store all the data from the database

//this is where u "call" your data

//asynchronous (javascript reads coad at same time, not line by line)
//async just means itll happen seperate to rest of code. will not interfere with other things
//dont want data to interfere with other things so just in case there are errors everything else will work fine
async function getData(url){
    //response I get from my client API
    let response = await fetch(url);
    let jsonData = await response.json();
    return jsonData;
}

let eyesImage = document.createElement("img"); 
window.addEventListener('load', (eyesLoad)) 
   function eyesLoad() {
       document.getElementById("eyesdiv").appendChild(eyesImage);
       }
let browsImage = document.createElement("img"); 
window.addEventListener('load', (browsLoad)) 
   function browsLoad() {
    document.getElementById("browsdiv").appendChild(browsImage);
       }
let mouthsImage = document.createElement("img"); 
window.addEventListener('load', (mouthsLoad)) 
   function mouthsLoad() {
    document.getElementById("mouthdiv").appendChild(mouthsImage);
       }
let bodiesImage = document.createElement("img"); 
window.addEventListener('load', (bodiesLoad)) 
   function bodiesLoad() {
       document.getElementById("bodydiv").appendChild(bodiesImage);
       }
let hairsImage = document.createElement("img"); 
window.addEventListener('load', (hairsLoad)) 
   function hairsLoad() {
    document.getElementById("hairdiv").appendChild(hairsImage);
       }

let nosesImage = document.createElement("img"); 
window.addEventListener('load', (nosesLoad)) 
   function nosesLoad() {
    document.getElementById("nosediv").appendChild(nosesImage);
       }



async function main(){

    apiData = await getData(apiURL);
    eyesData = await getData(eyesURL);
    browsData = await getData(browsURL);
    mouthsData = await getData(mouthsURL);
    bodiesData = await getData(bodiesURL);
    hairsData = await getData(hairsURL);
    nosesData = await getData(nosesURL);
    currentEye = 0;
    currentBrow = 0;
    currentMouth = 0;
    currentBody = 0;
    currentHair = 0;
    currentNose = 0;
    
    console.log(hairsData);

     for(let i = 0; i < hairsData.records.length; i++){

        //  let eye = 9;
         console.log(hairsData.records[i].fields.image[0].url);

         //or if u want date: console.log(apiData.records[i].fields.date);
        //  let heading = document.createElement("h2"); //CREATE ELEMENT!!!!!
        //  heading.innerHTML = "Eyes = " + eyes;
        //  document.body.appendChild(heading); //append child is look at something and add a child to it

        //  let image = document.createElement("img");
        //  image.src = eyesData.records[i].fields.image[0].url;
        // //  image.className = "image" + i; //if u want different class name per number
        //  document.body.appendChild(image);
     }

     
     document.getElementById("nexteyes").addEventListener("click",nextEyes);
        function nextEyes(){
             if (currentEye < eyesData.records.length - 1){
                currentEye++;

        }else {
            currentEye= 0;
        }
        console.log(eyesData.records[currentEye].fields.color);
        eyesImage.src = eyesData.records[currentEye].fields.image[0].url;

        if (eyesData.records[currentEye].fields.color=== "green"){
            let eyesValue = 8;
            console.log(eyesValue);
        };
        if (eyesData.records[currentEye].fields.color=== "blue"){
            let eyesValue = 20;
            console.log(eyesValue);
        };
        }

     document.getElementById("nextbrows").addEventListener("click",nextBrows);
        function nextBrows(){
           if (currentBrow < browsData.records.length - 1){
               currentBrow++;
   
           }else {
               currentBrow= 0;
           }
           console.log(currentBrow);
           browsImage.src = browsData.records[currentBrow].fields.image[0].url;

           if (browsData.records[currentBrow].fields.thickness=== "thin"){
            let browsValue = 100;
            console.log(browsValue);
        };
           }
           
     document.getElementById("nextmouths").addEventListener("click",nextMouths);
        function nextMouths(){
           if (currentMouth < mouthsData.records.length - 1){
               currentMouth++;
   
           }else {
               currentMouth= 0;
           }
           console.log(currentMouth);
           mouthsImage.src = mouthsData.records[currentMouth].fields.image[0].url;
           }

     document.getElementById("nextbodies").addEventListener("click",nextBodies);
        function nextBodies(){
           if (currentBody < bodiesData.records.length - 1){
               currentBody++;
   
           }else {
               currentBody= 0;
           }
           console.log(currentBody);
           bodiesImage.src = bodiesData.records[currentBody].fields.image[0].url;
           } 

     document.getElementById("nexthairs").addEventListener("click",nextHairs);
        function nextHairs(){
            if (currentHair < hairsData.records.length - 1){
                  currentHair++;
      
           }else {
                currentHair= 0;
              }
            console.log(currentHair);
            hairsImage.src = hairsData.records[currentHair].fields.image[0].url;
              }           
           
     document.getElementById("nextnoses").addEventListener("click",nextNoses);
        function nextNoses(){
            if (currentNose < nosesData.records.length - 1){
                  currentNose++;
      
           }else {
                currentNose= 0;
              }
            console.log(currentNose);
            nosesImage.src = nosesData.records[currentNose].fields.image[0].url;
              }
        console.log(eyesValue + browsValue);
              

        }

        function showWhat(){
            document.getElementById("whatbutton").style.display = "none";
            document.getElementById("what").style.display = "block";
        }
        function showDefineButton(){
            document.getElementById("what").style.display = "none"; 
            document.getElementById("definebutton").style.display = "inline-block"; 
        }

        var definitionArray = [
            "<br><b>When a girl is stunning or attractive</b><br><br>Posted on Urban Dictionary by <i>xmilisnotonfirex</i>,<br>February 19, 2015.", 
            "<br><b>word that describes attractive characteristics of a person, male or female, with feminine features.</b><br><br>Posted on Urban Dictionary by <i>lovelylael</i>,<br>October 14, 2017.", 
            "<br><b>Expressed when a dude/chick is actually in love with the subject, rather than sexy, hot, ect.</b><br><br>Posted on Urban Dictionary by <i>NoobMuncher</i>,<br>March 12, 2007", 
            "<br><b>1. A word for someone who deserves a better adjective than hot. Usually used to describe someone who you would actually like to talk to, not just to look at.<br>2. Can be used to describe an animal without making you sound creepy.</b><br><br>Posted on Urban Dictionary by <i>Xzonza 1</i>,<br>August 9, 2010.", 
            "<br><b>Beautiful, gorgeous, dressed nice, clean, neat</b><br><br>Posted on Urban Dictionary by <i>prettysydneyy</i>,<br>May 5, 2014.", 
            "<br><b>Everyone who is able to believe in themselves</b><br><br>Posted on Urban Dictionary by <i>Ñöū</i>,<br>May 25, 2019.", 
            "<br><b>The word 'pretty' can be used in a multitude of ways. Not only can it be used as a descriptive term for something you've visually seen, it can also be used to describe a felt (mentally or emotionally) status, so to speak, of something or someone. While words like, for example, pretty, ugly, beautiful and hideous are all used at the opinion and discretion of the user, 'pretty' is often times a more readily used and agreed upon term to describe something or someone that is above average aesthetically. Be it an outfit, hairdo, painting, a persons face or a home, if its appearance is above average (but not considered to be to the level of gorgeous or beautiful) in its attractiveness, it could be considered 'pretty'.<br>As a feeling, it's generally used to proclaim an above - average opinion on something. It can, however, sometimes be used to describe something as only so-so. As you can tell, 'pretty' has many uses. These are only a few definitions.</b><br><br>Posted on Urban Dictionary by <i>Hmm ...</i>,<br>May 25, 2014.", 
            "<br><b>Telling me I'm cute or hot isn't a compliment it's a FACT like thanks for having eyes...bitch</b><br><br>Posted on Urban Dictionary by <i>Vorg Vorgas</i>,<br>December 18, 2018.", 
            "<br><b>Used when describing someone as good looking or in street terms used when discribling someone that can dress or has 'swag'</b><br><br>Posted on Urban Dictionary by <i>Pimp_157383</i>,<br>April 4, 2017.", 
            "<br><b>Social standards<br>'Pretty' is being bodily accepted<br>'Pretty' is having 'nice eyes' or a 'nice body' NOT having the most amazing personality or attitude towards others<br>'Pretty' is what makes me hate myself<br>You don't have to be 'pretty'. Your already BEAUTIFUL!!!</b><br><br>Posted on Urban Dictionary by <i>MrsHemmings9900</i>,<br>September 29, 2014.", 
            "<br><b>Jaimee 's laugh</b><br><br>Posted on Urban Dictionary by <i>Some guy who's not lying</i>,<br>October 1, 2018.", 
            "<br><b>Average, but mainly used when talking to someone you dislike and mainly used in a sarcastic way.<br>Or when you have to compliment someone you dislike</b><br><br>Posted on Urban Dictionary by <i>sadisticthiccy</i>,<br>April 1, 2018.", 
            "<br><b>1.)A girl who has physical appeals that attracts a guy.<br>2.)A girl can also be pretty inside in her feelings in her beliefs.</b><br><br>Posted on Urban Dictionary by <i>NARKILLA03</i>,<br>November 11, 2004.", 
            "<br><b>if a guy says a girl is pretty then he actually likes her, where as if he says hes hot, fine, fit, they arnt going to take the time to get to know her or spend time with her (unless its for a little more than talking) if a guy calls you pretty gorgeous stunning or beautiful then you have one for keeps!!!</b><br><br>Posted on Urban Dictionary by <i>roxii</i>,<br>August 3, 2006.", 
            "<br><b>Another word for rather.</b><br><br>Posted on Urban Dictionary by <i>Joey 'word' Smith</i>,<br>October 14, 2011.", 
            "<br><b>Something everybody wants to be.</b><br><br>Posted on Urban Dictionary by <i>dyingdoctor</i>,<br>February 6, 2018.", 
            "<br><b>cute underwear worn by pretty girls.<br>not overly sexy, but may have some lace.<br>are generally in pretty colors, but sometimes black, white, grey, or brown.</b><br><br>Posted on Urban Dictionary by <i>ghettostarchild</i>,<br>August 22, 2007.", 
            "<br><b>a disturbing but appropriate song by korn. on the follow the leader album. the meaning of the song is that jonathon davis once saw a disformed person going into a morgue.</b><br><br>Posted on Urban Dictionary by <i>theyurireviewer</i>,<br>October 5, 2010.", 
            "<br><b>Having the eye-pleasing qualities, but lacking in everything else including normal thought processes.</b><br><br>Posted on Urban Dictionary by <i>I<3pie</i>,<br>May 20, 2007.",
         ] 


   var currentIndex = 0;
   var currentDefinition = definitionArray[currentIndex];


    function showDefinition(){
        document.getElementById("definition").style.display = "inline-block";
        document.getElementById("enough").style.display = "inline-block";
        document.getElementById("definition").innerHTML = currentDefinition;
        findNextDefinition();
    }
    function findNextDefinition() {
        if(currentIndex === definitionArray.length - 1) {
           currentIndex = 0;
           currentDefinition = definitionArray[currentIndex];
        } else {
           var nextIndex = currentIndex + 1;
           currentDefinition = definitionArray[nextIndex];
           currentIndex = nextIndex;
        }
     } 
     
     function enough(){
        document.getElementById("definebutton").style.display = "none";
        document.getElementById("definition").style.display = "none";
        document.getElementById("enough").style.display = "none";
        document.getElementById("whatbutton").style.display = "inline-block";
         
     }

main();
