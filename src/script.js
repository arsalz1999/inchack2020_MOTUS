import * as faceapi from './face-api.js';

const video = document.getElementById('video')

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  //faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.faceExpressionNet.loadFromUri('/models'),
  faceapi.nets.ageGenderNet.loadFromUri('/models')
]).then(StartVideo)

function StartVideo() {
  navigator.getUserMedia(
    { video: {} },
    stream => video.srcObject = stream,
    err => console.error(err)
  )
}
var count_happy = 0
var total_happy = 0
var average_happy = 0;
var GV={ x : 10};

function MyFunction(){
  {//what is an event listener
    const canvas = faceapi.createCanvasFromMedia(video)
    document.body.append(canvas)
    const displaySize = { width: video.width, height: video.height }
    faceapi.matchDimensions(canvas, displaySize)
    var a = setInterval(async () => {//runs it in an interval
      const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions().withAgeAndGender()
      //console.log(detections)
      const resizedDetections = faceapi.resizeResults(detections, displaySize)
      console.log(resizedDetections[0].expressions["happy"])
      //console.log(resizedDetections[0].age)
      count_happy = count_happy + 1
      total_happy = total_happy + resizedDetections[0].expressions["happy"]
      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)//resets it to display videos stream
      faceapi.draw.drawDetections(canvas, resizedDetections)
      faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)    
      faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
      faceapi.draw.drawAgeAndGender(canvas, resizedDetections)
    }, 1000)//every 1000 milliseconds
    
    function stopVideo(){
      //document.getElementById("result").innerHTML = "New text!";
      console.log("hello bender")
      clearInterval(a)
      average_happy = total_happy/count_happy
    }
  }
}

video.addEventListener('play', MyFunction)
//setTimeout(video.removeEventListener('play', myFunction), 500000)
function stopVideo(){
  var el = document.getElementById('video')
  el.remove()
}
