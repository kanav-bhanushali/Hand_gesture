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

    function check(){
        img= document.getElementById('captured_image'); 
        classifier.classify (img, gotResult);
    }

    function speak(){
        var Synth=window.speechSynthesis;
        var speak_data_1="The first prediction is"+Prediction_1;
        var speak_data_2="And the second prediction is"+Prediction_2;
        var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
        Synth.speak(utterThis);
    }

    function gotResult(error,results)  {
        if (error){
            console.error(error);
        }
        else {
            console.log(results);
    
            document.getElementById("result_gesture_name").innerHTML=results[0].label;
            document.getElementById("result_gesture_name2").innerHTML=results[1].label;
        Prediction_1=results[0].label;
        Prediction_2=results[1].label;
        speak();
    
        if (results[0].label=="Amazing"){
            document.getElementById("update_emoji").innerHTML="&#128076;";
        }
    
        if (results[0].label=="Ok"){
            document.getElementById("update_emoji").innerHTML="&#128077;";
        }
    
        if (results[0].label=="No"){
            document.getElementById("update_emoji").innerHTML="&#128078;";
        }

        if (results[0].label=="Victory"){
            document.getElementById("update_emoji").innerHTML="&#9996;";
        }

        if (results[0].label=="Yo"){
            document.getElementById("update_emoji").innerHTML="&#129304;";
        }

        if (results[0].label=="Five"){
            document.getElementById("update_emoji").innerHTML="&#128400;";
        }

        if (results[0].label=="Live Long"){
            document.getElementById("update_emoji").innerHTML="&#128406;";
        }

        if (results[1].label=="Amazing"){
            document.getElementById("update_emoji2").innerHTML="&#128076;";
        }
    
        if (results[1].label=="Ok"){
            document.getElementById("update_emoji2").innerHTML="&#128077;";
        }
    
        if (results[1].label=="No"){
            document.getElementById("update_emoji2").innerHTML="&#128078;";
        }

        if (results[1].label=="Victory"){
            document.getElementById("update_emoji2").innerHTML="&#9996;";
        }

        if (results[1].label=="Yo"){
            document.getElementById("update_emoji2").innerHTML="&#129304;";
        }

        if (results[1].label=="Five"){
            document.getElementById("update_emoji2").innerHTML="&#128400;";
        }

        if (results[1].label=="Live Long"){
            document.getElementById("update_emoji2").innerHTML="&#128406;";
        }

        }
    
     } 