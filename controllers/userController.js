const info = (req, res) => {
    res.status(200).send("Docker deployment using docker-compose");
};
module.exports = { info };