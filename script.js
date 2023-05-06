let video;
let poseNetModel;
let posesArray;
x = 0;
y = 0;
let imageMustache = "";
function preload() {
  imageMustache = loadImage("do.png");
}
function setup() {
  createCanvas(500, 500);
  video = createCapture(VIDEO);
  video.hide();
  poseNetModel = ml5.poseNet(video, () => {
    console.log("Model Loaded");
  });
  poseNetModel.on("pose", gotPoses);
}

function draw() {
  image(video, 0, 0, 500, 500);
  image(imageMustache, x - 140, y, 100, 100);
}
const gotPoses = (result) => {
  if (result.length > 0) {
    posesArray = result[0];
    x = posesArray.pose.nose.x;
    y = posesArray.pose.nose.y;
  }
};
document.querySelector(".btn").addEventListener("click", () => {
  save("Image");
});
