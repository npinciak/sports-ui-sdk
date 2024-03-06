import { EventStatusType } from '../../espn-client';

export type FullStatus = { type: FullStatusType };
export type FullStatusType = { id: EventStatusType; name: string; state: string; completed: boolean };
