fetch("http://localhost:3000/Saves")
  .then(response => response.json()) 
  .then(data => {
    console.log(data)
  })
var data = [];

function about(){
    alert('Link to about page')

};

function reset(){
    formFH.fNameIn.value = '';
    formFH.lNameIn.value = '';
    formFH.eMailIn.value = '';
    formFH.phoneIn.value = '';
    formFH.cityIn.value = '';
    formSH.experience1In.value = '';
    formSH.experience1Info.value = '';
    formSH.experience2In.value = '';
    formSH.experience2Info.value = '';
    formSH.experience3In.value = '';
    formSH.experience3Info.value = '';

};

function saveValues(){

configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        "fname": formFH.fNameIn.value,
        "lname": formFH.lNameIn.value,
        "email": formFH.eMailIn.value,
        "phNumber": formFH.phoneIn.value,
        "city": formFH.cityIn.value,
        "experience1": formSH.experience1In.value,
        "experience2":  formSH.experience2In.value,
        "experience3": formSH.experience3In.value
    })
}
fetch("http://localhost:3000/Saves", configurationObject);
};

function output(){
    document.getElementById('experience1Out').innerText = formSH.experience1In.value;
    document.getElementById('experience1InfoOut').innerHTML = formSH.experience1Info.value;
    document.getElementById('experience2Out').innerText = formSH.experience2In.value;
    document.getElementById('experience2InfoOut').innerText = formSH.experience2Info.value;
    document.getElementById('experience3Out').innerText = formSH.experience3In.value;
    document.getElementById('experience3InfoOut').innerText = formSH.experience3Info.value;
    
};

const fontSelections = new Array;
fontSelections[1] = 'Hind Madurai';
fontSelections[2] = 'Montserrat';
fontSelections[3] = 'Roboto Condensed';
fontSelections[4] = 'Titillium Web';

let fontChanger = (fontSelections) => {
    document.getElementById('page').style.fontFamily = fontSelections;
}

let colorChanger = (color) => {
    document.getElementById('page').style.color = color
}

const backgroundSelections = new Array;
backgroundSelections[1] = "url('https://i.pinimg.com/736x/59/6b/8f/596b8fed52b2cedb3addf527c150534c.jpg')";
backgroundSelections[2] = "url('https://thumbs.dreamstime.com/b/watery-document-background-20184231.jpg')";
backgroundSelections[3] = "url('https://png.pngtree.com/background/20210710/original/pngtree-light-paper-texture-textured-background-picture-image_1043204.jpg')";
backgroundSelections[4] = "url('https://i.pinimg.com/736x/30/89/32/3089327d41ec6ede2cf3ea1d31e9488c.jpg')";

let backgroundChanger = (backgroundSelections) => {
    document.getElementById('page').style.backgroundImage = backgroundSelections;
}
