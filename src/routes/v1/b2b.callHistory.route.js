const express = require('express');
const callHistoryController = require('../../controllers/b2b.callHistory.controller');

const router = express.Router();
const authorization = require('../../controllers/tokenVerify.controller');

router.route('/call').post(authorization, callHistoryController.createCallHistory);
router.route('/getAll/CallHistory').get(callHistoryController.getAll);
// router.route('/getShopId').get(callHistoryController.getShop);
router.route('/getAll/callHistory/:date/:status/:key/:page').get(authorization, callHistoryController.getAllPage);
router.route('/update/callingStatus/:id/:date').put(authorization, callHistoryController.updateCallingStatus);
router.route('/lapsed/callingStatus/:id/:orderId').put(authorization, callHistoryController.updateCallingStatuslapsed);
router.route('/update/StatusCall/:id').put(callHistoryController.updateStatuscall);
router.route('/getCallCount/:id').get(callHistoryController.getById);
router.route('/createByOwner/shop').post(callHistoryController.createShopByOwner);
router.route('/callHistory/report/callingStatus/:date').get(callHistoryController.callingStatusreport);
// router.route('/craeteCallStatus').post(callHistoryController.createcallHistoryWithTypes);
router.route('/craeteCallStatus').post(authorization, callHistoryController.createcallHistoryWithTypes);
router.route('/craeteCallStatus/lapsed').post(authorization, callHistoryController.createcallHistoryWithTypeslapsed);
router.route('/updateOrderedStatus/:id').put(callHistoryController.updateOrderedStatus);
router.route('/oncallcheck').get(authorization, callHistoryController.getOncallfromshops);
router.route('/callingStatus/:id').get(callHistoryController.checkvisitOncallStatus);
router.route('/update/callingStatus/visit/:id').put(authorization, callHistoryController.updateStatuscallVisit);
router.route('/getshop/bystatus/:status').get(callHistoryController.getshopsOrderWise);
router.route('/getcallhistory/lastfivedays/:id').get(callHistoryController.getcallHistorylastFivedays);
router.route('/getacceptDeclined/:status/:date/:key/:page').get(authorization, callHistoryController.getacceptDeclined);
router.route('/reset/callingStatus').get(callHistoryController.resethistory);
router.route('/previous/callback/reshedule').get(callHistoryController.previouscallBackAnd_Reshedule);
router.route('/oncallshops').get(callHistoryController.getOncallShops);
router.route('/oncall/status/Byuser').get(authorization, callHistoryController.oncallstatusByUser);
router.route('/call/visit/count').get(authorization, callHistoryController.call_visit_Count);
router.route('/callhistory/byShop/:shopId/:date').get(callHistoryController.BillHistoryByShopId_date);
router.route('/reorder/getorder/all/:id').get(callHistoryController.get_order_details);
module.exports = router;