//https://teachablemachine.withgoogle.com/models/RJgwCbJXX/
Prediction_1="";
Prediction_2="";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image"src="'+data_uri+'"/>';
    })
}

console.log('ml5version:',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/RJgwCbJXX/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model is Loaded by Kanav Bhanushali');
    }

    function speak(){
        var Synth=window.speechSynthesis;
        var speak_data_1="The first prediction is"+Prediction_1;
        var speak_data_2="And the second prediction is"+Prediction_2;
        var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
        Synth.speak(utterThis);
    }