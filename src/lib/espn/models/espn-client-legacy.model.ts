/* eslint-disable @typescript-eslint/no-namespace */
/**
 * @deprecated
 */
export namespace LegacyEspnClient {
  export enum PlayerInjuryStatus {
    Active = 'ACTIVE',
    Probable = 'PROBABLE',
    Ques = 'QUESTIONABLE',
    NotStarting = 'NOTSTARTING',
    Starting = 'STARTING',
    D = 'DOUBTFUL',
    O = 'OUT',
    IR = 'INJURY_RESERVE',
    DTD = 'DAY_TO_DAY',
    DL7 = 'SEVEN_DAY_DL',
    DL10 = 'TEN_DAY_DL',
    DL15 = 'FIFTEEN_DAY_DL',
    DL60 = 'SIXTY_DAY_DL',
    Brv = 'BEREAVEMENT',
    Pat = 'PATERNITY',
    SUS = 'SUSPENSION',
  }

  export enum GameStatusTypeId {
    Scheduled = '1',
    InProgress = '2',
    Final = '3',
    Cancelled = '5',
    Delayed = '7',
    EndOfPeriod = '22',
    FirstHalf = '25',
    Halftime = '23',
    FullTime = '28',
  }

  // {PREGAME:"1",INGAME:"2",COMPLETE:"3",FORFEIT:"4",CANCELLED:"5",POSTPONED:"6",DELAYED:"7",SUSPENDED:"8",RAINDELAY:"17",END_PERIOD:"21",END_PERIOD_ALT:"22",HALFTIME:"23",OVERTIME:"24"}

  export enum GameStatusName {
    Scheduled = 'STATUS_SCHEDULED',
    FirstHalf = 'STATUS_FIRST_HALF',
    Halftime = 'STATUS_HALFTIME',
    SecondHalf = 'STATUS_SECOND_HALF',
    InProgress = 'STATUS_IN_PROGRESS',
    InProgressAlt = 'STATUS_IN_PROGRESS_2',
    RainDelay = 'STATUS_RAIN_DELAY',
    Postponed = 'STATUS_POSTPONED',
    Canceled = 'STATUS_CANCELED',
    Delayed = 'STATUS_DELAYED',
    EndOfPeriod = 'STATUS_END_PERIOD',
    FullTime = 'STATUS_FULL_TIME',
    Final = 'STATUS_FINAL',
    FinalPenalties = 'STATUS_FINAL_PEN',
    PreFight = 'STATUS_PRE_FIGHT',
    FightersIntro = 'STATUS_FIGHTERS_INTRODUCTION',
    FightersWalking = 'STATUS_FIGHTERS_WALKING',
    EndOfFight = 'STATUS_END_OF_FIGHT',
    EndOfRound = 'STATUS_END_OF_ROUND',
    TBD = 'STATUS_TBD',
    Uncontested = 'STATUS_UNCONTESTED',
    Abandoned = 'STATUS_ABANDONED',
    Forfeit = 'STATUS_FORFEIT',
  }

  export enum FastCastSeasonType {
    Preseason = '1',
    Regular = '2',
    Postseason = '3',
    Offseason = '4',
  }

  export enum FastCastGameStatus {
    Postgame = 'post',
    Pregame = 'pre',
    InProgress = 'in',
  }

  export enum Sport {
    Baseball = '1',
    Football = '20',
    Soccer = '600',
    Basketball = '40',
    Hockey = '70',
  }

  export enum LeagueId {
    MLB = 10,
    NCAAF = 23,
    NFL = 28,
    NBA = 46,
    NHL = 90,
  }

  export enum FreeAgentAvailabilityStatus {
    FreeAgent = 'FREEAGENT',
    Waivers = 'WAIVERS',
    OnTeam = 'ONTEAM',
  }

  export enum ScheduleWinner {
    HOME = 'HOME',
    AWAY = 'AWAY',
    UNDECIDED = 'UNDECIDED',
  }

  export enum TransactionType {
    Add = 'ADD',
    Drop = 'DROP',
    Waiver = 'WAIVER',
    Lineup = 'LINEUP',
    Roster = 'ROSTER',
  }

  export enum FootballPosition {
    POS0,
    QB,
    RB,
    WR,
    TE,
    K,
    POS6,
    P,
    POS8,
    DT,
    DE,
    LB,
    CB,
    S,
    HC,
    TQB,
    DST,
    EDR,
  }

  interface IdAttributes<T> {
    defaultPositionId: T;
    externalId: T;
    fromLineupSlotId: T;
    fromTeamId: T;
    id: T;
    lineupSlotId: T;
    matchupPeriodId: T;
    memberId: T;
    messageTypeId: T;
    parentId: T;
    playerId: T;
    proTeamId: T;
    scoringPeriodId: T;
    seasonId: T;
    statSplitTypeId: T;
    targetId: T;
    teamId: T;
    toLineupSlotId: T;
    topicId: T;
    toTeamId: T;
    uid: T;
  }

