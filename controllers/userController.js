const info = (req, res) => {
    res.status(200).send({ msg: "Docker image deploy to ec2" });
};
module.exports = { info };