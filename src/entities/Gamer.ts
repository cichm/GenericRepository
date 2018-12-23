import { GamerId } from '../index';
import { RankEvent } from './RankEvent';

export class Gamer {
    private gamerId: GamerId;
    private mergedGamersId: GamerId[];
    private rankEvents: RankEvent[];

    constructor(gamerId: GamerId, mergedGamersId: GamerId[], rankEvents: RankEvent[]) {
        this.gamerId = gamerId;
        this.mergedGamersId = mergedGamersId;
        this.rankEvents = rankEvents;
    }
}
