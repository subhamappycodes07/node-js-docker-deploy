const info = (req, res) => {
    res.status(200).send("Docker deployment test 1");
};
module.exports = { info };