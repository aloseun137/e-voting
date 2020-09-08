export interface Election {
    id: number;
    name: string;
    start_time: string;
    end_time: string;
}
// tslint:disable-next-line: class-name
export class LoginInterface {
    email: string;
    password: string;
}
export class createContestant {
    user_id: number;
    post_id: number;
    election_id: number;
}
export class Contestants {
    post_id: number;
    post_name: string;
    status: boolean;
    contestants: [{
    contestant_id: number;
    contestant_name: string;
    status: boolean;
    voted: boolean;
    votes ?: number;
    }];

}
export class AllContestants {
    post_id: number;
    post_name: string;
    contestants: [{
    contestant_id: number;
    contestant_name: string;
    status: boolean;
    election: string;
    completed: string;
    }];

}
