import { User } from './user-entity';

describe('User', () => {
  describe('create', () => {
    it('should throw an error for invalid emails', () => {
      expect(() => {
        User.create("Test Name", "invalidEmail", "(11) 1234-5678");
      }).toThrow("Invalid email format.");
    });

    it('should throw an error for invalid cellphone numbers', () => {
      expect(() => {
        User.create("Test Name", "test@example.com", "invalidCellphone");
      }).toThrow("Invalid cellphone format.");
    });

    it('should create a user for valid data', () => {
      const user = User.create("Test Name", "test@example.com", "(11) 1234-5678", "validPassword");
      expect(user).toBeInstanceOf(User);
    });
  });

  describe('fromCredentials', () => {
    it('should throw an error for invalid emails', () => {
      expect(() => {
        User.fromCredentials("invalidEmail", "password");
      }).toThrow("Invalid email format.");
    });

    it('should create a user for valid email and password', () => {
      const user = User.fromCredentials("test@example.com", "validPassword");
      expect(user).toBeInstanceOf(User);
    });
  });

  describe('canLogin', () => {
    it('should return true for valid credentials', () => {
      const user = User.fromCredentials("example@email.com", "example.password");
      expect(user.canLogin()).toBe(true);
    });

    it('should return false for invalid credentials', () => {
      const user = User.fromCredentials("test@example.com", "invalidPassword");
      expect(user.canLogin()).toBe(false);
    });
  });

  describe('isValidName', () => {
    it('should return false for names shorter than 3 characters', () => {
      const user = User.create("Te", "test@example.com");
      expect(user.isValidName()).toBe(false);
    });

    it('should return false for names longer than 50 characters', () => {
      const name = new Array(52).join('a'); // String com 51 caracteres "a"
      const user = User.create(name, "test@example.com");
      expect(user.isValidName()).toBe(false);
    });

    it('should return true for valid name lengths', () => {
      const user = User.create("Valid Name", "test@example.com");
      expect(user.isValidName()).toBe(true);
    });
  });

  describe('isValidEmail', () => {
    it('should return true for valid email formats', () => {
      const user = User.create("Test Name", "test@example.com");
      expect(user.isValidEmail()).toBe(true);
    });
  });

  describe('isValidCellphone', () => {

    it('should return true for valid cellphone formats', () => {
      const user = User.create("Test Name", "test@example.com", "(11) 1234-5678");
      expect(user.isValidCellphone()).toBe(true);
    });

    it('should return false if no cellphone is provided', () => {
      const user = User.create("Test Name", "test@example.com");
      expect(user.isValidCellphone()).toBe(false);
    });
  });
});
