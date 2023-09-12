import { UserAccount } from '../Account.Domain/UserAccount';
import { expect } from 'jest';

describe('UserAccount', () => {
  let userAccount: UserAccount;

  beforeEach(() => {
    userAccount = new UserAccount('test@example.com', 'oldPassword');
  });

  test('ChangePassword changes the password', () => {
    userAccount.ChangePassword('newPassword');

    expect(userAccount.password).toBe('newPassword');
  });
});
