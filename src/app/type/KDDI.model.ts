export const IfLoadKeyType = {
  Dashboard: 'Dashboard',
  ContractDetails: 'ContractDetails',
  Invoice: 'Invoice',
  PointDetails: 'PointDetails',
  TotalBill: 'TotalBill',
  Information: 'Information',
  IdSyncUpd: 'IdSyncUpd',
  PlanDetails: 'PlanDetails',
  BreakDown: 'BreakDown',
  ChangeDisplayOrder: 'ChangeDisplayOrder',
  OnlineShop: 'OnlineShop',
  OpenTop: 'OpenTop',
  Entertainment: 'Entertainment',
  MyPage: 'MyPage',
  EsimSelect: 'EsimSelect',
  EsimError: 'EsimError',
};
/**
 * IF取得タイミング（画面ごと）のタイプ
 */
export type IfLoadKeyType = typeof IfLoadKeyType[keyof typeof IfLoadKeyType];
