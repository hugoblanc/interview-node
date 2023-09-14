export class Password {
  constructor(readonly value: string) {
    if (!this.isValid) {
      throw new Error("Unsecured password submitted");
    }
  }

  private get isValid() {
    return (
      !this.isEmpty &&
      !this.hasTheSameCharacterTwiceInARow &&
      !this.hasTheSameCharacterAtLeastThreeTimes
    );
  }

  private get isEmpty(): boolean {
    return this.value.trim().length === 0;
  }

  private get upperCasedChars(): string[] {
    return this.value.toUpperCase().split("");
  }

  private get hasTheSameCharacterTwiceInARow(): boolean {
    return this.upperCasedChars
      .slice(0, -1)
      .some((char, index) => char === this.upperCasedChars[index + 1]);
  }

  private get hasTheSameCharacterAtLeastThreeTimes(): boolean {
    return this.upperCasedChars.some(
      (char) => this.upperCasedChars.filter((c) => c === char).length >= 3
    );
  }
}