  type IdAttributesString = IdAttributes<string>;
  type IdAttributesNumber = IdAttributes<number>;

  type LineupAttributes = Pick<IdAttributesNumber, 'id' | 'parentId'> & {
    abbrev: string;
    bench: boolean;
    eligiblePositions: number[];
    lineupSlotEligible: boolean;
    name: string;
    starter: boolean;
    displayOrder: number;
    active: boolean;
  };

  export type LineupEntity = LineupAttributes;
  export type LineupEntityMap = Record<number, LineupEntity>;

  export type League = Pick<IdAttributesNumber, 'id' | 'scoringPeriodId' | 'seasonId'> & {
    schedule: ScheduleEntity[];
    status: LeagueStatus;
    settings: LeagueSettings;
    teams: Team[];
    players: FreeAgent[];
    communication: LeagueComm;
    transactions: LeagueTransaction[];
  };

  export type LeagueTransaction = Pick<IdAttributesString, 'id' | 'memberId'> &
    Pick<IdAttributesNumber, 'id' | 'teamId'> & {
      bidAmount: number;
      executionType: 'PROCESS' | 'CANCEL';
      isActingAsTeamOwner: boolean;
      isLeagueManager: boolean;
      isPending: boolean;
      items?: LeagueTransactionEntity[] | null;
      proposedDate: number;
      rating: number;
      scoringPeriodId: number;
      status: 'EXECUTED' | 'CANCELED';
      type: TransactionType;
      relatedTransactionId?: string | null;
      processDate?: number | null;
    };

  export type LeagueTransactionEntity = Pick<
    IdAttributesNumber,
    'playerId' | 'fromLineupSlotId' | 'fromTeamId' | 'toLineupSlotId' | 'toTeamId'
  > & {
    isKeeper: boolean;
    overallPickNumber: number;
    type: TransactionType;
  };

  export type LeagueComm = { topics: LeagueCommTopicEntity[] };

  export type LeagueCommTopicEntity = Pick<IdAttributesString, 'id'> & {
    date: number;
    messages: LeagueCommTopicMsgEntity[];
    type: 'ACTIVITY_TRANSACTIONS' | 'ACTIVITY_SETTINGS';
  };

  export type LeagueCommTopicMsgEntity = Pick<IdAttributesString, 'id'> &
    Pick<IdAttributesNumber, 'messageTypeId' | 'targetId' | 'topicId'> & {
      to: number; // to teamId
    };

  export type LeagueStatus = { firstScoringPeriod: number; finalScoringPeriod: number };
  export type ScheduleSettings = { matchupPeriodCount: number; playoffMatchupPeriodLength: number };
  export type LeagueRosterSettings = { positionLimits: Record<string, number>; lineupSlotCounts: Record<string, number> };

  export interface LeagueSettings {
    name: string;
    rosterSettings: LeagueRosterSettings;
    scheduleSettings: ScheduleSettings;
  }

  type ScheduleAttributes = Pick<IdAttributesNumber, 'id' | 'matchupPeriodId'> & {
    home: ScheduleTeam;
    away: ScheduleTeam;
    winner: ScheduleWinner;
    teams?: ScheduleTeam[];
  };

  export type ScheduleEntity = ScheduleAttributes;

  export type BaseballLeague = Omit<League, 'teams'> & { teams: BaseballTeam[] };
  export type FootballLeague = Omit<League, 'teams'> & { teams: FootballTeam[] };

  type TeamAttributes = Pick<IdAttributesNumber, 'id' | 'teamId'> & {
    totalPoints: number;
    totalPointsLive: number;
    totalProjectedPointsLive: number;
    rosterForCurrentScoringPeriod: TeamRoster;
    abbrev: string;
    location: string;
    nickname: string;
    roster: TeamRoster;
    points: number;
    logo: string;
    playoffSeed: number;
    draftDayProjectedRank: number;
    currentProjectedRank: number;
    rankCalculatedFinal: number;
    pointsByStat: Record<number, number>;
    valuesByStat: Record<number, number>;
  };

  export type Team = Omit<TeamAttributes, 'teamId' | 'totalPoints' | 'totalPointsLive' | 'rosterForCurrentScoringPeriod'>;
  export type BaseballTeam = Team & { record: string };
  export type FootballTeam = Team & { record: TeamRecordEntity };

  export type ScheduleTeam = Pick<TeamAttributes, 'teamId' | 'totalPoints' | 'rosterForCurrentScoringPeriod'> & {
    totalProjectedPointsLive?: number;
    totalPointsLive?: number;
    cumulativeScore: TeamCumulativeScore;
  };

  type CumulativeScoreAttributes = 'wins' | 'lossses' | 'ties';
  export type TeamCumulativeScore = { [key in CumulativeScoreAttributes]: number };

  type TeamRecordEntityAttributes = 'away' | 'division' | 'home' | 'overall';
  export type TeamRecordEntity = { [prop in TeamRecordEntityAttributes]: RecordEntity };

