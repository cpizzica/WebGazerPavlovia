#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.1.2),
    on Tue Mar 16 13:53:00 2021
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.1.2'
expName = 'TestWebGazer'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/jigold/GoldWorks/Mirror_jigold/Projects/pupilClassroom/TestWebGazer/TestWebGazer_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.DEBUG)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1440, 900], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[1,1,1], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "StartTask_3"
StartTask_3Clock = core.Clock()
StartTask = visual.TextStim(win=win, name='StartTask',
    text='This task calibrates and tests the eye-tracking system.\nPlease get a tape measure before you start, then you will:\n\n1. Measure vewing distance\n2. Measure screen height\n3. Calibrate eye tracker\n4. Test eye tracker\n\nPress the <spacebar> to begin.',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
kbd_start_task = keyboard.Keyboard()

# Initialize components for Routine "EnterDistance"
EnterDistanceClock = core.Clock()
distance = visual.TextStim(win=win, name='distance',
    text='Please enter the distance from your eyes to the screen, in inches (decimals are ok).\n\nNote that a comfortable distance is typically 20–40 inches.\n\nAfter you enter the number, press <return> to continue.',
    font='Arial',
    pos=(0, 0.2), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
input_distance = visual.TextStim(win=win, name='input_distance',
    text=None,
    font='Arial',
    pos=(0, -0.1), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
line_distance = visual.Line(
    win=win, name='line_distance',
    start=(-(0.3, 0.01)[0]/2.0, 0), end=(+(0.3, 0.01)[0]/2.0, 0),
    ori=0.0, pos=(0, -0.15),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='black', fillColor='black',
    opacity=None, depth=-2.0, interpolate=True)

# Initialize components for Routine "EnterHeight"
EnterHeightClock = core.Clock()
height = visual.TextStim(win=win, name='height',
    text='Please enter the height of the viewable portion of your screen, in inches (decimals are ok).\n\n\nAfter you enter the number, press <return> to continue.',
    font='Arial',
    pos=(0, 0.2), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
input_height = visual.TextStim(win=win, name='input_height',
    text=None,
    font='Arial',
    pos=(0, -0.1), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
line_height = visual.Line(
    win=win, name='line_height',
    start=(-(0.3, 0.01)[0]/2.0, 0), end=(+(0.3, 0.01)[0]/2.0, 0),
    ori=0.0, pos=(0, -0.15),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='black', fillColor='black',
    opacity=None, depth=-2.0, interpolate=True)

# Initialize components for Routine "WaitForCalibration"
WaitForCalibrationClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='Once the eye-tracking test video appears\nin the upper left-hand corner of the screen,\npress the <spacebar> to begin calibration',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
kbd_wait = keyboard.Keyboard()

# Initialize components for Routine "CalibrateGazeTracker"
CalibrateGazeTrackerClock = core.Clock()
key_resp = keyboard.Keyboard()

# Initialize components for Routine "ShowGazeTarget"
ShowGazeTargetClock = core.Clock()
polygon = visual.Polygon(
    win=win, name='polygon',
    edges=50, size=(0.03, 0.03),
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='red', fillColor='red',
    opacity=None, depth=0.0, interpolate=True)

# Initialize components for Routine "WaitForNextTrial"
WaitForNextTrialClock = core.Clock()
txt_wait = visual.TextStim(win=win, name='txt_wait',
    text='Press the <spacebar> when you are ready to start the next trial.',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_2 = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "StartTask_3"-------
continueRoutine = True
# update component parameters for each repeat
kbd_start_task.keys = []
kbd_start_task.rt = []
_kbd_start_task_allKeys = []
# keep track of which components have finished
StartTask_3Components = [StartTask, kbd_start_task]
for thisComponent in StartTask_3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
StartTask_3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "StartTask_3"-------
while continueRoutine:
    # get current time
    t = StartTask_3Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=StartTask_3Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *StartTask* updates
    if StartTask.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        StartTask.frameNStart = frameN  # exact frame index
        StartTask.tStart = t  # local t and not account for scr refresh
        StartTask.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(StartTask, 'tStartRefresh')  # time at next scr refresh
        StartTask.setAutoDraw(True)
    
    # *kbd_start_task* updates
    waitOnFlip = False
    if kbd_start_task.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        kbd_start_task.frameNStart = frameN  # exact frame index
        kbd_start_task.tStart = t  # local t and not account for scr refresh
        kbd_start_task.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(kbd_start_task, 'tStartRefresh')  # time at next scr refresh
        kbd_start_task.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(kbd_start_task.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(kbd_start_task.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if kbd_start_task.status == STARTED and not waitOnFlip:
        theseKeys = kbd_start_task.getKeys(keyList=['space'], waitRelease=False)
        _kbd_start_task_allKeys.extend(theseKeys)
        if len(_kbd_start_task_allKeys):
            kbd_start_task.keys = _kbd_start_task_allKeys[-1].name  # just the last key pressed
            kbd_start_task.rt = _kbd_start_task_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in StartTask_3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "StartTask_3"-------
for thisComponent in StartTask_3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('StartTask.started', StartTask.tStartRefresh)
thisExp.addData('StartTask.stopped', StartTask.tStopRefresh)
# check responses
if kbd_start_task.keys in ['', [], None]:  # No response was made
    kbd_start_task.keys = None
thisExp.addData('kbd_start_task.keys',kbd_start_task.keys)
if kbd_start_task.keys != None:  # we had a response
    thisExp.addData('kbd_start_task.rt', kbd_start_task.rt)
thisExp.addData('kbd_start_task.started', kbd_start_task.tStartRefresh)
thisExp.addData('kbd_start_task.stopped', kbd_start_task.tStopRefresh)
thisExp.nextEntry()
# the Routine "StartTask_3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "EnterDistance"-------
continueRoutine = True
# update component parameters for each repeat
modify = False
input_distance.text = ''
event.clearEvents('keyboard')
# keep track of which components have finished
EnterDistanceComponents = [distance, input_distance, line_distance]
for thisComponent in EnterDistanceComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
EnterDistanceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "EnterDistance"-------
while continueRoutine:
    # get current time
    t = EnterDistanceClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=EnterDistanceClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *distance* updates
    if distance.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        distance.frameNStart = frameN  # exact frame index
        distance.tStart = t  # local t and not account for scr refresh
        distance.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(distance, 'tStartRefresh')  # time at next scr refresh
        distance.setAutoDraw(True)
    
    # *input_distance* updates
    if input_distance.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        input_distance.frameNStart = frameN  # exact frame index
        input_distance.tStart = t  # local t and not account for scr refresh
        input_distance.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(input_distance, 'tStartRefresh')  # time at next scr refresh
        input_distance.setAutoDraw(True)
    
    # *line_distance* updates
    if line_distance.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        line_distance.frameNStart = frameN  # exact frame index
        line_distance.tStart = t  # local t and not account for scr refresh
        line_distance.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(line_distance, 'tStartRefresh')  # time at next scr refresh
        line_distance.setAutoDraw(True)
    keys = event.getKeys(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'period', 'return', 'backspace'])
    
    # Update screen
    if len(keys):
        if 'backspace' in keys:
            input_distance.text = input_distance.text[:-1]
        elif 'return' in keys:
            continueRoutine = False
        elif 'period' in keys:
            input_distance.text = input_distance.text + '.'
        else:
            input_distance.text = input_distance.text + keys[0]
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in EnterDistanceComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "EnterDistance"-------
for thisComponent in EnterDistanceComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('distance.started', distance.tStartRefresh)
thisExp.addData('distance.stopped', distance.tStopRefresh)
thisExp.addData('input_distance.started', input_distance.tStartRefresh)
thisExp.addData('input_distance.stopped', input_distance.tStopRefresh)
thisExp.addData('line_distance.started', line_distance.tStartRefresh)
thisExp.addData('line_distance.stopped', line_distance.tStopRefresh)
thisExp.addData('distance', float(input_distance.text))
# the Routine "EnterDistance" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "EnterHeight"-------
continueRoutine = True
# update component parameters for each repeat
modify = False
input_height.text = ''
event.clearEvents('keyboard')
# keep track of which components have finished
EnterHeightComponents = [height, input_height, line_height]
for thisComponent in EnterHeightComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
EnterHeightClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "EnterHeight"-------
while continueRoutine:
    # get current time
    t = EnterHeightClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=EnterHeightClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *height* updates
    if height.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        height.frameNStart = frameN  # exact frame index
        height.tStart = t  # local t and not account for scr refresh
        height.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(height, 'tStartRefresh')  # time at next scr refresh
        height.setAutoDraw(True)
    
    # *input_height* updates
    if input_height.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        input_height.frameNStart = frameN  # exact frame index
        input_height.tStart = t  # local t and not account for scr refresh
        input_height.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(input_height, 'tStartRefresh')  # time at next scr refresh
        input_height.setAutoDraw(True)
    
    # *line_height* updates
    if line_height.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        line_height.frameNStart = frameN  # exact frame index
        line_height.tStart = t  # local t and not account for scr refresh
        line_height.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(line_height, 'tStartRefresh')  # time at next scr refresh
        line_height.setAutoDraw(True)
    keys = event.getKeys(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'period', 'return', 'backspace'])
    
    # Update screen
    if len(keys):
        if 'backspace' in keys:
            input_height.text = input_height.text[:-1]
        elif 'return' in keys:
            continueRoutine = False
        elif 'period' in keys:
            input_height.text = input_height.text + '.'
        else:
            input_height.text = input_height.text + keys[0]
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in EnterHeightComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "EnterHeight"-------
for thisComponent in EnterHeightComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('height.started', height.tStartRefresh)
thisExp.addData('height.stopped', height.tStopRefresh)
thisExp.addData('input_height.started', input_height.tStartRefresh)
thisExp.addData('input_height.stopped', input_height.tStopRefresh)
thisExp.addData('line_height.started', line_height.tStartRefresh)
thisExp.addData('line_height.stopped', line_height.tStopRefresh)
thisExp.addData('height', float(input_height.text))
# the Routine "EnterHeight" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "WaitForCalibration"-------
continueRoutine = True
# update component parameters for each repeat
kbd_wait.keys = []
kbd_wait.rt = []
_kbd_wait_allKeys = []
# keep track of which components have finished
WaitForCalibrationComponents = [text, kbd_wait]
for thisComponent in WaitForCalibrationComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
WaitForCalibrationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "WaitForCalibration"-------
while continueRoutine:
    # get current time
    t = WaitForCalibrationClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=WaitForCalibrationClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text* updates
    if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text.frameNStart = frameN  # exact frame index
        text.tStart = t  # local t and not account for scr refresh
        text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
        text.setAutoDraw(True)
    
    # *kbd_wait* updates
    waitOnFlip = False
    if kbd_wait.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        kbd_wait.frameNStart = frameN  # exact frame index
        kbd_wait.tStart = t  # local t and not account for scr refresh
        kbd_wait.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(kbd_wait, 'tStartRefresh')  # time at next scr refresh
        kbd_wait.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(kbd_wait.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(kbd_wait.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if kbd_wait.status == STARTED and not waitOnFlip:
        theseKeys = kbd_wait.getKeys(keyList=['space'], waitRelease=False)
        _kbd_wait_allKeys.extend(theseKeys)
        if len(_kbd_wait_allKeys):
            kbd_wait.keys = _kbd_wait_allKeys[-1].name  # just the last key pressed
            kbd_wait.rt = _kbd_wait_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in WaitForCalibrationComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "WaitForCalibration"-------
for thisComponent in WaitForCalibrationComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text.started', text.tStartRefresh)
thisExp.addData('text.stopped', text.tStopRefresh)
# check responses
if kbd_wait.keys in ['', [], None]:  # No response was made
    kbd_wait.keys = None
thisExp.addData('kbd_wait.keys',kbd_wait.keys)
if kbd_wait.keys != None:  # we had a response
    thisExp.addData('kbd_wait.rt', kbd_wait.rt)
thisExp.addData('kbd_wait.started', kbd_wait.tStartRefresh)
thisExp.addData('kbd_wait.stopped', kbd_wait.tStopRefresh)
thisExp.nextEntry()
# the Routine "WaitForCalibration" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "CalibrateGazeTracker"-------
continueRoutine = True
# update component parameters for each repeat
key_resp.keys = []
key_resp.rt = []
_key_resp_allKeys = []
# keep track of which components have finished
CalibrateGazeTrackerComponents = [key_resp]
for thisComponent in CalibrateGazeTrackerComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
CalibrateGazeTrackerClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "CalibrateGazeTracker"-------
while continueRoutine:
    # get current time
    t = CalibrateGazeTrackerClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=CalibrateGazeTrackerClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *key_resp* updates
    waitOnFlip = False
    if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp.frameNStart = frameN  # exact frame index
        key_resp.tStart = t  # local t and not account for scr refresh
        key_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
        key_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp.status == STARTED and not waitOnFlip:
        theseKeys = key_resp.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_allKeys.extend(theseKeys)
        if len(_key_resp_allKeys):
            key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
            key_resp.rt = _key_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in CalibrateGazeTrackerComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "CalibrateGazeTracker"-------
for thisComponent in CalibrateGazeTrackerComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp.keys in ['', [], None]:  # No response was made
    key_resp.keys = None
thisExp.addData('key_resp.keys',key_resp.keys)
if key_resp.keys != None:  # we had a response
    thisExp.addData('key_resp.rt', key_resp.rt)
thisExp.addData('key_resp.started', key_resp.tStartRefresh)
thisExp.addData('key_resp.stopped', key_resp.tStopRefresh)
thisExp.nextEntry()
# the Routine "CalibrateGazeTracker" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=3.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    RandomizePosition = data.TrialHandler(nReps=1.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('gazeConditions.xlsx'),
        seed=None, name='RandomizePosition')
    thisExp.addLoop(RandomizePosition)  # add the loop to the experiment
    thisRandomizePosition = RandomizePosition.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisRandomizePosition.rgb)
    if thisRandomizePosition != None:
        for paramName in thisRandomizePosition:
            exec('{} = thisRandomizePosition[paramName]'.format(paramName))
    
    for thisRandomizePosition in RandomizePosition:
        currentLoop = RandomizePosition
        # abbreviate parameter names if possible (e.g. rgb = thisRandomizePosition.rgb)
        if thisRandomizePosition != None:
            for paramName in thisRandomizePosition:
                exec('{} = thisRandomizePosition[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "ShowGazeTarget"-------
        continueRoutine = True
        routineTimer.add(2.000000)
        # update component parameters for each repeat
        polygon.setPos([xpos, ypos])
        # keep track of which components have finished
        ShowGazeTargetComponents = [polygon]
        for thisComponent in ShowGazeTargetComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        ShowGazeTargetClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "ShowGazeTarget"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = ShowGazeTargetClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=ShowGazeTargetClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *polygon* updates
            if polygon.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                polygon.frameNStart = frameN  # exact frame index
                polygon.tStart = t  # local t and not account for scr refresh
                polygon.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(polygon, 'tStartRefresh')  # time at next scr refresh
                polygon.setAutoDraw(True)
            if polygon.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > polygon.tStartRefresh + 2.0-frameTolerance:
                    # keep track of stop time/frame for later
                    polygon.tStop = t  # not accounting for scr refresh
                    polygon.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(polygon, 'tStopRefresh')  # time at next scr refresh
                    polygon.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in ShowGazeTargetComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "ShowGazeTarget"-------
        for thisComponent in ShowGazeTargetComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        RandomizePosition.addData('polygon.started', polygon.tStartRefresh)
        RandomizePosition.addData('polygon.stopped', polygon.tStopRefresh)
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'RandomizePosition'
    
    
    # ------Prepare to start Routine "WaitForNextTrial"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_2.keys = []
    key_resp_2.rt = []
    _key_resp_2_allKeys = []
    # keep track of which components have finished
    WaitForNextTrialComponents = [txt_wait, key_resp_2]
    for thisComponent in WaitForNextTrialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    WaitForNextTrialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "WaitForNextTrial"-------
    while continueRoutine:
        # get current time
        t = WaitForNextTrialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=WaitForNextTrialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *txt_wait* updates
        if txt_wait.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            txt_wait.frameNStart = frameN  # exact frame index
            txt_wait.tStart = t  # local t and not account for scr refresh
            txt_wait.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(txt_wait, 'tStartRefresh')  # time at next scr refresh
            txt_wait.setAutoDraw(True)
        
        # *key_resp_2* updates
        waitOnFlip = False
        if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_2.frameNStart = frameN  # exact frame index
            key_resp_2.tStart = t  # local t and not account for scr refresh
            key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
            key_resp_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_2.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_2.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_2_allKeys.extend(theseKeys)
            if len(_key_resp_2_allKeys):
                key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
                key_resp_2.rt = _key_resp_2_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in WaitForNextTrialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "WaitForNextTrial"-------
    for thisComponent in WaitForNextTrialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('txt_wait.started', txt_wait.tStartRefresh)
    trials.addData('txt_wait.stopped', txt_wait.tStopRefresh)
    # check responses
    if key_resp_2.keys in ['', [], None]:  # No response was made
        key_resp_2.keys = None
    trials.addData('key_resp_2.keys',key_resp_2.keys)
    if key_resp_2.keys != None:  # we had a response
        trials.addData('key_resp_2.rt', key_resp_2.rt)
    trials.addData('key_resp_2.started', key_resp_2.tStartRefresh)
    trials.addData('key_resp_2.stopped', key_resp_2.tStopRefresh)
    # the Routine "WaitForNextTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 3.0 repeats of 'trials'


# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
