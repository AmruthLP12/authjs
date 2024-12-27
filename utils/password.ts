import crypto from "crypto";

/**
 * Represents a salted and hashed password.
 */
interface SaltedHash {
  salt: string;
  hashedPassword: string;
}

/**
 * Generates a random salt for password hashing.
 * @returns {string} Randomly generated salt.
 */
const generateSalt = (): string => {
  return crypto.randomBytes(16).toString("hex");
};

/**
 * Hashes a password using the provided salt and SHA-256.
 * @param password - Plaintext password.
 * @param salt - Salt value.
 * @returns {string} Salted and hashed password.
 */
const hashPassword = (password: string, salt: string): string => {
  const hash = crypto.createHmac("sha256", salt);
  hash.update(password);
  return hash.digest("hex");
};

/**
 * Salts and hashes a plaintext password.
 * @param password - Plaintext password.
 * @returns {SaltedHash} Object containing the salt and hashed password.
 */
export const saltAndHashPassword = (password: string): SaltedHash => {
  const salt = generateSalt();
  const hashedPassword = hashPassword(password, salt);
  return { salt, hashedPassword };
};

/**
 * Verifies if a plaintext password matches the hashed password.
 * @param password - Plaintext password.
 * @param salt - Salt value.
 * @param hashedPassword - Stored hashed password.
 * @returns {boolean} Whether the password matches the hash.
 */
export const verifyPassword = (
  password: string,
  salt: string,
  hashedPassword: string
): boolean => {
  const hashToVerify = hashPassword(password, salt);
  return hashToVerify === hashedPassword;
};
