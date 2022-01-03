var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function recog(){
    document.getElementById("textbox").innerHTML = "";
    Recognition.start()
}
Recognition.onresult=function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if(content == "take my selfie"){
        speak();
        console.log("taking selfie");
    }
}

function speak(){
    var synth = window.speechSynthesis;
// var speakData = document.getElementById("textbox").value;
speakData = "taking your selfie in 5 second"
    var utterthis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterthis);
    Webcam.attach('#camera')
    setTimeout(function(){
        take_snapshot();
        save();

    },5000)
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
function take_snapshot(){
    Webcam.snap(function(dataUri){
        document.getElementById("result").innerHTML = '<img id="selfie_img" src = "'+dataUri+'">'
    });
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_img").scroll;
    link.href=image;
    link.click()
}