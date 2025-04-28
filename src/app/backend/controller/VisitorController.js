class VisitorController {
    constructor(service) {
      this.service = service;
    }
  
    async validateLogin(username, password) {
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
  
  module.exports = VisitorController;