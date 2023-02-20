const info = (req, res) => {
    res.status(200).send({ msg: "Multiple container connection" });
};
module.exports = { info };