const info = (req, res) => {
    res.status(200).send("Docker deployment");
};
module.exports = { info };