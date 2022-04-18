// GET	/api/users	Returns an array users.
// POST	/api/register	Creates a user from { username, password } in the request body, responds with newly created user.
// POST	/api/login	Checks { username, password } in the request body, responds with a welcome message.

let id = 0

function getId() {
    return ++id
}

let users = [
    { id: getId(), username: "Emmanuel", password: "whatIsAPasswordEven" },
    { id: getId(), username: "Felix", password: "iMakeDumbPasswords" },
]

module.exports = {
    async findAll() {
        return users
    },

    login ({ username, password }) {
        const user = users.find(x=> x.username === username && x.password === password)
        return Promise.resolve(user)
    },

    async create({ username, password }) {
        const newUser = { id: getId(), username, password }
        users.push(newUser)
        return newUser
    },
}