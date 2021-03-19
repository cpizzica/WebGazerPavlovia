% load the file
filename = 'jig_TestWebGazer_2021-03-16_17h05.03.329.csv';
T = readtable(filename);

% Get scale factors to compute degrees of visual angle
viewingDistanceInches = T.distance(1);
screenHeightInches = T.height(1);
screenHeightPixels = T.win_height(1);
screenWidthPixels = T.win_width(1);
pixelsPerDegree = screenHeightPixels / ...
    (2 * rad2deg(atan2(screenHeightInches/2, viewingDistanceInches)));
         
% Convert target locations to degrees vis ang relative to 0,0 at
%   the center of the screen
targetOrder = T.RandomizePosition_thisIndex;
uniqueTargets = nonanunique(targetOrder);
numTargets = length(uniqueTargets);
targetLocations = nans(numTargets, 2);
xys = unique(table2array(T(:, {'RandomizePosition_thisIndex' 'xpos', 'ypos'})), 'rows');
xys = xys(isfinite(xys(:,1)), :);
targets = nans(numTargets, 2);
for tt = 1:numTargets
    targets(tt,:) = [ ...
        xys(tt,2).*T.win_height(1)./pixelsPerDegree, ...
        xys(tt,3).*T.win_height(1)./pixelsPerDegree];
end

% Put gaze data in cell array.
%   Rows are "trials"
%   Columns are targets in order listed in gazeConditions
%   Data are <t, x, y> where t is time in ms; 
%       x,y are given in pixels and coverted to degrees vis ang
gazeData = {};
thisTrial = cell(1, numTargets);
for ii = 1:size(T, 1)
    if isempty(T.gazeArray{ii})
        gazeData = cat(1, gazeData, thisTrial);
    else
        vals = reshape(str2num(T.gazeArray{ii}), 3, [])';
         thisTrial{uniqueTargets==targetOrder(ii)} = cat(2, vals(:,1), ...
             (vals(:,2) - T.innerWidth(1)/2)./pixelsPerDegree, ...
             (T.innerHeight(1)/2 - vals(:,3))./pixelsPerDegree);
    end
end
numTrials = size(gazeData, 1);

%% Show raw horizontal/vertical eye traces
figure

% plot all raw traces, get median/IQR RT
for tt = 1:numTargets    
    for xx = 1:2 % horizontal, vertical eye positions
        subplot(numTargets,2,(tt-1)*2+xx); cla reset; hold on;
        set(gca, 'FontSize', 12)
        plot([0 2000], targets(tt, [xx xx]), 'r-', 'LineWidth', 2)
        for ii = 1:numTrials
            plot(gazeData{ii,tt}(:,1), gazeData{ii,tt}(:,xx+1), 'k-');
        end
        axis([0 2000 -10 10]);
    end
end

subplot(numTargets, 2, 5);
ylabel('Horizontal eye position (deg visual angle)');
subplot(numTargets, 2, 6);
ylabel('Vertical eye position (deg visual angle)');
subplot(numTargets, 2, numTargets*2-1);
xlabel('Time from target onset (ms)');
subplot(numTargets, 2, numTargets*2);
xlabel('Time from target onset (ms)');

%% Show fixation locations all together
figure
clf; hold on;
plot([-10 10], [0 0], 'k:')
plot([0 0], [-10 10], 'k:');
set(gca, 'FontSize', 12);
xlabel('X Position (deg visual angle)');
ylabel('Y Position (deg visual angle)');
% plot all raw traces, get median/IQR RT
grays = linspace(0,0.9,numTrials)'*ones(1,3);
for tt = 1:numTargets
    plot(targets(tt, 1), targets(tt, 2), 'ro', 'MarkerFaceColor', 'r', ...
        'MarkerSize', 10);
    for ii = 1:numTrials
        plot(nanmedian(gazeData{ii,tt}(end-50:end,2)), ...
            nanmedian(gazeData{ii,tt}(end-50:end,3)), ...
            'o', 'Color', grays(ii,:), ...
            'MarkerFaceColor', grays(ii,:), 'MarkerSize', 5);
    end
end

