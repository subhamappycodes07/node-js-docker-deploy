const info = (req, res) => {
    res.status(200).send({ msg: "Development branch created" });
};
module.exports = { info };