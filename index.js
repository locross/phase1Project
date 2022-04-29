function about(){
    alert('Link to about page')

};

function reset(){
    formFH.fNameIn.value = '';
    formFH.lNameIn.value = '';
    formFH.eMailIn.value = '';
    formFH.phoneIn.value = '';
    document.getElementById('cityIn').value = '';
    formSH.experience1In.value = '';
    formSH.experience1Info.value = '';
    formSH.experience2In.value = '';
    formSH.experience2Info.value = '';
    formSH.experience3In.value = '';
    formSH.experience3Info.value = '';

};

function saveValues(){
    const fname = formFH.fNameIn.value;
    const lname = formFH.lNameIn.value;
    const email = formFH.eMailIn.value;
    const phNumber = formFH.phoneIn.value;
    const city = formFH.cityIn.value;
    const experience1 = formSH.experience1In.value;
    const experience1Info = formSH.experience1Info.value;
    const experience2 = formSH.experience2In.value;
    const experience2Info = formSH.experience2Info.value;
    const experience3 = formSH.experience3In.value;
    const experience3Info = formSH.experience3Info.value;
    console.log(fname);
    console.log(lname);
    console.log(email);
    console.log(phNumber);
    console.log(city);
    console.log(experience1);
    console.log(experience1Info);
    console.log(experience2);
    console.log(experience2Info);
    console.log(experience3);
    console.log(experience3Info);

};

function output(){
    document.getElementById('heading').innerText = formFH.fNameIn.value + ' ' + formFH.lNameIn.value;
    document.getElementById('emailOut').innerHTML = formFH.eMailIn.value;
    document.getElementById('phoneOut').innerText = formFH.phoneIn.value;
    document.getElementById('cityOut').innerText = formFH.cityIn.value;
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
