import { hashPassword } from "../db/utils";
import bcrypt from "bcryptjs";

describe("hashPassword", () => {
  test("to see if given password is correctly hashed", async () => {
    const password = "hunter12";
    const hashedPassword = hashPassword(password);
    const match = await bcrypt.compare(password, hashedPassword);
    expect(match).toBe(true);
  });
});
