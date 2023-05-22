const getUsersPasha = (req, res) => {
    res.send('get user Pasha');
};

const postUsersPasha = (req, res) => {
    res.send('post users Pasha');
};

const getSingleUserPasha = (req, res) => {
    res.send('get single Pasha user');
};


module.exports = {
    getUsersPasha,
    postUsersPasha,
    getSingleUserPasha
}