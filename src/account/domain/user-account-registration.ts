import { IUserAccountRepository } from "./IUserAccountRepository";
import { UserAccount } from "./UserAccount";

export class UserAccountRegistration {
  private userAccountRepository: IUserAccountRepository;

  constructor(userAccountRepository: IUserAccountRepository) {
    this.userAccountRepository = userAccountRepository;
  }

  async register(email: string, password: string): Promise<void> {
    const userAccount = new UserAccount(email, password);
    await this.userAccountRepository.save(userAccount);
  }

  async changePassword(userId: string, newPassword: string): Promise<void> {
    const userAccount = await this.userAccountRepository.get(userId);
    userAccount.changePassword(newPassword);
    await this.userAccountRepository.save(userAccount);
  }
}
