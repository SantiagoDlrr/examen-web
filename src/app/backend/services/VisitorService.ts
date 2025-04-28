import visitors from '../data/visitors';

class VisitorService {
  async validateVisitor(username: string, password: string) {
    const visitor = visitors.find(v => v.username === username && v.password === password);
    return visitor || null;
  }
}

export default VisitorService;