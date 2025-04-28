const visitors = require('../../backend/data/visitors');

class VisitorService {
  async validateVisitor(username, password) {
    const visitor = visitors.find(v => v.username === username && v.password === password);
    return visitor || null;
  }
}

module.exports = VisitorService;