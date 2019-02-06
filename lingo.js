var words = [
    "appel", "aldus", "afwas", "aftel", "aarde", "armen", "actie", "apart", "adres", "avond", "aders", "alarm", "boten", "balen", "beter", "bomen", 
    "boren", "boven", "boxen", "brood", "broek", "brand", "breed", "benen", "beeld", "brief", "beten", "basis", "blauw", "beren", "buren", "banen",
    "bloed", "broer", "blond", "boter", "beleg", "breng", "baken", "beker", "blind", "bezig", "baden", "bedel", "bazen", "bazin", "baren", "beden", 
    "beken", "bezem", "baard", "bidet", "breuk", "conus", "cello", "creme", "cloud", "cacao", "cadet", "cavia", "ceder", "combi", "china", "clown", 
    "draai", "deden", "dalen", "derde", "delen", "dwaas", "daden", "dader", "dames", "diner", "datum", "dozen", "dreun", "duits", "dagen", "deren", 
    "dwerg", "dwaal", "dwing", "druil", "droog", "draad", "dweil", "drank", "duren", "dwars", "drugs", "daten", "daler", "doorn", "disco", "degen", 
    "droom", "dient", "drone", "dadel", "duwen", "druif", "deken", "deler", "elven", "eigen", "enger", "engel", "elder", "enkel", "effen", "email", 
    "egaal", "fiets", "friet", "files", "forel", "films", "feest", "fruit", "falen", "flora", "fauna", "feeen", "freak", "forum", "fusie", "geven",
    "gaven", "groen", "graai", "getal", "grens", "grond", "groef", "graal", "gewei", "games", "grote", "groet", "garen", "gebak", "graag", "genre", 
    "glans", "geluk", "geeuw", "horen", "heren", "halen", "hagel", "haren", "helen", "harde", "hemel", "hoofd", "huren", "hamer", "haken", "heden",
    "hotel", "hobby", "heler", "hoger", "ieder", "index", "immer", "icoon", "inlog", "inzet", "innig", "jovel", "jaren", "jicht", "jabot", "jacht", 
    "jaden", "jagen", "jager", "japon", "jarig", "jawel", "jeans", "jemig", "jeugd", "joint", "jonas", "joule", "koken", "kreet", "koker", "kerst", 
    "kegel", "koude", "kader", "krent", "kamer", "kaars", "kaart", "kraan", "krant", "keren", "kruid", "kerel", "kubus", "kraal", "kleur", "kroon",
    "klein", "korst", "klopt", "kabel", "kunst", "kopje", "krans", "klimt", "kater", "klink", "kudde", "kruis", "lopen", "laten", "lepel", "links", 
    "laden", "leven", "lezen", "lucht", "lenen", "laser", "lente", "licht", "lader", "leder", "lunch", "lijst", "leger", "leden", "legen", "lagen", 
    "lezer", "lever", "lingo", "loper", "luier", "lager", "leeuw", "maand", "malen", "maken", "media", "meter", "motor", "maten", "markt", "mazen", 
    "molen", "meest", "meren", "model", "meden", "maden", "macht", "meeuw", "mager", "magen", "maren", "manen", "noord", "nieuw", "negen", "namen", 
    "neven", "nodig", "naden", "neder", "nemen", "onder", "optel", "ovaal", "ovale", "onwel", "optie", "orden", "oppas", "ouder", "ophef", "oases",
    "palen", "plein", "pegel", "paars", "prijs", "piano", "pixel", "paden", "pasta", "pizza", "poten", "paard", "puber", "pauze", "preek", "polis", 
    "pater", "proef", "panda", "penis", "prins", "pluto", "polen", "plint", "quota", "quant", "quark", "queue", "quilt", "quote", "robot", "reken", 
    "raden", "regen", "radio", "rente", "regio", "rugby", "reden", "roken", "ruzie", "ruist", "regel", "racen", "races", "riool", "ramen", "radar", 
    "roman", "rokje", "razen", "roede", "staan", "staal", "speel", "steeg", "stoel", "stook", "steek", "schep", "spijs", "stoep", "shirt", "samen",
    "sites", "sport", "spalk", "sjaal", "storm", "staat", "steun", "strak", "serie", "shows", "schat", "snoep", "sfeer", "smeer", "speer", "scene",
    "speld", "smeed", "smaak", "super", "stand", "steer", "smelt", "sedan", "skier", "sluis", "sneer", "steel", "truck", "terug", "typen", "talen",
    "taboe", "tegel", "taart", "tafel", "trouw", "teken", "teren", "taken", "treur", "tenen", "titel", "thuis", "tiara", "teder", "toets", "tabak",
    "trein", "tarwe", "telen", "teler", "uiten", "uilig", "uitje", "uiver", "ultra", "uniek", "uppie", "uraan", "uiers", "velen", "vloer", "video",
    "varen", "vegen", "veren", "vader", "vaten", "vuren", "vrouw", "vlees", "vogel", "vroeg", "vezel", "veins", "vorst", "veder", "vanaf", "vieze",
    "veger", "villa", "veler", "vrede", "vries", "woord", "wagen", "wonen", "waren", "warme", "weten", "water", "weren", "wazig", "wegen", "weven",
    "wezen", "weken", "wraak", "wilde", "wreed", "wrede", "wenst", "woest", "xenon", "yacht", "yucca", "zwaar", "zware", "zesde", "zagen", "zalig",
    "zomer", "zeden", "zwart", "zeven", "zicht", "zadel", "zweet", "zenuw", "zweer", "zweef", "zaden", "zaken", "zeker", "zever", "zeeen"];

