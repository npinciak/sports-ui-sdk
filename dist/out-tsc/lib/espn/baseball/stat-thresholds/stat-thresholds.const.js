import { BaseballStat } from '../stats/mlb-stats.model';
import { StatThreshold } from './stat-thresholds.model';
export const OPS_THRESHOLD = {
    [StatThreshold.Excellent]: 1.0,
    [StatThreshold.Great]: 0.9,
    [StatThreshold.AboveAvg]: 0.8,
    [StatThreshold.Avg]: 0.71,
    [StatThreshold.BelowAvg]: 0.67,
    [StatThreshold.Poor]: 0.6,
    [StatThreshold.Awful]: 0.57,
};
export const WRC_THRESHOLD = {
    [StatThreshold.Excellent]: 105,
    [StatThreshold.Great]: 90,
    [StatThreshold.AboveAvg]: 75,
    [StatThreshold.Avg]: 65,
    [StatThreshold.BelowAvg]: 60,
    [StatThreshold.Poor]: 50,
    [StatThreshold.Awful]: 40,
};
export const WRAA_THRESHOLD = {
    [StatThreshold.Excellent]: 40,
    [StatThreshold.Great]: 20,
    [StatThreshold.AboveAvg]: 10,
    [StatThreshold.Avg]: 0,
    [StatThreshold.BelowAvg]: -5,
    [StatThreshold.Poor]: -10,
    [StatThreshold.Awful]: -20,
};
export const WOBA_THRESHOLD = {
    [StatThreshold.Excellent]: 0.4,
    [StatThreshold.Great]: 0.37,
    [StatThreshold.AboveAvg]: 0.34,
    [StatThreshold.Avg]: 0.32,
    [StatThreshold.BelowAvg]: 0.31,
    [StatThreshold.Poor]: 0.3,
    [StatThreshold.Awful]: 0.29,
};
export const K9_THRESHOLD = {
    [StatThreshold.Excellent]: 10,
    [StatThreshold.Great]: 9,
    [StatThreshold.AboveAvg]: 8.2,
    [StatThreshold.Avg]: 7.7,
    [StatThreshold.BelowAvg]: 7.0,
    [StatThreshold.Poor]: 6.0,
    [StatThreshold.Awful]: 5.0,
};
export const KPCT_THRESHOLD = {
    [StatThreshold.Excellent]: 27,
    [StatThreshold.Great]: 24,
    [StatThreshold.AboveAvg]: 22,
    [StatThreshold.Avg]: 20,
    [StatThreshold.BelowAvg]: 17,
    [StatThreshold.Poor]: 15,
    [StatThreshold.Awful]: 13,
};
export const BB9_THRESHOLD = {
    [StatThreshold.Excellent]: 1.5,
    [StatThreshold.Great]: 1.9,
    [StatThreshold.AboveAvg]: 2.5,
    [StatThreshold.Avg]: 2.9,
    [StatThreshold.BelowAvg]: 3.2,
    [StatThreshold.Poor]: 3.5,
    [StatThreshold.Awful]: 4.0,
};
export const BBPCT_THRESHOLD = {
    [StatThreshold.Excellent]: 4.5,
    [StatThreshold.Great]: 5.5,
    [StatThreshold.AboveAvg]: 6.5,
    [StatThreshold.Avg]: 7.7,
    [StatThreshold.BelowAvg]: 8.0,
    [StatThreshold.Poor]: 8.5,
    [StatThreshold.Awful]: 9.0,
};
export const LOBPCT_THRESHOLD = {
    [StatThreshold.Excellent]: 80,
    [StatThreshold.Great]: 78,
    [StatThreshold.AboveAvg]: 75,
    [StatThreshold.Avg]: 72,
    [StatThreshold.BelowAvg]: 70,
    [StatThreshold.Poor]: 65,
    [StatThreshold.Awful]: 60,
};
export const FIP_THRESHOLD = {
    [StatThreshold.Excellent]: 3.2,
    [StatThreshold.Great]: 3.5,
    [StatThreshold.AboveAvg]: 3.8,
    [StatThreshold.Avg]: 4.2,
    [StatThreshold.BelowAvg]: 4.4,
    [StatThreshold.Poor]: 4.7,
    [StatThreshold.Awful]: 5.0,
};
export const STAT_THRESHOLD_MAP = {
    [BaseballStat.wRC]: WRC_THRESHOLD,
    [BaseballStat.wRAA]: WRAA_THRESHOLD,
    [BaseballStat.wOBA]: WOBA_THRESHOLD,
    [BaseballStat.OPS]: OPS_THRESHOLD,
    [BaseballStat.K_9]: K9_THRESHOLD,
    [BaseballStat.LOB_PCT]: LOBPCT_THRESHOLD,
    [BaseballStat.fip]: FIP_THRESHOLD,
};
//# sourceMappingURL=stat-thresholds.const.js.map