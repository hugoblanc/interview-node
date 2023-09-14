import { randomUUID } from "crypto";

export class UserAccount {
  id: string;

  constructor(public email: string, public password: string) {
    this.id = randomUUID();
  }

  public changePassword(newPassword: string): void {
    this.password = newPassword;
  }
}
