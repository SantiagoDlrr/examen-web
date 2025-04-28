import VisitorService from '../services/VisitorService';
import VisitorController from '../controller/VisitorController'
import VisitorHttpHandler from '../handler/VisitorHttpHandler';

const visitorService = new VisitorService();
const visitorController = new VisitorController(visitorService);
const visitorHttpHandler = new VisitorHttpHandler(visitorController);

export default visitorHttpHandler;