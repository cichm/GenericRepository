// importing mongoClient to connect at mongodb
import { MongoClient } from 'mongodb';

//importing Hero classes
import { Gamer } from "./src/entities/Gamer";
import { GamerRepository } from "./src/repositories/GamerRepository";
import {GamerId, NewsletterId} from "./src";
import { RankEvent } from "./src/entities/RankEvent";

// creating a function that execute self runs
(async () => {
    // connecting at mongoClient
    const connection = await MongoClient.connect('mongodb://localhost');
    const db = connection.db('gamers');

    const rankEvent = new RankEvent('GameVotes', 'GamerCreated', '8ewdijfosxkln', 'edfhioknsxs', '8u9ewdfijosx');
    const gamerId: GamerId = '9780usrew3ijo';
    const gamer = new Gamer(gamerId, [gamerId], [rankEvent]);

    // initializing the repository
    const repository = new GamerRepository(db, 'players');

    // call create method from generic repository
    const result = await repository.create(gamer);
    console.log(`object inserted with ${result ? 'success' : 'fail'}`);

    //call specific method from gamer class
    const count = await repository.countOfGamers();
    console.log(`the count of objects is ${count}`);

    /**
     * gamer inserted with success
     the count of gamers is 1
     */
    console.log(`object inserted with ${result ? 'success' : 'fail'}`)
})();