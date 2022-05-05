document.addEventListener('DOMContentLoaded', () => {
    function fetchSaves(){
        fetch("http://localhost:3000/Saves")
        .then(response => response.json()) 
        .then(data => formSaves(data))
    function formSaves(data){
        for (let i = 0; i < data.length; i++) { 
            let list = document.createElement('li');
            let buttons = document.createElement('a');
            buttons.classList.add('dropdown-item');
            buttons.innerHTML = data[i].fname;
            list.appendChild(buttons);
            document.getElementById('dropdownUL').appendChild(list);
            buttons.onclick = () => {
                let save = data[i]
                form.fNameIn.value = save.fname;
                form.lNameIn.value = save.lname;
                form.eMailIn.value = save.email;
                form.phoneIn.value = save.phNumber;
                form.cityIn.value = save.city;
                form.experience1In.value = save.experience1;
                form.experience2In.value = save.experience2;
                form.experience3In.value = save.experience3;
            }
        };
    };};       
    fetchSaves();
});

// Reset input field
function reset(){
    form.fNameIn.value = ''
    form.lNameIn.value = '';
    form.eMailIn.value = '';
    form.phoneIn.value = '';
    form.cityIn.value = '';
    form.experience1In.value = '';
    form.experience1Info.value = '';
    form.experience2In.value = '';
    form.experience2Info.value = '';
    form.experience3In.value = '';
    form.experience3Info.value = '';

};

// Saves input field values to db.json
function saveValues(){
configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        "fname": form.fNameIn.value,
        "lname": form.lNameIn.value,
        "email": form.eMailIn.value,
        "phNumber": form.phoneIn.value,
        "city": form.cityIn.value,
        "experience1": form.experience1In.value,
        "experience2":  form.experience2In.value,
        "experience3": form.experience3In.value
    })
}
fetch("http://localhost:3000/Saves", configurationObject);
};

// Sets value of output field to value of input field
function output(){
    document.getElementById('heading').innerText = form.fNameIn.value;
    document.getElementById('emailLogo').style.backgroundImage = "url('https://cdn-icons-png.flaticon.com/512/725/725643.png')";
    document.getElementById('emailOut').innerText = form.lNameIn.value;
    document.getElementById('phoneLogo').style.backgroundImage = "url('https://cdn-icons-png.flaticon.com/512/597/597177.png')";
    document.getElementById('phoneOut').innerText = form.phoneIn.value;
    document.getElementById('cityLogo').style.backgroundImage = "url('https://cdn-icons-png.flaticon.com/512/25/25694.png')";
    document.getElementById('cityOut').innerText = form.cityIn.value;
    document.getElementById('subHeading').innerText = "Experience";
    document.getElementById('experience1Out').innerText = form.experience1In.value;
    document.getElementById('experience1InfoOut').innerHTML = form.experience1Info.value;
    document.getElementById('experience2Out').innerText = form.experience2In.value;
    document.getElementById('experience2InfoOut').innerText = form.experience2Info.value;
    document.getElementById('experience3Out').innerText = form.experience3In.value;
    document.getElementById('experience3InfoOut').innerText = form.experience3Info.value;
    
};

// Array and function for changing fonts button
const fontSelections = new Array;
fontSelections[1] = 'Hind Madurai';
fontSelections[2] = 'Montserrat';
fontSelections[3] = 'Roboto Condensed';
fontSelections[4] = 'Titillium Web';

let fontChanger = (fontSelections) => {
    document.getElementById('page').style.fontFamily = fontSelections;
};

let colorChanger = (color) => {
    document.getElementById('page').style.color = color;
};

// Array and function for changing backgrounds button
const backgroundSelections = new Array;
backgroundSelections[1] = "url('https://i.pinimg.com/736x/59/6b/8f/596b8fed52b2cedb3addf527c150534c.jpg')";
backgroundSelections[2] = "url('https://thumbs.dreamstime.com/b/watery-document-background-20184231.jpg')";
backgroundSelections[3] = "url('https://png.pngtree.com/background/20210710/original/pngtree-light-paper-texture-textured-background-picture-image_1043204.jpg')";
backgroundSelections[4] = "url('https://i.pinimg.com/736x/30/89/32/3089327d41ec6ede2cf3ea1d31e9488c.jpg')";

let backgroundChanger = (backgroundSelections) => {
    document.getElementById('page').style.backgroundImage = backgroundSelections;
};
