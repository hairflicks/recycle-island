import bcrypt from 'bcrypt'

export const hashPassword = (password: string): string => {
    const salt = bcrypt.genSaltSync()
    return bcrypt.hashSync(password, salt)
}