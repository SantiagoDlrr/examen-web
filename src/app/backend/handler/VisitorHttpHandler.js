class VisitorHttpHandler {
    constructor(controller) {
      this.controller = controller;
    }
  
    async login(req, res) {
      try {
        const { username, password } = req.body;
        const visitorData = await this.controller.validateLogin(username, password);
        res.status(200).json(visitorData);
      } catch (error) {
        res.status(401).json({ message: error.message });
      }
    }
  }
  
  module.exports = VisitorHttpHandler;