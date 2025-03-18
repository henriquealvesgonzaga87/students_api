class HomeController {
  async index(req, res) {
    res.json({
      msg: "Hello world!"
    });
  }
}

export default new HomeController();
