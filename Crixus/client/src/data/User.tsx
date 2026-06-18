class User{
    id: number;
    first_name: string;
    last_name: string;
    password: string;
    birth_date: Date;
    wallet_gold: number;
    username: string;
    teamId: number;

    constructor(id: number, f_name: string, l_name: string, password: string, b_date: Date, w_gold: number, user_n: string, t_id: number){
        this.id = id;
        this.first_name = f_name;
        this.last_name = l_name;
        this.password = password;
        this.birth_date = b_date;
        this.wallet_gold = w_gold;
        this.username = user_n;
        this.teamId = t_id;
    }

    public welcomeUser(): void{
        console.log(`welcome ${this.first_name} ${this.last_name}`)
    }
}

export default User;