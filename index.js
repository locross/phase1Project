function about(){
    alert('Link to about page')
}
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
}

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
}

function output(){
    document.getElementById('heading').innerText = formFH.fNameIn.value + ' ' + formFH.lNameIn.value;
    document.getElementById('emailOut').innerHTML = formFH.eMailIn.value;
    document.getElementById('phoneOut').innerText = formFH.phoneIn.value;
    document.getElementById('cityOut').innerText = formFH.cityIn.value;
    document.getElementById('experience1Out').innerText = formSH.experience1In.value;
    document.getElementById('experience1InfoOut').innerText = formSH.experience1Info.value;
    document.getElementById('experience2Out').innerText = formSH.experience2In.value;
    document.getElementById('experience2InfoOut').innerText = formSH.experience2Info.value;
    document.getElementById('experience3Out').innerText = formSH.experience3In.value;
    document.getElementById('experience3InfoOut').innerText = formSH.experience3Info.value;
    
}