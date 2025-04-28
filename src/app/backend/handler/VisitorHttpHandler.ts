import VisitorController from '../controller/VisitorController';

class VisitorHttpHandler {
  private controller: VisitorController;

  constructor(controller: VisitorController) {
    this.controller = controller;
  }

  async login(req: any, res: any) {
    try {
      const { username, password } = req.body;
      const visitorData = await this.controller.validateLogin(username, password);
      return res.json(visitorData);
    } catch (error: any) {
      return res.status(401).json({ message: error.message });
    }
  }
}

export default VisitorHttpHandler;