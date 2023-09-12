import { UserAccountRegistration } from "../Account.Domain/UserAccountRegistration";
import { IUserAccountRepository } from "../Account.Domain/IUserAccountRepository";

describe("UserAccountRegistration", () => {
  let userAccountRegistration: UserAccountRegistration;
  let mockUserAccountRepository: IUserAccountRepository;

  beforeEach(() => {
    mockUserAccountRepository = jest.fn<IUserAccountRepository>();
    userAccountRegistration = new UserAccountRegistration(
      mockUserAccountRepository
    );
  });

  it("should register a user account", async () => {
    const email = "test@example.com";
    const password = "password123";

    await userAccountRegistration.register(email, password);

    expect(mockUserAccountRepository.save).toHaveBeenCalledWith({
      email,
      password,
    });
  });

  it("should change a user account password", async () => {
    const userId = "123";
    const newPassword = "newPassword123";

    await userAccountRegistration.changePassword(userId, newPassword);

    expect(mockUserAccountRepository.get).toHaveBeenCalledWith(userId);
    expect(mockUserAccountRepository.save).toHaveBeenCalled();
  });
});
