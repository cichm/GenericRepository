import * as input from './input'
import { TypeOf } from 'io-ts';
import { GamerEvent as GamerEventIo } from './entities/Events';

export type GamerId = TypeOf<typeof input.GamerId>
export type GameId = TypeOf<typeof input.GameId>
export type NewsletterId = TypeOf<typeof input.NewsletterId>

export type GamerEvent = TypeOf<typeof GamerEventIo>