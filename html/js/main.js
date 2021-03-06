var videoLoc = "../test.webm" // [20200702 xk] TODO: Source needs to be 4:3 resolution. Unsure how to make this adaptive

window.onload = function() {

    window.saveDataAcrossSessions = true;
    //start the webgazer tracker
    webgazer.setRegression('ridge') /* currently must set regression and tracker */
        //.setTracker('clmtrackr')
        .setGazeListener(function(data, clock) {
          //   console.log(data); /* data is an object containing an x and y key which are the x and y prediction coordinates (no bounds limiting) */
          //   console.log(clock); /* elapsed time in milliseconds since webgazer.begin() was called */
            if (data == null) {
                return;
            } else if (isNaN(data.x) || isNaN(data.y)){
                return
            }
          var xprediction = data.x
          var yprediction = data.y

        })
        // .setStaticVideo(videoLoc)
        .begin()  // .then(value => value.showPredictionPoints(true));
        // .showPredictionPoints(true); /* shows a square every 100 milliseconds where current prediction is */

    webgazer.params.showGazeDot = true;


    // Set up the webgazer video feedback.
    var setup = function() {
        // Set up the main canvas. The main canvas is used to calibrate the webgazer.
        var canvas = document.getElementById("plotting_canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.position = 'fixed';
    };

    function checkIfReady() {
        if (webgazer.isReady()) {
            setup();
        } else {
            setTimeout(checkIfReady, 100);
        }
    }
    
    setTimeout(checkIfReady,100);
};

// Kalman Filter defaults to on. Can be toggled by user.
window.applyKalmanFilter = true;

// Set to true if you want to save the data even if you reload the page.
window.saveDataAcrossSessions = true;

window.onbeforeunload = function() {
    webgazer.end();
}

/**
 * Restart the calibration process by clearing the local storage and reseting the calibration point
 */
function Restart(){
    document.getElementById("Accuracy").innerHTML = "<a>Not yet Calibrated</a>";
    webgazer.clearData();
    ClearCalibration();
    PopUpInstruction();
}