  type RecordEntityAttributes = 'gamesBack' | 'losses' | 'percentage' | 'pointsAgainst' | 'pointsFor' | 'streakLength' | 'ties' | 'wins';
  export type RecordEntity = { [prop in RecordEntityAttributes]: number } & { streakType: string };

  export type TeamRoster = { entries: TeamRosterEntry[] };
  export type TeamRosterEntry = Pick<IdAttributesNumber, 'playerId' | 'lineupSlotId'> & { playerPoolEntry?: PlayerEntry };

  export type PlayerEntry = Pick<IdAttributesNumber, 'id'> & {
    player: PlayerInfo;
    ratings: PlayerRatings;
    appliedStatTotal: number;
  };

  export type PlayerInfo = Pick<IdAttributesNumber, 'id' | 'proTeamId' | 'playerId' | 'defaultPositionId'> & {
    fullName: string;
    lastNewsDate: number;
    injured: boolean;
    injuryStatus: PlayerInjuryStatus;
    ownership: PlayerOwnership;
    outlooks?: PlayerOutlooksMap;
    eligibleSlots: number[];
    stats?: PlayerStatsYear[];
    starterStatusByProGame: GameStatus;
  };

  export type FreeAgentEntry = PlayerEntry;
  export type FreeAgent = FreeAgentEntry;

  export type PlayerOutlooks = Record<string, string>;
  export type PlayerOutlooksMap = { outlooksByWeek?: PlayerOutlooks };

  export type GameStatus = Record<number, PlayerInjuryStatus>;

  type PlayerOwnershipAttributes = 'averageDraftPosition' | 'percentChange' | 'percentOwned' | 'percentStarted';
  export type PlayerOwnership = { [prop in PlayerOwnershipAttributes]: number };

  type PlayerRatingsAttributes = 'positionalRanking' | 'totalRanking' | 'totalRating';
  export type PlayerRatingsEntity = { [prop in PlayerRatingsAttributes]: number };

  export type PlayerRatings = Record<number, PlayerRatingsEntity>;
  export type FreeAgentPlayerInfo = Omit<PlayerInfo, 'playerId'>;

  export type PlayerStatsYear = Pick<IdAttributesString, 'id' | 'externalId'> &
    Pick<IdAttributesNumber, 'seasonId' | 'statSplitTypeId' | 'scoringPeriodId'> & {
      stats: PlayerStatsEntity;
      appliedAverage: number | null;
      appliedTotal: number | null;
      appliedTotalCeiling: number | null;
    };

  export type PlayerStatsEntity = Record<number, number>;
  export type PlayerStatsEntityMap = Record<string, PlayerStatsEntity>;
  export type PlayerStatsByYearMap = Record<string, PlayerStatsYear>;

  export interface PlayerNews {
    timestamp: string;
    resultsOffset: number;
    status: string;
    resultsLimit: number;
    resultsCount: number;
    feed: PlayerNewsFeedEntity[];
  }

  export type PlayerNewsFeedEntity = Pick<IdAttributesNumber, 'id'> & {
    lastModified: string;
    headline: string;
    story: string;
  };

  export type EventList = { events: EventEntity[] };

  export type EventEntity = Pick<IdAttributesString, 'id' | 'uid'> & {
    date: string;
    summary: string;
    percentComplete: number;
    competitors: Competitor[];
    fullStatus: FullEventStatusEntity;
  };

  export interface FullEventStatusEntity {
    clock: number;
    displayClock: string;
    period: number;
    type: EventStatusTypeEntity;
    halfInning: number;
    periodPrefix: string;
  }

  export type EventStatusTypeEntity = Pick<IdAttributesString, 'id'> & {
    name: string;
    state: string;
    completed: boolean;
    description: string;
    detail: string;
    shortDetail: string;
  };

  export type Competitor = Pick<IdAttributesString, 'id'> & {
    homeAway: string;
    score: number | string;
    record: string;
    abbreviation: string;
    winner: boolean;
    name: string;
  };

  export interface Error {
    messages: string[] | null;
    details: ErrorDetails[] | null;
  }

  export interface ErrorDetails {
    message: string;
    shortMessage: string;
    resolution?: null;
    type: string;
    metaData?: null;
  }

  export interface PaginatedFilter {
    players: PlayerFilterEntity;
  }

  export interface PlayerFilterEntity {
    filterStatus: FilterValue<string>;
    filterSlotIds?: FilterValue<number>;
    filterStatsForTopScoringPeriodIds?: FilterStatsForTopScoringPeriodIds;
    filterRanksForScoringPeriodIds?: FilterValue<number>;
    sortPercOwned: SortMetaData;
    sortStatId?: SortMetaData & { additionalValue: string };
    sortDraftRanks?: SortMetaData;
    limit: number;
    offset: number;
  }
}
export interface SortMetaData {
  sortPriority: number;
  sortAsc: boolean;
  value: string | number | null;
}

export type FilterValue<T> = {
  value: T[];
};

export interface FilterStatsForTopScoringPeriodIds {
  value: number;
  additionalValue: string[];
}
