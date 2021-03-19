var videoLoc = "../test.webm"

window.onload = function() {

    window.saveDataAcrossSessions = true;

    //start the webgazer tracker
    webgazer.setRegression('ridge') /* currently must set regression and tracker */
        .setGazeListener(function(data, clock) {
          //   console.log(data); /* data is an object containing an x and y key which are the x and y prediction coordinates (no bounds limiting) */
          //   console.log(clock); /* elapsed time in milliseconds since webgazer.begin() was called */
            if (data == null) {
                return;
            } else if (isNaN(data.x) || isNaN(data.y)){

                // This call will automatically start making predictions when the page loads.
                // However, it increases the load time since the model needs to train again.
                webgazer.trainModel();
                return
            }

            // Here is where you can access the predictions as they occur
            var xprediction = data.x;
            var yprediction = data.y;
            console.log(data.x);
            console.log(data.y);

        })
        // .setStaticVideo(videoLoc)
        .begin()


    // Set to false if you don't want to show the prediction on the page
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
            console.log("ready");
        } else {
            setTimeout(checkIfReady, 100);
            console.log("notready")
        }
    }

    setTimeout(checkIfReady,100);
    document.getElementById('xlocation').innerHTML = xprediction;
    document.getElementById('ylocation').innerHTML = yprediction;
};

// Kalman Filter defaults to on. Can be toggled by user.
window.applyKalmanFilter = true;

// Set to true if you want to save the data even if you reload the page.
window.saveDataAcrossSessions = true;

window.onbeforeunload = function() {
    webgazer.end();
}
