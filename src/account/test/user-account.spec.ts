import { UserAccount } from "../domain/user-account";

describe("UserAccount", () => {
  describe.each(["@Azerty123", "$JohnDoe0"])(
    "UserAccount with password '%s' should be valid",
    (password) => {
      test("register", () => {
        const userAccount = new UserAccount("sample@mail.com", password);
        expect(userAccount.password).toBe(password);
      });

      test("changePassword", () => {
        const userAccount = new UserAccount("sample@mail.com", "old");
        userAccount.changePassword(password);
        expect(userAccount.password).toBe(password);
      });
    }
  );

  describe.each(["AAzerty123", "Aazerty123", "AzerAtyA123", "AzeratyA123"])(
    "UserAccount with password '%s' should be invalid",
    (password) => {
      test("register", () => {
        expect(() => {
          new UserAccount("sample@mail.com", password);
        }).toThrow();
      });

      test("changePassword", () => {
        const userAccount = new UserAccount("sample@mail.com", "old");
        expect(() => {
          userAccount.changePassword(password);
        }).toThrow();
      });
    }
  );
});
