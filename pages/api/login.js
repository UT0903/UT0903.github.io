export default function handler(req, res) {
  console.log("login");
  res.status(200).send({ data: "login success" });
}
