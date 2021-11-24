import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin user',
        email: 'example@domain.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'john@domain.com',
        password: bcrypt.hashSync('123456')
    },
    {
        name: 'Jane Doe',
        email: 'jane@domain.com',
        password: bcrypt.hashSync('123456')
    },
]

export default users