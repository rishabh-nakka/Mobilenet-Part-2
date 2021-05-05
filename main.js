Webcam.set({
    height: 300,
    width:300,
    image_format:"png",
    png_quality:90
})
Webcam.attach("#webcam")
function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img src='"+data_uri+"' id='result'>";
    })
}