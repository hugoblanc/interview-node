import { uuid } from "crypto";

class UserAccount {
  private id: string;
  private email: string;
  private password: string;

  constructor(email: string, password: string) {
    this.id = uuidv4();
    this.email = email;
    this.password = password;
  }

  public changePassword(newPassword: string): void {
    this.password = newPassword;
  }
}