var container = document.createElement("DIV");

var randomWord = words[Math.floor(Math.random() * words.length)];
var randomWordparts = randomWord.split("");
var letter1 = randomWord.substring(0, 1);
var letter2 = randomWord.substring(1, 2);
var letter3 = randomWord.substring(2, 3);
var letter4 = randomWord.substring(3, 4);
var letter5 = randomWord.substring(4, 5);

document.body.appendChild(container);    
container.classList.add('container'); 

var checkk = 1;

for (r = 1; r <= 6; r++) {
    var row = document.createElement("DIV"); 
    row.id = "row" + r;
    row.classList.add("row");                 
    container.appendChild(row);               

    for (var m = 0; m < 5; m++) {
        var miniBox = document.createElement("INPUT");  
        miniBox.classList.add("miniBox");                   
        row.appendChild(miniBox);                           
        miniBox.id = row.id + "box" + m;   
        miniBox.className = row.id + "boxes";                 
        miniBox.setAttribute("maxlength", "1");             
    }
}

for (b = 1; b <= 5; b++) {
    var button = document.createElement("button");     
    container.appendChild(button);                      
    button.id = "button" + b;                           
    button.className = "buttons";                      
    button.innerHTML = "Check!";                        
}
var button1clicked = document.getElementById("button1").onclick = check_row;
var button2clicked = document.getElementById("button2").onclick = check_row;
var button3clicked = document.getElementById("button3").onclick = check_row;
var button4clicked = document.getElementById("button4").onclick = check_row;
var button5clicked = document.getElementById("button5").onclick = check_row;

console.log('het woord is: ' + randomWord);

document.getElementById('row1box0').readOnly = true;                               
for (var row = 2; row < 7; row++) {                                                 
    for (var box = 0; box < 5; box++) {                                             
        document.getElementById('row' + row + 'box' + box).readOnly = true;                                    
    }
}

document.getElementById('row1box0').value = (randomWordparts[0]);
document.getElementById('button1').disabled = false;
document.getElementById('button2').style.display = "none";
document.getElementById('button3').style.display = "none";
document.getElementById('button4').style.display = "none";
document.getElementById('button5').style.display = "none";

function check_row() {
    checkk = 1;
    randomWordparts = randomWord.split("");
    var rownumber = parseInt(this.id.replace("button", ""));
    document.getElementById('row' + rownumber + 'box0').style.background = "crimson";

    var tries = [];                                                                
    for (var i = 0; i < 5; i++) {                                                       
        tries[i] = document.getElementById('row' + rownumber + 'box' + i).value;        
    }

    for (var letter5check = 1; letter5check < 5; letter5check++) {               
        var letterToCheck = tries[letter5check];                                                        

        if (randomWordparts[letter5check] == letterToCheck) {                 
            document.getElementById('row' + rownumber + 'box' + letter5check).style.background = "crimson";     
            randomWordparts[letter5check] = null;                                                              
            tries[letter5check] = null;
            checkk++
        }
    }   

    for (var geel = 1; geel < 5; geel++) { 
        var letterToCheck = tries[geel];                                                                
        var raadletter = document.getElementById('row' + rownumber + 'box' + geel);                     
        if (letterToCheck != null) {                                                                    
            if (randomWordparts.indexOf(letterToCheck) > 0) {                                       
                raadletter.style.background = "yellow";                                                 
                raadletter.style.borderRadius = "500px";                                                
                randomWordparts[randomWordparts.indexOf(letterToCheck)] = null;                         
                tries[geel] = null;                                                              
            }
        }
    }
    if (checkk == 5){
        document.getElementById('row6box0').value = (letter1); 
        document.getElementById('row6box1').value = (letter2);
        document.getElementById('row6box2').value = (letter3);    
        document.getElementById('row6box3').value = (letter4);            
        document.getElementById('row6box4').value = (letter5);             
        document.getElementById('button' + rownumber).style.display = "none";
    }
    else if (rownumber < 5) {
        for (var i = 1; i < 5; i++) {
            document.getElementById('row' + rownumber + 'box' + i).readOnly = true;
            document.getElementById('row' + (rownumber + 1) + 'box' + i).readOnly = false;      
        }                                                                                       
    document.getElementById('button' + rownumber).style.display = "none"; 
    document.getElementById('button' + (rownumber + 1)).style.display = ""; 
    document.getElementById('row' + (rownumber + 1) + 'box0').value = (letter1); 
    } 
    
    else {
        document.getElementById('row6box0').value = (letter1); 
        document.getElementById('row6box1').value = (letter2);
        document.getElementById('row6box2').value = (letter3);    
        document.getElementById('row6box3').value = (letter4);            
        document.getElementById('row6box4').value = (letter5);             
        document.getElementById('button' + rownumber).style.display = "none";                      
    }
}