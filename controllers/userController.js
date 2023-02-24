const info = (req, res) => {
    res.status(200).send({ msg: "successfully deployed to ec2 instance" });
};
module.exports = { info };