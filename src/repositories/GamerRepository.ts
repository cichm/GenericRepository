import { BaseRepository } from "./base/BaseRepository";
import { Gamer } from "../entities/Gamer"

// now, we have all code implementation from BaseRepository
export class GamerRepository extends BaseRepository<Gamer>{

    // here, we can create all especific stuffs of Gamer Repository
    countOfGamers(): Promise<number> {
        return this._collection.count({})
    }
}
