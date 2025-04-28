import VisitorService from '../services/VisitorService';

class VisitorController {
  private service: VisitorService;

  constructor(service: VisitorService) {
    this.service = service;
  }

  async validateLogin(username: string, password: string) {
    const visitor = await this.service.validateVisitor(username, password);
    if (!visitor) {
      throw new Error('Usuario o contraseña incorrectos');
    }
    return {
      fullName: visitor.fullName,
      ticketNumber: visitor.ticketNumber,
    };
  }
}

export default VisitorController;