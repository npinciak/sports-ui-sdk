export const FOOTBALL_LINEUP_MAP = {
    0: {
        abbrev: 'QB',
        active: true,
        bench: false,
        displayOrder: 1,
        eligiblePositions: [1],
        id: 0,
        lineupSlotEligible: true,
        name: 'Quarterback',
        parentId: 7,
        starter: true,
    },
    1: {
        abbrev: 'TQB',
        active: true,
        bench: false,
        displayOrder: 2,
        eligiblePositions: [15],
        id: 1,
        lineupSlotEligible: true,
        name: 'Team Quarterback',
        parentId: 7,
        starter: true,
    },
    2: {
        abbrev: 'RB',
        active: true,
        bench: false,
        displayOrder: 3,
        eligiblePositions: [2],
        id: 2,
        lineupSlotEligible: true,
        name: 'Running Back',
        parentId: 3,
        starter: true,
    },
    3: {
        abbrev: 'RB/WR',
        active: true,
        bench: false,
        displayOrder: 4,
        eligiblePositions: [2, 3],
        id: 3,
        lineupSlotEligible: true,
        name: 'Running Back/Wide Receiver',
        parentId: 7,
        starter: true,
    },
    4: {
        abbrev: 'WR',
        active: true,
        bench: false,
        displayOrder: 5,
        eligiblePositions: [3],
        id: 4,
        lineupSlotEligible: true,
        name: 'Wide Receiver',
        parentId: 5,
        starter: true,
    },
    5: {
        abbrev: 'WR/TE',
        active: true,
        bench: false,
        displayOrder: 6,
        eligiblePositions: [3, 4],
        id: 5,
        lineupSlotEligible: true,
        name: 'Wide Receiver/Tight End',
        parentId: 7,
        starter: true,
    },
    6: {
        abbrev: 'TE',
        active: true,
        bench: false,
        displayOrder: 7,
        eligiblePositions: [4],
        id: 6,
        lineupSlotEligible: true,
        name: 'Tight End',
        parentId: 5,
        starter: true,
    },
    7: {
        abbrev: 'OP',
        active: true,
        bench: false,
        displayOrder: 9,
        eligiblePositions: [1, 2, 3, 4],
        id: 7,
        lineupSlotEligible: true,
        name: 'Offensive Player Utility',
        parentId: 25,
        starter: true,
    },
    8: {
        abbrev: 'DT',
        active: true,
        bench: false,
        displayOrder: 10,
        eligiblePositions: [9],
        id: 8,
        lineupSlotEligible: true,
        name: 'Defensive Tackle',
        parentId: 11,
        starter: true,
    },
    9: {
        abbrev: 'DE',
        active: true,
        bench: false,
        displayOrder: 11,
        eligiblePositions: [10],
        id: 9,
        lineupSlotEligible: true,
        name: 'Defensive End',
        parentId: 11,
        starter: true,
    },
    10: {
        abbrev: 'LB',
        active: true,
        bench: false,
        displayOrder: 12,
        eligiblePositions: [11],
        id: 10,
        lineupSlotEligible: true,
        name: 'Linebacker',
        parentId: 11,
        starter: true,
    },
    11: {
        abbrev: 'DL',
        active: true,
        bench: false,
        displayOrder: 14,
        eligiblePositions: [9, 10],
        id: 11,
        lineupSlotEligible: true,
        name: 'Defensive Line',
        parentId: 15,
        starter: true,
    },
    12: {
        abbrev: 'CB',
        active: true,
        bench: false,
        displayOrder: 15,
        eligiblePositions: [12],
        id: 12,
        lineupSlotEligible: true,
        name: 'Cornerback',
        parentId: 14,
        starter: true,
    },
    13: {
        abbrev: 'S',
        active: true,
        bench: false,
        displayOrder: 16,
        eligiblePositions: [13],
        id: 13,
        lineupSlotEligible: true,
        name: 'Safety',
        parentId: 14,
        starter: true,
    },
    14: {
        abbrev: 'DB',
        active: true,
        bench: false,
        displayOrder: 17,
        eligiblePositions: [12, 13],
        id: 14,
        lineupSlotEligible: true,
        name: 'Defensive Back',
        parentId: 15,
        starter: true,
    },
    15: {
        abbrev: 'DP',
        active: true,
        bench: false,
        displayOrder: 18,
        eligiblePositions: [9, 10, 11, 12, 13],
        id: 15,
        lineupSlotEligible: true,
        name: 'Defensive Player Utility',
        parentId: 25,
        starter: true,
    },
    16: {
        abbrev: 'D/ST',
        active: true,
        bench: false,
        displayOrder: 19,
        eligiblePositions: [16],
        id: 16,
        lineupSlotEligible: true,
        name: 'Team Defense/Special Teams',
        parentId: 25,
        starter: true,
    },
    17: {
        abbrev: 'K',
        active: true,
        bench: false,
        displayOrder: 20,
        eligiblePositions: [5],
        id: 17,
        lineupSlotEligible: true,
        name: 'Place Kicker',
        parentId: 7,
        starter: true,
    },
    18: {
        abbrev: 'P',
        active: true,
        bench: false,
        displayOrder: 21,
        eligiblePositions: [7],
        id: 18,
        lineupSlotEligible: true,
        name: 'Punter',
        parentId: 7,
        starter: true,
    },
    19: {
        abbrev: 'HC',
        active: true,
        bench: false,
        displayOrder: 22,
        eligiblePositions: [14],
        id: 19,
        lineupSlotEligible: true,
        name: 'Head Coach',
        parentId: 25,
        starter: true,
    },
    20: {
        abbrev: 'BE',
        active: false,
        bench: true,
        displayOrder: 23,
        eligiblePositions: [1, 2, 3, 4, 5, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17],
        id: 20,
        lineupSlotEligible: true,
        name: 'Bench',
        parentId: 25,
        starter: false,
    },
    21: {
        abbrev: 'IR',
        active: false,
        bench: false,
        displayOrder: 24,
        eligiblePositions: [1, 2, 3, 4, 5, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17],
        id: 21,
        lineupSlotEligible: true,
        name: 'Injured Reserve',
        parentId: 25,
        starter: false,
    },
    22: {
        abbrev: 'INV',
        active: false,
        bench: false,
        displayOrder: 25,
        eligiblePositions: [],
        id: 22,
        lineupSlotEligible: false,
        name: 'Invalid Player',
        parentId: 25,
        starter: false,
    },
    23: {
        abbrev: 'FLEX',
        active: true,
        bench: false,
        displayOrder: 8,
        eligiblePositions: [2, 3, 4],
        id: 23,
        lineupSlotEligible: true,
        name: 'Flex',
        parentId: 7,
        starter: true,
    },
    24: {
        abbrev: 'EDR',
        active: true,
        bench: false,
        displayOrder: 13,
        eligiblePositions: [17],
        id: 24,
        lineupSlotEligible: true,
        name: 'Edge Rusher',
        parentId: 15,
        starter: true,
    },
    25: {
        abbrev: 'ALL',
        active: true,
        bench: false,
        displayOrder: 0,
        eligiblePositions: [1, 2, 3, 4, 5, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17],
        id: 25,
        lineupSlotEligible: false,
        name: 'All Players',
        parentId: 25,
        starter: false,
    },
};
export const FOOTBALL_LINEUP_SLOT_LIST = [
    0 /* FootballLineupSlot.QB */,
    1 /* FootballLineupSlot.TQB */,
    2 /* FootballLineupSlot.RB */,
    3 /* FootballLineupSlot.RBORWR */,
    4 /* FootballLineupSlot.WR */,
    5 /* FootballLineupSlot.WRORTE */,
    6 /* FootballLineupSlot.TE */,
    7 /* FootballLineupSlot.OP */,
    8 /* FootballLineupSlot.DT */,
    9 /* FootballLineupSlot.DE */,
    10 /* FootballLineupSlot.LB */,
    11 /* FootballLineupSlot.DL */,
    12 /* FootballLineupSlot.CB */,
    13 /* FootballLineupSlot.S */,
    14 /* FootballLineupSlot.DB */,
    15 /* FootballLineupSlot.DP */,
    16 /* FootballLineupSlot.DST */,
    17 /* FootballLineupSlot.K */,
    18 /* FootballLineupSlot.P */,
    19 /* FootballLineupSlot.HC */,
    20 /* FootballLineupSlot.BE */,
    21 /* FootballLineupSlot.IR */,
    22 /* FootballLineupSlot.INV */,
    23 /* FootballLineupSlot.FLEX */,
    24 /* FootballLineupSlot.EDR */,
    25 /* FootballLineupSlot.ALL */,
];
export const BASIC_FOOTBALL_LINEUP_SLOT_LIST = [
    0 /* FootballLineupSlot.QB */,
    2 /* FootballLineupSlot.RB */,
    4 /* FootballLineupSlot.WR */,
    23 /* FootballLineupSlot.FLEX */,
    17 /* FootballLineupSlot.K */,
    16 /* FootballLineupSlot.DST */,
];
export const BASIC_FOOTBALL_LINEUP_SLOT_FILTER_OPTIONS = BASIC_FOOTBALL_LINEUP_SLOT_LIST.map(s => ({
    value: s,
    label: FOOTBALL_LINEUP_MAP[s].name,
}));
//# sourceMappingURL=lineup.const.js.map