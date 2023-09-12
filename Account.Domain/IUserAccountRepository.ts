export interface IUserAccountRepository {
    // Define the methods with their respective return types
    save(userAccount: UserAccount): Promise<void>;
    get(userId: string): Promise<UserAccount>;
}
