import * as input from '../input';
import { literal, type, union } from 'io-ts';

export const GamerEvent = union([
    type({
        type: literal('GamerCreated'),
        payload: type({
            gamerId: input.GamerId,
            timestamp: input.Timestamp
        })
    })
]);
