prediction1="";
Webcam.set({
    width:350,
    height:350,
    image_format:'png',
png_quality:100
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6yHTpCcgA/model.json',modelLoaded);
function modelLoaded(){
    console.log('modelLoaded');
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The first prediction is"+prediction1;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}
function check(){
    img=document.getElementById('capture_image');
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if (error) { console.error(error);
     } else { console.log(results);
         document.getElementById("result_emotion_name1").innerHTML = results[0].label;
           prediction1=results[0].label;
            speak();
            if(results[0].label == "amazing") {document.getElementById("updateemoji1").innerHTML="&#128076;";
        }
         if(results[0].label == "best"){document.getElementById("updateemoji1").innerHTML = "&#128077;";
     } 
     if(results[0].label == "victory") {document.getElementById("updateemoji1").innerHTML = "&#9996;";
     }
        }
        }