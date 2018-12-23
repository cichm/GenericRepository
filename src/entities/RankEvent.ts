import { GameId, GamerEvent, GamerId, NewsletterId } from '../index';

export class RankEvent {
    private category: 'GameVotes' | 'ReviewVotes' | 'UserVotes' | 'UserEvents';
    private eventType: GamerEvent['type'];
    private newsletterId?: NewsletterId;
    private gameId?: GameId;
    private voterId?: GamerId;

    constructor(category: 'GameVotes' | 'ReviewVotes' | 'UserVotes' | 'UserEvents', eventType: GamerEvent['type'], newsletterId: NewsletterId, gameId: GameId, voterId: GamerId) {
        this.category = category;
        this.eventType = eventType;
        this.newsletterId = newsletterId;
        this.gameId = gameId;
        this.voterId = voterId;
    }
}