/* eslint-disable @typescript-eslint/no-namespace */
/**
 * @deprecated
 */
export var LegacyEspnClient;
(function (LegacyEspnClient) {
    let PlayerInjuryStatus;
    (function (PlayerInjuryStatus) {
        PlayerInjuryStatus["Active"] = "ACTIVE";
        PlayerInjuryStatus["Probable"] = "PROBABLE";
        PlayerInjuryStatus["Ques"] = "QUESTIONABLE";
        PlayerInjuryStatus["NotStarting"] = "NOTSTARTING";
        PlayerInjuryStatus["Starting"] = "STARTING";
        PlayerInjuryStatus["D"] = "DOUBTFUL";
        PlayerInjuryStatus["O"] = "OUT";
        PlayerInjuryStatus["IR"] = "INJURY_RESERVE";
        PlayerInjuryStatus["DTD"] = "DAY_TO_DAY";
        PlayerInjuryStatus["DL7"] = "SEVEN_DAY_DL";
        PlayerInjuryStatus["DL10"] = "TEN_DAY_DL";
        PlayerInjuryStatus["DL15"] = "FIFTEEN_DAY_DL";
        PlayerInjuryStatus["DL60"] = "SIXTY_DAY_DL";
        PlayerInjuryStatus["Brv"] = "BEREAVEMENT";
        PlayerInjuryStatus["Pat"] = "PATERNITY";
        PlayerInjuryStatus["SUS"] = "SUSPENSION";
    })(PlayerInjuryStatus = LegacyEspnClient.PlayerInjuryStatus || (LegacyEspnClient.PlayerInjuryStatus = {}));
    let GameStatusTypeId;
    (function (GameStatusTypeId) {
        GameStatusTypeId["Scheduled"] = "1";
        GameStatusTypeId["InProgress"] = "2";
        GameStatusTypeId["Final"] = "3";
        GameStatusTypeId["Cancelled"] = "5";
        GameStatusTypeId["Delayed"] = "7";
        GameStatusTypeId["EndOfPeriod"] = "22";
        GameStatusTypeId["FirstHalf"] = "25";
        GameStatusTypeId["Halftime"] = "23";
        GameStatusTypeId["FullTime"] = "28";
    })(GameStatusTypeId = LegacyEspnClient.GameStatusTypeId || (LegacyEspnClient.GameStatusTypeId = {}));
    // {PREGAME:"1",INGAME:"2",COMPLETE:"3",FORFEIT:"4",CANCELLED:"5",POSTPONED:"6",DELAYED:"7",SUSPENDED:"8",RAINDELAY:"17",END_PERIOD:"21",END_PERIOD_ALT:"22",HALFTIME:"23",OVERTIME:"24"}
    let GameStatusName;
    (function (GameStatusName) {
        GameStatusName["Scheduled"] = "STATUS_SCHEDULED";
        GameStatusName["FirstHalf"] = "STATUS_FIRST_HALF";
        GameStatusName["Halftime"] = "STATUS_HALFTIME";
        GameStatusName["SecondHalf"] = "STATUS_SECOND_HALF";
        GameStatusName["InProgress"] = "STATUS_IN_PROGRESS";
        GameStatusName["InProgressAlt"] = "STATUS_IN_PROGRESS_2";
        GameStatusName["RainDelay"] = "STATUS_RAIN_DELAY";
        GameStatusName["Postponed"] = "STATUS_POSTPONED";
        GameStatusName["Canceled"] = "STATUS_CANCELED";
        GameStatusName["Delayed"] = "STATUS_DELAYED";
        GameStatusName["EndOfPeriod"] = "STATUS_END_PERIOD";
        GameStatusName["FullTime"] = "STATUS_FULL_TIME";
        GameStatusName["Final"] = "STATUS_FINAL";
        GameStatusName["FinalPenalties"] = "STATUS_FINAL_PEN";
        GameStatusName["PreFight"] = "STATUS_PRE_FIGHT";
        GameStatusName["FightersIntro"] = "STATUS_FIGHTERS_INTRODUCTION";
        GameStatusName["FightersWalking"] = "STATUS_FIGHTERS_WALKING";
        GameStatusName["EndOfFight"] = "STATUS_END_OF_FIGHT";
        GameStatusName["EndOfRound"] = "STATUS_END_OF_ROUND";
        GameStatusName["TBD"] = "STATUS_TBD";
        GameStatusName["Uncontested"] = "STATUS_UNCONTESTED";
        GameStatusName["Abandoned"] = "STATUS_ABANDONED";
        GameStatusName["Forfeit"] = "STATUS_FORFEIT";
    })(GameStatusName = LegacyEspnClient.GameStatusName || (LegacyEspnClient.GameStatusName = {}));
    let FastCastSeasonType;
    (function (FastCastSeasonType) {
        FastCastSeasonType["Preseason"] = "1";
        FastCastSeasonType["Regular"] = "2";
        FastCastSeasonType["Postseason"] = "3";
        FastCastSeasonType["Offseason"] = "4";
    })(FastCastSeasonType = LegacyEspnClient.FastCastSeasonType || (LegacyEspnClient.FastCastSeasonType = {}));
    let FastCastGameStatus;
    (function (FastCastGameStatus) {
        FastCastGameStatus["Postgame"] = "post";
        FastCastGameStatus["Pregame"] = "pre";
        FastCastGameStatus["InProgress"] = "in";
    })(FastCastGameStatus = LegacyEspnClient.FastCastGameStatus || (LegacyEspnClient.FastCastGameStatus = {}));
    let Sport;
    (function (Sport) {
        Sport["Baseball"] = "1";
        Sport["Football"] = "20";
        Sport["Soccer"] = "600";
        Sport["Basketball"] = "40";
        Sport["Hockey"] = "70";
    })(Sport = LegacyEspnClient.Sport || (LegacyEspnClient.Sport = {}));
    let LeagueId;
    (function (LeagueId) {
        LeagueId[LeagueId["MLB"] = 10] = "MLB";
        LeagueId[LeagueId["NCAAF"] = 23] = "NCAAF";
        LeagueId[LeagueId["NFL"] = 28] = "NFL";
        LeagueId[LeagueId["NBA"] = 46] = "NBA";
        LeagueId[LeagueId["NHL"] = 90] = "NHL";
    })(LeagueId = LegacyEspnClient.LeagueId || (LegacyEspnClient.LeagueId = {}));
    let FreeAgentAvailabilityStatus;
    (function (FreeAgentAvailabilityStatus) {
        FreeAgentAvailabilityStatus["FreeAgent"] = "FREEAGENT";
        FreeAgentAvailabilityStatus["Waivers"] = "WAIVERS";
        FreeAgentAvailabilityStatus["OnTeam"] = "ONTEAM";
    })(FreeAgentAvailabilityStatus = LegacyEspnClient.FreeAgentAvailabilityStatus || (LegacyEspnClient.FreeAgentAvailabilityStatus = {}));
    let ScheduleWinner;
    (function (ScheduleWinner) {
        ScheduleWinner["HOME"] = "HOME";
        ScheduleWinner["AWAY"] = "AWAY";
        ScheduleWinner["UNDECIDED"] = "UNDECIDED";
    })(ScheduleWinner = LegacyEspnClient.ScheduleWinner || (LegacyEspnClient.ScheduleWinner = {}));
    let TransactionType;
    (function (TransactionType) {
        TransactionType["Add"] = "ADD";
        TransactionType["Drop"] = "DROP";
        TransactionType["Waiver"] = "WAIVER";
        TransactionType["Lineup"] = "LINEUP";
        TransactionType["Roster"] = "ROSTER";
    })(TransactionType = LegacyEspnClient.TransactionType || (LegacyEspnClient.TransactionType = {}));
    let FootballPosition;
    (function (FootballPosition) {
        FootballPosition[FootballPosition["POS0"] = 0] = "POS0";
        FootballPosition[FootballPosition["QB"] = 1] = "QB";
        FootballPosition[FootballPosition["RB"] = 2] = "RB";
        FootballPosition[FootballPosition["WR"] = 3] = "WR";
        FootballPosition[FootballPosition["TE"] = 4] = "TE";
        FootballPosition[FootballPosition["K"] = 5] = "K";
        FootballPosition[FootballPosition["POS6"] = 6] = "POS6";
        FootballPosition[FootballPosition["P"] = 7] = "P";
        FootballPosition[FootballPosition["POS8"] = 8] = "POS8";
        FootballPosition[FootballPosition["DT"] = 9] = "DT";
        FootballPosition[FootballPosition["DE"] = 10] = "DE";
        FootballPosition[FootballPosition["LB"] = 11] = "LB";
        FootballPosition[FootballPosition["CB"] = 12] = "CB";
        FootballPosition[FootballPosition["S"] = 13] = "S";
        FootballPosition[FootballPosition["HC"] = 14] = "HC";
        FootballPosition[FootballPosition["TQB"] = 15] = "TQB";
        FootballPosition[FootballPosition["DST"] = 16] = "DST";
        FootballPosition[FootballPosition["EDR"] = 17] = "EDR";
    })(FootballPosition = LegacyEspnClient.FootballPosition || (LegacyEspnClient.FootballPosition = {}));
})(LegacyEspnClient || (LegacyEspnClient = {}));
//# sourceMappingURL=espn-client-legacy.model.js.map