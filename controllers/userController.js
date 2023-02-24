const info = (req, res) => {
    res.status(200).send({ msg: "Docker env setup problem solved" });
};
module.exports = { info };