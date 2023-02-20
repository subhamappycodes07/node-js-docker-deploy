const info = (req, res) => {
    res.status(200).send({ msg: "Docker deployment using docker-compose prod" });
};
module.exports = { info };