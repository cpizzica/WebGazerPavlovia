/********************* 
 * Testwebgazer Test *
 *********************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1, 1, 1]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'TestWebGazer';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(StartTask_3RoutineBegin());
flowScheduler.add(StartTask_3RoutineEachFrame());
flowScheduler.add(StartTask_3RoutineEnd());
flowScheduler.add(EnterDistanceRoutineBegin());
flowScheduler.add(EnterDistanceRoutineEachFrame());
flowScheduler.add(EnterDistanceRoutineEnd());
flowScheduler.add(EnterHeightRoutineBegin());
flowScheduler.add(EnterHeightRoutineEachFrame());
flowScheduler.add(EnterHeightRoutineEnd());
flowScheduler.add(WaitForCalibrationRoutineBegin());
flowScheduler.add(WaitForCalibrationRoutineEachFrame());
flowScheduler.add(WaitForCalibrationRoutineEnd());
flowScheduler.add(CalibrateGazeTrackerRoutineBegin());
flowScheduler.add(CalibrateGazeTrackerRoutineEachFrame());
flowScheduler.add(CalibrateGazeTrackerRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'gazeConditions.xlsx', 'path': 'gazeConditions.xlsx'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.1.2';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var StartTask_3Clock;
var StartTask;
var kbd_start_task;
var event;
var thisExp;
var win;
var EnterDistanceClock;
var distance;
var input_distance;
var line_distance;
var EnterHeightClock;
var height;
var input_height;
var line_height;
var WaitForCalibrationClock;
var text;
var kbd_wait;
var win_width;
var win_height;
var xprediction;
var yprediction;
var CalibrateGazeTrackerClock;
var key_resp;
var ShowGazeTargetClock;
var polygon;
var WaitForNextTrialClock;
var txt_wait;
var key_resp_2;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "StartTask_3"
  StartTask_3Clock = new util.Clock();
  StartTask = new visual.TextStim({
    win: psychoJS.window,
    name: 'StartTask',
    text: 'This task calibrates and tests the eye-tracking system.\nPlease get a tape measure before you start, then you will:\n\n1. Measure vewing distance\n2. Measure screen height\n3. Calibrate eye tracker\n4. Test eye tracker\n\nPress the <spacebar> to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  kbd_start_task = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  /* For WebGazer */
  event=psychoJS.eventManager;
  thisExp=psychoJS.experiment;
  win=psychoJS.window;
  
  /* FOR WEBGAZER
  //paste in head
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="css/targets.css">
  <script src="./js/targets.js" type="text/javascript" ></script>
  <script src="./node_modules/sweetalert/dist/sweetalert.min.js"></script>
  <script src="./js/webgazer.js"></script>
  
  //paste in body
  <canvas id="plotting_canvas" width="500" height="500" style="cursor:crosshair;"></canvas>
  */
  
  
  // Initialize components for Routine "EnterDistance"
  EnterDistanceClock = new util.Clock();
  distance = new visual.TextStim({
    win: psychoJS.window,
    name: 'distance',
    text: 'Please enter the distance from your eyes to the screen, in inches (decimals are ok).\n\nNote that a comfortable distance is typically 20–40 inches.\n\nAfter you enter the number, press <return> to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  input_distance = new visual.TextStim({
    win: psychoJS.window,
    name: 'input_distance',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  line_distance = new visual.ShapeStim ({
    win: psychoJS.window, name: 'line_distance', 
    vertices: [[-[0.3, 0.01][0]/2.0, 0], [+[0.3, 0.01][0]/2.0, 0]],
    ori: 0.0, pos: [0, (- 0.15)],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  // Initialize components for Routine "EnterHeight"
  EnterHeightClock = new util.Clock();
  height = new visual.TextStim({
    win: psychoJS.window,
    name: 'height',
    text: 'Please enter the height of the viewable portion of your screen, in inches (decimals are ok).\n\n\nAfter you enter the number, press <return> to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  input_height = new visual.TextStim({
    win: psychoJS.window,
    name: 'input_height',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  line_height = new visual.ShapeStim ({
    win: psychoJS.window, name: 'line_height', 
    vertices: [[-[0.3, 0.01][0]/2.0, 0], [+[0.3, 0.01][0]/2.0, 0]],
    ori: 0.0, pos: [0, (- 0.15)],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  // Initialize components for Routine "WaitForCalibration"
  WaitForCalibrationClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Once the eye-tracking test video appears\nin the upper left-hand corner of the screen,\npress the <spacebar> to begin calibration',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  kbd_wait = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Useful variables
  win_width = psychoJS.window.size[0];
  win_height = psychoJS.window.size[1];
  xprediction = 0;
  yprediction = 0;
  // Initialize components for Routine "CalibrateGazeTracker"
  CalibrateGazeTrackerClock = new util.Clock();
  
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ShowGazeTarget"
  ShowGazeTargetClock = new util.Clock();
  polygon = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon', 
    edges: 50, size:[0.03, 0.03],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('red'),
    fillColor: new util.Color('red'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "WaitForNextTrial"
  WaitForNextTrialClock = new util.Clock();
  txt_wait = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_wait',
    text: 'Press the <spacebar> when you are ready to start the next trial.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _kbd_start_task_allKeys;
var StartTask_3Components;
function StartTask_3RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'StartTask_3'-------
    t = 0;
    StartTask_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    kbd_start_task.keys = undefined;
    kbd_start_task.rt = undefined;
    _kbd_start_task_allKeys = [];
    // keep track of which components have finished
    StartTask_3Components = [];
    StartTask_3Components.push(StartTask);
    StartTask_3Components.push(kbd_start_task);
    
    StartTask_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function StartTask_3RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'StartTask_3'-------
    // get current time
    t = StartTask_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *StartTask* updates
    if (t >= 0.0 && StartTask.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      StartTask.tStart = t;  // (not accounting for frame time here)
      StartTask.frameNStart = frameN;  // exact frame index
      
      StartTask.setAutoDraw(true);
    }

    
    // *kbd_start_task* updates
    if (t >= 0.0 && kbd_start_task.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      kbd_start_task.tStart = t;  // (not accounting for frame time here)
      kbd_start_task.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { kbd_start_task.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { kbd_start_task.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { kbd_start_task.clearEvents(); });
    }

    if (kbd_start_task.status === PsychoJS.Status.STARTED) {
      let theseKeys = kbd_start_task.getKeys({keyList: ['space'], waitRelease: false});
      _kbd_start_task_allKeys = _kbd_start_task_allKeys.concat(theseKeys);
      if (_kbd_start_task_allKeys.length > 0) {
        kbd_start_task.keys = _kbd_start_task_allKeys[_kbd_start_task_allKeys.length - 1].name;  // just the last key pressed
        kbd_start_task.rt = _kbd_start_task_allKeys[_kbd_start_task_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    StartTask_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var gazeArray;
function StartTask_3RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'StartTask_3'-------
    StartTask_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('kbd_start_task.keys', kbd_start_task.keys);
    if (typeof kbd_start_task.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('kbd_start_task.rt', kbd_start_task.rt);
        routineTimer.reset();
        }
    
    kbd_start_task.stop();
    // Start the gaze tracking
    gazeArray = [];
    
    // the Routine "StartTask_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var modify;
var EnterDistanceComponents;
function EnterDistanceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'EnterDistance'-------
    t = 0;
    EnterDistanceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    modify = false;
    input_distance.text = "";
    event.clearEvents("keyboard");
    
    // keep track of which components have finished
    EnterDistanceComponents = [];
    EnterDistanceComponents.push(distance);
    EnterDistanceComponents.push(input_distance);
    EnterDistanceComponents.push(line_distance);
    
    EnterDistanceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var _pj;
var keys;
function EnterDistanceRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'EnterDistance'-------
    // get current time
    t = EnterDistanceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *distance* updates
    if (t >= 0.0 && distance.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distance.tStart = t;  // (not accounting for frame time here)
      distance.frameNStart = frameN;  // exact frame index
      
      distance.setAutoDraw(true);
    }

    
    // *input_distance* updates
    if (t >= 0.0 && input_distance.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      input_distance.tStart = t;  // (not accounting for frame time here)
      input_distance.frameNStart = frameN;  // exact frame index
      
      input_distance.setAutoDraw(true);
    }

    
    // *line_distance* updates
    if (t >= 0.0 && line_distance.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      line_distance.tStart = t;  // (not accounting for frame time here)
      line_distance.frameNStart = frameN;  // exact frame index
      
      line_distance.setAutoDraw(true);
    }

    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = event.getKeys(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "period", "return", "backspace"]);
    if (keys.length) {
        if (_pj.in_es6("backspace", keys)) {
            input_distance.text = input_distance.text.slice(0, (- 1));
        } else {
            if (_pj.in_es6("return", keys)) {
                continueRoutine = false;
            } else {
                if (_pj.in_es6("period", keys)) {
                    input_distance.text = (input_distance.text + ".");
                } else {
                    input_distance.text = (input_distance.text + keys[0]);
                }
            }
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    EnterDistanceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EnterDistanceRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'EnterDistance'-------
    EnterDistanceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    thisExp.addData("distance", Number.parseFloat(input_distance.text));
    
    // the Routine "EnterDistance" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var EnterHeightComponents;
function EnterHeightRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'EnterHeight'-------
    t = 0;
    EnterHeightClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    modify = false;
    input_height.text = "";
    event.clearEvents("keyboard");
    
    // keep track of which components have finished
    EnterHeightComponents = [];
    EnterHeightComponents.push(height);
    EnterHeightComponents.push(input_height);
    EnterHeightComponents.push(line_height);
    
    EnterHeightComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function EnterHeightRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'EnterHeight'-------
    // get current time
    t = EnterHeightClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *height* updates
    if (t >= 0.0 && height.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      height.tStart = t;  // (not accounting for frame time here)
      height.frameNStart = frameN;  // exact frame index
      
      height.setAutoDraw(true);
    }

    
    // *input_height* updates
    if (t >= 0.0 && input_height.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      input_height.tStart = t;  // (not accounting for frame time here)
      input_height.frameNStart = frameN;  // exact frame index
      
      input_height.setAutoDraw(true);
    }

    
    // *line_height* updates
    if (t >= 0.0 && line_height.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      line_height.tStart = t;  // (not accounting for frame time here)
      line_height.frameNStart = frameN;  // exact frame index
      
      line_height.setAutoDraw(true);
    }

    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = event.getKeys(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "period", "return", "backspace"]);
    if (keys.length) {
        if (_pj.in_es6("backspace", keys)) {
            input_height.text = input_height.text.slice(0, (- 1));
        } else {
            if (_pj.in_es6("return", keys)) {
                continueRoutine = false;
            } else {
                if (_pj.in_es6("period", keys)) {
                    input_height.text = (input_height.text + ".");
                } else {
                    input_height.text = (input_height.text + keys[0]);
                }
            }
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    EnterHeightComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EnterHeightRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'EnterHeight'-------
    EnterHeightComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    thisExp.addData("height", Number.parseFloat(input_height.text));
    
    // the Routine "EnterHeight" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _kbd_wait_allKeys;
var WaitForCalibrationComponents;
function WaitForCalibrationRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'WaitForCalibration'-------
    t = 0;
    WaitForCalibrationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    kbd_wait.keys = undefined;
    kbd_wait.rt = undefined;
    _kbd_wait_allKeys = [];
    // Start Webgazer
    webgazer.begin();
    webgazer.clearData();
    
    // save window size
    psychoJS.experiment.addData('win_width', psychoJS.window.size[0]);
    psychoJS.experiment.addData('win_height', psychoJS.window.size[1]);
    
    // keep track of which components have finished
    WaitForCalibrationComponents = [];
    WaitForCalibrationComponents.push(text);
    WaitForCalibrationComponents.push(kbd_wait);
    
    WaitForCalibrationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function WaitForCalibrationRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'WaitForCalibration'-------
    // get current time
    t = WaitForCalibrationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *kbd_wait* updates
    if (t >= 0.0 && kbd_wait.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      kbd_wait.tStart = t;  // (not accounting for frame time here)
      kbd_wait.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { kbd_wait.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { kbd_wait.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { kbd_wait.clearEvents(); });
    }

    if (kbd_wait.status === PsychoJS.Status.STARTED) {
      let theseKeys = kbd_wait.getKeys({keyList: ['space'], waitRelease: false});
      _kbd_wait_allKeys = _kbd_wait_allKeys.concat(theseKeys);
      if (_kbd_wait_allKeys.length > 0) {
        kbd_wait.keys = _kbd_wait_allKeys[_kbd_wait_allKeys.length - 1].name;  // just the last key pressed
        kbd_wait.rt = _kbd_wait_allKeys[_kbd_wait_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    WaitForCalibrationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WaitForCalibrationRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'WaitForCalibration'-------
    WaitForCalibrationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('kbd_wait.keys', kbd_wait.keys);
    if (typeof kbd_wait.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('kbd_wait.rt', kbd_wait.rt);
        routineTimer.reset();
        }
    
    kbd_wait.stop();
    // the Routine "WaitForCalibration" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var CalibrateGazeTrackerComponents;
function CalibrateGazeTrackerRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'CalibrateGazeTracker'-------
    t = 0;
    CalibrateGazeTrackerClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    
    var calibrationPoints = [
        new TargetPoint(0.5,0.5),
        new TargetPoint(0.25, 0.25),
        new TargetPoint(0.75, 0.25),
        new TargetPoint(0.25, 0.75),
        new TargetPoint(0.75, 0.75),
        new TargetPoint(0.5,0.05),
        new TargetPoint(0.95,0.05),
        new TargetPoint(0.95,0.5),
        new TargetPoint(0.95,0.95),
        new TargetPoint(0.5,0.95),
        new TargetPoint(0.05,0.95),
        new TargetPoint(0.05,0.5),
        new TargetPoint(0.05,0.05),
     ];
    
    var calibrate = new Targets(calibrationPoints, 'calibration', 5);
    calibrate.start();
    console.log("calibrated");
    webgazer.setRegression('ridge');
    
    webgazer.setGazeListener(function(data,clock) {
        if(data==null) {
            return;
        } else if (isNaN(data.x) || isNaN(data.y)) {
            webgazer.trainModel();
            return;
        }
        xprediction = data.x;
        yprediction = data.y;
    });
    
    var setup = function() {
      // Set up the main canvas. The main canvas is used to calibrate the webgazer.
      var canvas = document.getElementById("plotting_canvas");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.position = 'fixed';
      
      thisExp.addData("innerWidth", window.innerWidth);
      thisExp.addData("innerHeight", window.innerHeight);
      
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
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    CalibrateGazeTrackerComponents = [];
    CalibrateGazeTrackerComponents.push(key_resp);
    
    CalibrateGazeTrackerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function CalibrateGazeTrackerRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'CalibrateGazeTracker'-------
    // get current time
    t = CalibrateGazeTrackerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    CalibrateGazeTrackerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CalibrateGazeTrackerRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'CalibrateGazeTracker'-------
    CalibrateGazeTrackerComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    webgazer.params.showVideo = false;
    webgazer.params.mirrorVideo = false;
    webgazer.params.showFaceOverlay = false;
    webgazer.params.showFaceFeedbackBox = false;
    webgazer.params.showGazeDot = false;
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "CalibrateGazeTracker" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 20, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials.forEach(function() {
    const snapshot = trials.getSnapshot();

    trialsLoopScheduler.add(importConditions(snapshot));
    const RandomizePositionLoopScheduler = new Scheduler(psychoJS);
    trialsLoopScheduler.add(RandomizePositionLoopBegin, RandomizePositionLoopScheduler);
    trialsLoopScheduler.add(RandomizePositionLoopScheduler);
    trialsLoopScheduler.add(RandomizePositionLoopEnd);
    trialsLoopScheduler.add(WaitForNextTrialRoutineBegin(snapshot));
    trialsLoopScheduler.add(WaitForNextTrialRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(WaitForNextTrialRoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var RandomizePosition;
function RandomizePositionLoopBegin(RandomizePositionLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  RandomizePosition = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'gazeConditions.xlsx',
    seed: undefined, name: 'RandomizePosition'
  });
  psychoJS.experiment.addLoop(RandomizePosition); // add the loop to the experiment
  currentLoop = RandomizePosition;  // we're now the current loop

  // Schedule all the trials in the trialList:
  RandomizePosition.forEach(function() {
    const snapshot = RandomizePosition.getSnapshot();

    RandomizePositionLoopScheduler.add(importConditions(snapshot));
    RandomizePositionLoopScheduler.add(ShowGazeTargetRoutineBegin(snapshot));
    RandomizePositionLoopScheduler.add(ShowGazeTargetRoutineEachFrame(snapshot));
    RandomizePositionLoopScheduler.add(ShowGazeTargetRoutineEnd(snapshot));
    RandomizePositionLoopScheduler.add(endLoopIteration(RandomizePositionLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function RandomizePositionLoopEnd() {
  psychoJS.experiment.removeLoop(RandomizePosition);

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var ShowGazeTargetComponents;
function ShowGazeTargetRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'ShowGazeTarget'-------
    t = 0;
    ShowGazeTargetClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    polygon.setPos([xpos, ypos]);
    // reset gazeArray
    gazeArray = [];
    // keep track of which components have finished
    ShowGazeTargetComponents = [];
    ShowGazeTargetComponents.push(polygon);
    
    ShowGazeTargetComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function ShowGazeTargetRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'ShowGazeTarget'-------
    // get current time
    t = ShowGazeTargetClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon.setAutoDraw(false);
    }
    //gazeArray.push([1000*t,(xprediction-win_width)/win_width,(win_height-yprediction)/win_height])
    gazeArray.push([1000*t,xprediction,yprediction])
    console.log(xprediction + "," + yprediction)
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ShowGazeTargetComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ShowGazeTargetRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'ShowGazeTarget'-------
    ShowGazeTargetComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // save gaze data
    thisExp.addData('gazeArray', gazeArray);
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var WaitForNextTrialComponents;
function WaitForNextTrialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'WaitForNextTrial'-------
    t = 0;
    WaitForNextTrialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    WaitForNextTrialComponents = [];
    WaitForNextTrialComponents.push(txt_wait);
    WaitForNextTrialComponents.push(key_resp_2);
    
    WaitForNextTrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function WaitForNextTrialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'WaitForNextTrial'-------
    // get current time
    t = WaitForNextTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *txt_wait* updates
    if (t >= 0.0 && txt_wait.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_wait.tStart = t;  // (not accounting for frame time here)
      txt_wait.frameNStart = frameN;  // exact frame index
      
      txt_wait.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    WaitForNextTrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WaitForNextTrialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'WaitForNextTrial'-------
    WaitForNextTrialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "WaitForNextTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  webgazer.end();
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
