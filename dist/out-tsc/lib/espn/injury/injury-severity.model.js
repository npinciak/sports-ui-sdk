import { PLAYER_INJURY_STATUS } from './injury-status.model';
export const INJURY_SEVERITY_COLOR = {
    Serious: '#cb0123',
    SemiSerious: '#E8B436',
    Positive: '#267851',
};
export const INJURY_SEVERITY_CLASS = {
    [0 /* InjurySeverity.Serious */]: 'text-red-600',
    [1 /* InjurySeverity.SemiSerious */]: 'text-yellow-400',
    [2 /* InjurySeverity.Positive */]: 'text-green-600',
};
export const INJURY_SEVERITY_COLOR_BY_INJURY_SEVERITY = {
    [0 /* InjurySeverity.Serious */]: INJURY_SEVERITY_COLOR.Serious,
    [1 /* InjurySeverity.SemiSerious */]: INJURY_SEVERITY_COLOR.SemiSerious,
    [2 /* InjurySeverity.Positive */]: INJURY_SEVERITY_COLOR.Positive,
};
export const INJURY_SEVERITY_CLASS_BY_INJURY_SEVERITY = {
    [0 /* InjurySeverity.Serious */]: INJURY_SEVERITY_CLASS[0 /* InjurySeverity.Serious */],
    [1 /* InjurySeverity.SemiSerious */]: INJURY_SEVERITY_CLASS[1 /* InjurySeverity.SemiSerious */],
    [2 /* InjurySeverity.Positive */]: INJURY_SEVERITY_CLASS[2 /* InjurySeverity.Positive */],
};
export const INJURY_SEVERITY_BY_INJURY_STATUS = {
    [PLAYER_INJURY_STATUS.Active]: 2 /* InjurySeverity.Positive */,
    [PLAYER_INJURY_STATUS.Probable]: 2 /* InjurySeverity.Positive */,
    [PLAYER_INJURY_STATUS.Ques]: 1 /* InjurySeverity.SemiSerious */,
    [PLAYER_INJURY_STATUS.NotStarting]: 0 /* InjurySeverity.Serious */,
    [PLAYER_INJURY_STATUS.Starting]: 2 /* InjurySeverity.Positive */,
    [PLAYER_INJURY_STATUS.D]: 0 /* InjurySeverity.Serious */,
    [PLAYER_INJURY_STATUS.O]: 0 /* InjurySeverity.Serious */,
    [PLAYER_INJURY_STATUS.IR]: 0 /* InjurySeverity.Serious */,
    [PLAYER_INJURY_STATUS.DTD]: 1 /* InjurySeverity.SemiSerious */,
    [PLAYER_INJURY_STATUS.DL7]: 0 /* InjurySeverity.Serious */,
    [PLAYER_INJURY_STATUS.DL10]: 0 /* InjurySeverity.Serious */,
    [PLAYER_INJURY_STATUS.DL15]: 0 /* InjurySeverity.Serious */,
    [PLAYER_INJURY_STATUS.DL60]: 0 /* InjurySeverity.Serious */,
    [PLAYER_INJURY_STATUS.Brv]: 0 /* InjurySeverity.Serious */,
    [PLAYER_INJURY_STATUS.Pat]: 0 /* InjurySeverity.Serious */,
    [PLAYER_INJURY_STATUS.SUS]: 0 /* InjurySeverity.Serious */,
    [PLAYER_INJURY_STATUS.UNKNOWN]: 2 /* InjurySeverity.Positive */,
};
export const INJURY_STATUS_FILTER = [
    { value: null, label: 'All' },
    { value: false, label: 'Healthy' },
    { value: true, label: 'IL-Eligibile' },
];
//# sourceMappingURL=injury-severity.model.js.map