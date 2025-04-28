
const VisitorService = require('../services/VisitorService');
const VisitorController = require('../controllers/VisitorController');
const VisitorHttpHandler = require('../handlers/VisitorHttpHandler');

const visitorService = new VisitorService();
const visitorController = new VisitorController(visitorService);
const visitorHttpHandler = new VisitorHttpHandler(visitorController);

module.exports = visitorHttpHandler;