import { randomUUID } from "node:crypto";

import { Password } from "./password";

export class UserAccount {
  private _password: Password;

  id: string;

  get password(): string {
    return this._password.value;
  }

  constructor(public readonly email: string, password: string) {
    this.id = randomUUID();
    this._password = new Password(password);
  }

  public changePassword(newPassword: string): void {
    this._password = new Password(newPassword);
  }
}
