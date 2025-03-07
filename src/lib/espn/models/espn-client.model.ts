import { Article } from '../../espn-client/models/article-type.model';
import { FreeAgent } from '../../espn-client/models/free-agent.model';
import { IdAttributesNumber, IdAttributesString } from '../../espn-client/models/id-attributes.model';
import { TeamRoster } from '../../espn-client/models/team-roster.model';
import { TRANSACTION } from '../../espn-client/models/transaction.const';
import { LEAGUE_COMMUNICATION_TOPIC, SCHEDULE_WINNER } from './espn-client.const';

export type LeagueCommunicationTopic = typeof LEAGUE_COMMUNICATION_TOPIC[keyof typeof LEAGUE_COMMUNICATION_TOPIC];

export type ScheduleWinnerType = typeof SCHEDULE_WINNER[keyof typeof SCHEDULE_WINNER];

export type TransactionType = typeof TRANSACTION[keyof typeof TRANSACTION];

export type LineupAttributes = Pick<IdAttributesNumber, 'id' | 'parentId'> & {
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
  type: LeagueCommunicationTopic;
};

export type LeagueCommTopicMsgEntity = Pick<IdAttributesString, 'id'> &
  Pick<IdAttributesNumber, 'messageTypeId' | 'targetId' | 'topicId'> & {
    to: number;
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
  winner: ScheduleWinnerType;
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
  name: string;
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

export type Team = Omit<TeamAttributes, 'teamId' | 'rosterForCurrentScoringPeriod'>;
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

export interface PlayerNewsFeed {
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
  published: string;
  type: Article;
  byline?: string | null;
  images?: ImagesEntity[] | null;
  links: {
    mobile?: {
      href: string;
    };
    web?: {
      href: string;
    };
  };
};

export type ImagesEntity = {
  name: string;
  width: number;
  alt?: string | null;
  caption?: string | null;
  id: number;
  credit: string;
  type: string;
  url: string;
  height: number;
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
