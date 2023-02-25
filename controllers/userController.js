const info = (req, res) => {
    res.status(200).send({ msg: "Production branch created" });
};
module.exports = { info };