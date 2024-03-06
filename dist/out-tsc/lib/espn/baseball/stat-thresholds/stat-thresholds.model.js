export var StatThreshold;
(function (StatThreshold) {
    StatThreshold[StatThreshold["Excellent"] = 0] = "Excellent";
    StatThreshold[StatThreshold["Great"] = 1] = "Great";
    StatThreshold[StatThreshold["AboveAvg"] = 2] = "AboveAvg";
    StatThreshold[StatThreshold["Avg"] = 3] = "Avg";
    StatThreshold[StatThreshold["BelowAvg"] = 4] = "BelowAvg";
    StatThreshold[StatThreshold["Poor"] = 5] = "Poor";
    StatThreshold[StatThreshold["Awful"] = 6] = "Awful";
})(StatThreshold || (StatThreshold = {}));
export const StatThresholdColors = {
    [StatThreshold.Excellent]: '#00876c',
    [StatThreshold.Great]: '#71a879',
    [StatThreshold.AboveAvg]: '#b6c794',
    [StatThreshold.Avg]: '#f4e8bc',
    [StatThreshold.BelowAvg]: '#eab780',
    [StatThreshold.Poor]: '#e2805b',
    [StatThreshold.Awful]: '#d43d51',
};
export const StatThresholdClass = {
    [StatThreshold.Excellent]: 'excellent',
    [StatThreshold.Great]: 'great',
    [StatThreshold.AboveAvg]: 'above-avg',
    [StatThreshold.Avg]: 'avg',
    [StatThreshold.BelowAvg]: 'below-avg',
    [StatThreshold.Poor]: 'poor',
    [StatThreshold.Awful]: 'awful',
};
export const StatThresholdLabel = {
    [StatThreshold.Excellent]: 'Excellent',
    [StatThreshold.Great]: 'Great',
    [StatThreshold.AboveAvg]: 'Above Avg',
    [StatThreshold.Avg]: 'Avg',
    [StatThreshold.BelowAvg]: 'Below Avg',
    [StatThreshold.Poor]: 'Poor',
    [StatThreshold.Awful]: 'Awful',
};
export const StatThresholdLabelByStatThreshold = {
    [StatThreshold.Excellent]: StatThresholdLabel[StatThreshold.Excellent],
    [StatThreshold.Great]: StatThresholdLabel[StatThreshold.Great],
    [StatThreshold.AboveAvg]: StatThresholdLabel[StatThreshold.AboveAvg],
    [StatThreshold.Avg]: StatThresholdLabel[StatThreshold.Avg],
    [StatThreshold.BelowAvg]: StatThresholdLabel[StatThreshold.BelowAvg],
    [StatThreshold.Poor]: StatThresholdLabel[StatThreshold.Poor],
    [StatThreshold.Awful]: StatThresholdLabel[StatThreshold.Awful],
};
export const StatThresholdClassByStatThreshold = {
    [StatThreshold.Excellent]: StatThresholdClass[StatThreshold.Excellent],
    [StatThreshold.Great]: StatThresholdClass[StatThreshold.Great],
    [StatThreshold.AboveAvg]: StatThresholdClass[StatThreshold.AboveAvg],
    [StatThreshold.Avg]: StatThresholdClass[StatThreshold.Avg],
    [StatThreshold.BelowAvg]: StatThresholdClass[StatThreshold.BelowAvg],
    [StatThreshold.Poor]: StatThresholdClass[StatThreshold.Poor],
    [StatThreshold.Awful]: StatThresholdClass[StatThreshold.Awful],
};
export const StatThresholdColorByStatThreshold = {
    [StatThreshold.Excellent]: StatThresholdColors[StatThreshold.Excellent],
    [StatThreshold.Great]: StatThresholdColors[StatThreshold.Great],
    [StatThreshold.AboveAvg]: StatThresholdColors[StatThreshold.AboveAvg],
    [StatThreshold.Avg]: StatThresholdColors[StatThreshold.Avg],
    [StatThreshold.BelowAvg]: StatThresholdColors[StatThreshold.BelowAvg],
    [StatThreshold.Poor]: StatThresholdColors[StatThreshold.Poor],
    [StatThreshold.Awful]: StatThresholdColors[StatThreshold.Awful],
};
//# sourceMappingURL=stat-thresholds.model.js.map