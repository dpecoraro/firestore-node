import User from "../models/user";
import dbClient from "../infrastructure/database/fireStoreClient";
import { v4 as uuidv4 } from 'uuid';

export class UserRepository {
    constructor() { }

    private readonly userDB = dbClient.collection('users');

    get(id: string): Promise<User> {
        return this.userDB
            .where('id', '==', `${id}`)
            .get();
    }

    put(user: User): void {
        let doc_ref = this.userDB.doc(uuidv4());
        let sucess = doc_ref.set(user);

        console.log(sucess);
    }

}