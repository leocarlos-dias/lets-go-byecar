export class User {
  constructor(
    public name: string,
    public email: string,
    public cellphone?: string,
    private password?: string
  ) {
    if (!this.isValidEmail()) {
      throw new Error("Invalid email format.");
    }
    if (cellphone && !this.isValidCellphone()) {
      throw new Error("Invalid cellphone format.");
    }
  }

  static create(name: string, email: string, cellphone?: string, password?: string): User {
    if (!name || !email) {
      throw new Error("Name and email are required to create a user.");
    }
    return new User(name, email, cellphone, password);
  }

  static fromCredentials(email: string, password: string): User {
    if (!email || !password) {
      throw new Error("Email and password are required.");
    }

    const dummyName = "Unknown";
    const user = new User(dummyName, email, undefined, password);

    if (!user.isValidEmail()) {
      throw new Error("Invalid email format.");
    }

    return user;
  }

  canLogin(): boolean {
    return this.email === "example@email.com" && this.password === "example.password";
  }

  isValidName(): boolean {
    return this.name.length >= 3 && this.name.length <= 50;
  }

  isValidEmail(): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(this.email);
  }

  isValidCellphone(): boolean {
    const phoneRegex = /^\(\d{2}\) \d{4}-\d{4}$/;
    if (!this.cellphone) {
      return false;
    }
    return phoneRegex.test(this.cellphone);
  }
}