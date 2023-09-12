class UserAccount {
    private email: string;
    private password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    public ChangePassword(newPassword: string): void {
        this.password = newPassword;
    }
}
export default UserAccount;
