Webcam.set({
    width: 410,
    height: 300,
    image_format: "png",
    png_quality: 90

})

camera = document.getElementById("camera");
Webcam.attach(camera);


function capImg(){
    Webcam.snap(function(data_uri){
        document.getElementById("obj").innerHTML = '<img id = "ImageCap" src = "'+data_uri+'" />';
    });
}

console.log("versao ml5", ml5.version);

var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Dxrf9Jl3-/model.json" ,modelLoaded);
function modelLoaded(){
    console.log("Modelo Carregado")
}

function check(){
    img = document.getElementById("ImageCap");
    classifier.classify(img, gotResult)
}

function gotResult(error, results){
    if(error){
        console.error(error)
    }
    else{

        console.log(results);
        document.getElementById("ObjName").innerHTML = results[0].label;

        document.getElementById("Precisao").innerHTML = results[0].confidence.toFixed(2);
    }
}