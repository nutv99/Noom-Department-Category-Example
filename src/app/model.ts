// ddhousin_shopproject --->

export interface ArequestOpenShop {
  id? : number ;
  shopNameThai? : string ;
  shopNameEng? : string ;
  requestNameSirName? : string ;
  status? : number ;
  paymentDoc? : string ;
  paymentDate? : Date ;
  email? : string ;
  tel? : string ;
  lineid? : string ;
  }
  export interface ArequestOpenShop_PK {
  id? : number ;
  shopNameThai? : string ;
  shopNameEng? : string ;
  }
  
  
  export interface Article {
  id? : number ;
  headArticle? : string ;
  articleText? : string ;
  articleText2? : string ;
  articleImage? : string ;
  ownerid? : number ;
  lastupdate? : Date ;
  }
  export interface Article_PK {
  id? : number ;
  }
  
  
  export interface BannerLib {
  id? : number ;
  BannerURL? : string ;
  }
  export interface BannerLib_PK {
  id? : number ;
  }
  
  
  export interface BoxProduct {
  shopCode? : number ;
  OwnerID? : string ;
  BoxID? : string ;
  BoxName? : string ;
  BoxCaption? : string ;
  BannerImageList? : string ;
  GroupNo? : string ;
  ItemCodeList? : string ;
  }
  export interface BoxProduct_PK {
  shopCode? : number ;
  BoxID? : string ;
  GroupNo? : string ;
  }
  
  
  export interface CarouselGroup {
  carous_group_id? : number ;
  carous_group_name? : string ;
  orderno? : number ;
  carous_type? : number ;
  typedata? : string ;
  sqlData? : string ;
  boxProductID? : string ;
  ItemCode? : string ;
  ImageURL? : string ;
  LinkType? : number ;
  Link? : string ;
  Text1? : string ;
  Text2? : string ;
  Text3? : string ;
  Text4? : string ;
  Text5? : string ;
  lastupdate? : Date ;
  }
  export interface CarouselGroup_PK {
  carous_group_id? : number ;
  orderno? : number ;
  }
  
  
  export interface CodeLib {
  codeno? : number ;
  Description? : string ;
  CodeFileName? : string ;
  functionList? : string ;
  webref? : string ;
  pathofSource? : string ;
  MainPHPCode? : string ;
  JSCode? : string ;
  AjaxPHP1? : string ;
  AjaxPHP2? : string ;
  DataMySQL? : string ;
  updatedby? : string ;
  lastupdate? : string ;
  }
  export interface CodeLib_PK {
  codeno? : number ;
  CodeFileName? : string ;
  }
  
  
  export interface Component {
  componentID? : number ;
  component_TypeID? : number ;
  componentfunctionid? : number ;
  componentDesc? : string ;
  ID_ClassID? : string ;
  sData1? : string ;
  cssDefault? : string ;
  funcName? : string ;
  ParameterDesc? : string ;
  }
  export interface Component_PK {
  componentID? : number ;
  ID_ClassID? : string ;
  }
  
  
  export interface ComponentClass {
  id? : number ;
  Component_Function_ID? : number ;
  ClassID? : number ;
  cssName? : string ;
  cssValue? : string ;
  themename? : string ;
  SourceFunctionName? : string ;
  }
  export interface ComponentClass_PK {
  id? : number ;
  }
  
  
  export interface ComponentFunction {
  component_Function_ID? : number ;
  confirmed? : string ;
  component_TypeID? : number ;
  functionName? : string ;
  ParameterDesc? : string ;
  ClassName? : string ;
  cssDefault? : string ;
  sData? : string ;
  Remark? : string ;
  }
  export interface ComponentFunction_PK {
  component_Function_ID? : number ;
  }
  
  
  export interface ComponentMaster {
  id? : number ;
  component_Function_ID? : number ;
  component_Master_ID? : number ;
  component_TypeID? : number ;
  useClassName? : string ;
  funcName? : string ;
  componentDesc? : string ;
  ID_ClassID? : string ;
  sData1? : string ;
  cssDefault? : string ;
  ParameterDesc? : string ;
  }
  export interface ComponentMaster_PK {
  id? : number ;
  }
  
  
  export interface ComponentType {
  component_TypeID? : number ;
  TypeDesc? : string ;
  GroupType? : string ;
  }
  export interface ComponentType_PK {
  component_TypeID? : number ;
  }
  
  
  export interface DataDict {
  TableName? : string ;
  FieldOrderNo? : number ;
  FieldName? : string ;
  FieldComment? : string ;
  FieldType? : string ;
  useInputName? : string ;
  FieldSize? : number ;
  isPrimaryKey? : string ;
  isIndex? : string ;
  TableFK? : string ;
  lastupdate? : Date ;
  }
  export interface DataDict_PK {
  TableName? : string ;
  FieldName? : string ;
  }
  
  
  export interface DataTableList {
  dbname? : string ;
  tablenameList? : string ;
  FileTableName? : string ;
  TablePrimarykey? : string ;
  captionFieldList? : string ;
  SelectClause? : string ;
  JoinClause? : string ;
  }
  export interface DataTableList_PK {
  dbname? : string ;
  FileTableName? : string ;
  }
  
  
  export interface HeadOrder {
  id? : number ;
  OrderNo? : string ;
  OrderDate? : Date ;
  shopID? : number ;
  memberid? : number ;
  useSendPlaceNo? : number ;
  CartList? : string ;
  TotalMoney? : number ;
  TotalDiscount? : number ;
  VatMoney? : number ;
  ShipFee? : number ;
  GrandMoney? : number ;
  PayByCode? : string ;
  PaymentStatus? : number ;
  SendStatus? : number ;
  SendPlace? : string ;
  lastupdate? : string ;
  created_at? : string ;
  PayTypeCode? : string ;
  SourceBankName? : string ;
  TargetBankName? : string ;
  TransferMoney? : number ;
  DateTransfer? : Date ;
  TimeTransfer? : string ;
  imageSlipTransfer? : string ;
  TrackingNo? : string ;
  }
  export interface HeadOrder_PK {
  id? : number ;
  OrderNo? : string ;
  shopID? : number ;
  }
  
  
  export interface HeadOrder2 {
  id? : number ;
  OrderNo? : string ;
  OrderDate? : Date ;
  shopID? : number ;
  memberid? : number ;
  useSendPlaceNo? : number ;
  CartList? : string ;
  TotalMoney? : number ;
  TotalDiscount? : number ;
  VatMoney? : number ;
  ShipFee? : number ;
  GrandMoney? : number ;
  PayByCode? : string ;
  PaymentStatus? : number ;
  SendStatus? : number ;
  SendPlace? : string ;
  lastupdate? : string ;
  created_at? : string ;
  PayTypeCode? : string ;
  SourceBankName? : string ;
  TargetBankName? : string ;
  TransferMoney? : number ;
  DateTransfer? : Date ;
  TimeTransfer? : string ;
  imageSlipTransfer? : string ;
  TrackingNo? : string ;
  InvOrderDetail2A: [ {
  id? : number ;
  OrderNo? : string ;
  OrderDate? : Date ;
  shopID? : number ;
  memberid? : number ;
  useSendPlaceNo? : number ;
  CartList? : string ;
  TotalMoney? : number ;
  TotalDiscount? : number ;
  VatMoney? : number ;
  ShipFee? : number ;
  GrandMoney? : number ;
  PayByCode? : string ;
  PaymentStatus? : number ;
  SendStatus? : number ;
  SendPlace? : string ;
  lastupdate? : string ;
  created_at? : string ;
  PayTypeCode? : string ;
  SourceBankName? : string ;
  TargetBankName? : string ;
  TransferMoney? : number ;
  DateTransfer? : Date ;
  TimeTransfer? : string ;
  imageSlipTransfer? : string ;
  TrackingNo? : string ;
  }] ;
  member: [ {
  id? : number ;
  OrderNo? : string ;
  OrderDate? : Date ;
  shopID? : number ;
  memberid? : number ;
  useSendPlaceNo? : number ;
  CartList? : string ;
  TotalMoney? : number ;
  TotalDiscount? : number ;
  VatMoney? : number ;
  ShipFee? : number ;
  GrandMoney? : number ;
  PayByCode? : string ;
  PaymentStatus? : number ;
  SendStatus? : number ;
  SendPlace? : string ;
  lastupdate? : string ;
  created_at? : string ;
  PayTypeCode? : string ;
  SourceBankName? : string ;
  TargetBankName? : string ;
  TransferMoney? : number ;
  DateTransfer? : Date ;
  TimeTransfer? : string ;
  imageSlipTransfer? : string ;
  TrackingNo? : string ;
  }] ;
  InvOrderDetail2B: [ {
  id? : number ;
  OrderNo? : string ;
  OrderDate? : Date ;
  shopID? : number ;
  memberid? : number ;
  useSendPlaceNo? : number ;
  CartList? : string ;
  TotalMoney? : number ;
  TotalDiscount? : number ;
  VatMoney? : number ;
  ShipFee? : number ;
  GrandMoney? : number ;
  PayByCode? : string ;
  PaymentStatus? : number ;
  SendStatus? : number ;
  SendPlace? : string ;
  lastupdate? : string ;
  created_at? : string ;
  PayTypeCode? : string ;
  SourceBankName? : string ;
  TargetBankName? : string ;
  TransferMoney? : number ;
  DateTransfer? : Date ;
  TimeTransfer? : string ;
  imageSlipTransfer? : string ;
  TrackingNo? : string ;
  }] ;
  InvOrderDetail2: [ {
  id? : number ;
  OrderNo? : string ;
  OrderDate? : Date ;
  shopID? : number ;
  memberid? : number ;
  useSendPlaceNo? : number ;
  CartList? : string ;
  TotalMoney? : number ;
  TotalDiscount? : number ;
  VatMoney? : number ;
  ShipFee? : number ;
  GrandMoney? : number ;
  PayByCode? : string ;
  PaymentStatus? : number ;
  SendStatus? : number ;
  SendPlace? : string ;
  lastupdate? : string ;
  created_at? : string ;
  PayTypeCode? : string ;
  SourceBankName? : string ;
  TargetBankName? : string ;
  TransferMoney? : number ;
  DateTransfer? : Date ;
  TimeTransfer? : string ;
  imageSlipTransfer? : string ;
  TrackingNo? : string ;
  }] ;
  }
  export interface HeadOrder2_PK {
  OrderNo? : string ;
  }
  
  
  export interface InputType {
  ToolName? : string ;
  }
  export interface InputType_PK {
  ToolName? : string ;
  }
  
  
  export interface InvOrderDetail {
  OrderNo? : string ;
  no? : number ;
  shopID? : number ;
  shopName? : string ;
  ItemCode? : number ;
  ItemDetail? : string ;
  NumItem? : number ;
  UnitPrice? : number ;
  SalePrice? : number ;
  Discount? : number ;
  Amount? : number ;
  ThisMoney? : number ;
  Status? : string ;
  IsPacked? : string ;
  IsSend? : number ;
  TrackingNo? : string ;
  IsCancelOrder? : string ;
  }
  export interface InvOrderDetail_PK {
  OrderNo? : string ;
  no? : number ;
  shopID? : number ;
  }
  
  
  export interface InvOrderDetail2 {
  OrderNo? : string ;
  no? : number ;
  shopID? : number ;
  shopName? : string ;
  ItemCode? : number ;
  ItemDetail? : string ;
  NumItem? : number ;
  UnitPrice? : number ;
  SalePrice? : number ;
  Discount? : number ;
  Amount? : number ;
  ThisMoney? : number ;
  Status? : string ;
  IsPacked? : string ;
  IsSend? : number ;
  TrackingNo? : string ;
  IsCancelOrder? : string ;
  }
  export interface InvOrderDetail2_PK {
  OrderNo? : string ;
  no? : number ;
  }
  
  
  export interface ItemAttribute {
  attributecode? : number ;
  attributename? : string ;
  }
  export interface ItemAttribute_PK {
  attributecode? : number ;
  }
  
  
  export interface ItemMaster {
  ItemCode? : string ;
  lang? : string ;
  VendorID? : number ;
  ShopCode? : number ;
  ItemNo? : number ;
  ItemShopURL? : string ;
  isWork? : number ;
  departmentCode? : string ;
  categoryCode? : string ;
  groupcode? : string ;
  ItemNameURL? : string ;
  ItemName? : string ;
  ItemNameShort? : string ;
  Cost? : number ;
  fullPrice? : number ;
  discount? : string ;
  SellPrice? : number ;
  NumSale? : number ;
  rating? : number ;
  Balance? : number ;
  mainImageURL? : string ;
  subImageURL? : string ;
  ImageListBig? : string ;
  ImageListThumbA? : string ;
  ImageListThumbB? : string ;
  Description? : string ;
  Description2? : string ;
  pageDetailURL? : string ;
  pageTitle? : string ;
  pageMetaDesc? : string ;
  ItemShopCode? : string ;
  BrandID? : number ;
  BalanceStock? : number ;
  points? : number ;
  numView? : number ;
  numReview? : number ;
  shipCode? : number ;
  shipFeePerPiece? : number ;
  lastupdate? : Date ;
  }
  export interface ItemMaster_PK {
  ItemCode? : string ;
  ShopCode? : number ;
  }
  
  
  export interface ItemMasterMain {
  ItemCode? : string ;
  ShopCode? : number ;
  ItemShopURL? : string ;
  departmentCode? : string ;
  categoryCode? : string ;
  groupcode? : string ;
  ItemName? : string ;
  fullPrice? : number ;
  discount? : string ;
  SellPrice? : number ;
  mainImageURL? : string ;
  Description? : string ;
  pageDetailURL? : string ;
  ItemShopCode? : string ;
  BrandID? : number ;
  BalanceStock? : number ;
  numReview? : number ;
  lastupdate? : Date ;
  }
  export interface ItemMasterMain_PK {
  ItemCode? : string ;
  }
  
  
  export interface ItemMasterShop {
  ItemCode? : string ;
  VendorID? : number ;
  ShopCode? : number ;
  ItemNo? : number ;
  ItemShopURL? : string ;
  isWork? : number ;
  departmentCode? : string ;
  categoryCode? : string ;
  groupcode? : string ;
  ItemNameURL? : string ;
  ItemName? : string ;
  ItemNameShort? : string ;
  Cost? : number ;
  fullPrice? : number ;
  discount? : string ;
  SellPrice? : number ;
  NumSale? : number ;
  rating? : number ;
  Balance? : number ;
  mainImageURL? : string ;
  subImageURL? : string ;
  ImageListBig? : string ;
  ImageListThumbA? : string ;
  ImageListThumbB? : string ;
  Description? : string ;
  Description2? : string ;
  pageDetailURL? : string ;
  pageTitle? : string ;
  pageMetaDesc? : string ;
  ItemShopCode? : string ;
  BrandID? : number ;
  BalanceStock? : number ;
  numView? : number ;
  numReview? : number ;
  shipCode? : number ;
  shipFeePerPiece? : number ;
  lastupdate? : Date ;
  department: [ {
  ItemCode? : string ;
  VendorID? : number ;
  ShopCode? : number ;
  ItemNo? : number ;
  ItemShopURL? : string ;
  isWork? : number ;
  departmentCode? : string ;
  categoryCode? : string ;
  groupcode? : string ;
  ItemNameURL? : string ;
  ItemName? : string ;
  ItemNameShort? : string ;
  Cost? : number ;
  fullPrice? : number ;
  discount? : string ;
  SellPrice? : number ;
  NumSale? : number ;
  rating? : number ;
  Balance? : number ;
  mainImageURL? : string ;
  subImageURL? : string ;
  ImageListBig? : string ;
  ImageListThumbA? : string ;
  ImageListThumbB? : string ;
  Description? : string ;
  Description2? : string ;
  pageDetailURL? : string ;
  pageTitle? : string ;
  pageMetaDesc? : string ;
  ItemShopCode? : string ;
  BrandID? : number ;
  BalanceStock? : number ;
  numView? : number ;
  numReview? : number ;
  shipCode? : number ;
  shipFeePerPiece? : number ;
  lastupdate? : Date ;
  }] ;
  VendorMaster: [ {
  ItemCode? : string ;
  VendorID? : number ;
  ShopCode? : number ;
  ItemNo? : number ;
  ItemShopURL? : string ;
  isWork? : number ;
  departmentCode? : string ;
  categoryCode? : string ;
  groupcode? : string ;
  ItemNameURL? : string ;
  ItemName? : string ;
  ItemNameShort? : string ;
  Cost? : number ;
  fullPrice? : number ;
  discount? : string ;
  SellPrice? : number ;
  NumSale? : number ;
  rating? : number ;
  Balance? : number ;
  mainImageURL? : string ;
  subImageURL? : string ;
  ImageListBig? : string ;
  ImageListThumbA? : string ;
  ImageListThumbB? : string ;
  Description? : string ;
  Description2? : string ;
  pageDetailURL? : string ;
  pageTitle? : string ;
  pageMetaDesc? : string ;
  ItemShopCode? : string ;
  BrandID? : number ;
  BalanceStock? : number ;
  numView? : number ;
  numReview? : number ;
  shipCode? : number ;
  shipFeePerPiece? : number ;
  lastupdate? : Date ;
  }] ;
  }
  export interface ItemMasterShop_PK {
  ItemCode? : string ;
  ShopCode? : number ;
  }
  
  
  export interface ItemReview {
  shopCode? : number ;
  ItemCode? : number ;
  reviewno? : number ;
  memberid? : number ;
  reviewname? : string ;
  comment? : string ;
  imageList? : string ;
  videoList? : string ;
  score? : number ;
  reviewdatetime? : Date ;
  isLegal? : string ;
  }
  export interface ItemReview_PK {
  shopCode? : number ;
  ItemCode? : number ;
  reviewno? : number ;
  }
  
  
  export interface ItemSaleAttribute {
  ItemCode? : string ;
  attributecode? : number ;
  attributevalue? : string ;
  }
  export interface ItemSaleAttribute_PK {
  ItemCode? : string ;
  attributecode? : number ;
  }
  
  
  export interface LiMenu {
  OwnerID? : number ;
  MainDivID? : string ;
  id? : number ;
  MenuName? : string ;
  MenuList? : string ;
  MenuList2? : string ;
  LinkType? : number ;
  }
  export interface LiMenu_PK {
  id? : number ;
  }
  
  
  export interface MyCodeLib {
  id? : number ;
  CodeName? : string ;
  phpFileName? : string ;
  CodeText? : string ;
  JSCode? : string ;
  description? : string ;
  createdAt? : Date ;
  }
  export interface MyCodeLib_PK {
  id? : number ;
  }
  
  
  export interface OrderControl {
  shopCode? : string ;
  LastOrderNo? : number ;
  lastupdated? : Date ;
  updatedby? : string ;
  }
  export interface OrderControl_PK {
  shopCode? : string ;
  LastOrderNo? : number ;
  }
  
  
  export interface OrderStatus {
  StatusCode? : number ;
  StatusDesc? : string ;
  updatedby? : string ;
  lastupdate? : Date ;
  }
  export interface OrderStatus_PK {
  StatusCode? : number ;
  }
  
  
  export interface QueryForView {
  QueryName? : string ;
  TableCaption? : string ;
  SQLText? : string ;
  HeadCaption? : string ;
  }
  export interface QueryForView_PK {
  QueryName? : string ;
  }
  
  
  export interface SaleMaster {
  shopID? : number ;
  SaleID? : number ;
  SaleName? : string ;
  SaleURL? : string ;
  pageCode? : string ;
  }
  export interface SaleMaster_PK {
  shopID? : number ;
  SaleID? : number ;
  }
  
  
  export interface SalePage {
  OwnerID? : string ;
  shopID? : number ;
  SaleID? : number ;
  PageID? : string ;
  pageName? : string ;
  fncList? : string ;
  fncListID_Header? : string ;
  fncListID_Body? : string ;
  fncListID_Footer? : string ;
  IndexCode? : string ;
  HeadFunction? : string ;
  BodyFunction? : string ;
  FooterFunction? : string ;
  }
  export interface SalePage_PK {
  PageID? : string ;
  }
  
  
  export interface SalePageChild {
  shopID? : number ;
  SaleID? : number ;
  PageID? : string ;
  componentID? : string ;
  componentName? : string ;
  componentFunction? : string ;
  paramList? : string ;
  }
  export interface SalePageChild_PK {
  shopID? : number ;
  SaleID? : number ;
  PageID? : string ;
  componentID? : string ;
  }
  
  
  export interface ShipItem {
  ItemCode? : number ;
  ShipCode? : number ;
  StartItem? : number ;
  EndItem? : number ;
  ShipFee? : number ;
  }
  export interface ShipItem_PK {
  ItemCode? : number ;
  ShipCode? : number ;
  }
  
  
  export interface ShipOrder {
  TransNo? : number ;
  OrderNo? : string ;
  MemberID? : string ;
  FullName? : string ;
  Address1? : string ;
  Address2? : string ;
  tumbolCode? : string ;
  amphurCode? : string ;
  ProvinceCode? : number ;
  PostCode? : string ;
  LineID? : string ;
  tel? : string ;
  remark? : string ;
  }
  export interface ShipOrder_PK {
  OrderNo? : string ;
  }
  
  
  export interface VendorItemMaster {
  id? : number ;
  VendorID? : number ;
  categorycode? : string ;
  ItemURL? : string ;
  ItemName? : string ;
  ItemDetail? : string ;
  ImageURL? : string ;
  Price? : number ;
  balanceItem? : number ;
  lastupdate? : Date ;
  }
  export interface VendorItemMaster_PK {
  id? : number ;
  }
  
  
  export interface VendorMaster {
  vendor_id? : number ;
  VendorName? : string ;
  VendorURL? : string ;
  departmentcode? : string ;
  LineID? : string ;
  FB? : string ;
  Tel? : string ;
  NumItem? : number ;
  }
  export interface VendorMaster_PK {
  vendor_id? : number ;
  }
  
  
  export interface Vendor_Category {
  departmentcode? : string ;
  categorycode? : string ;
  categoryDesc? : string ;
  }
  export interface Vendor_Category_PK {
  departmentcode? : string ;
  categorycode? : string ;
  }
  
  
  export interface Vendor_Department {
  departmentcode? : string ;
  departmentDesc? : string ;
  }
  export interface Vendor_Department_PK {
  departmentcode? : string ;
  }
  
  
  export interface Wording {
  no? : number ;
  categorycode? : string ;
  wording? : string ;
  fromurl? : string ;
  }
  export interface Wording_PK {
  }
  
  
  export interface amphur {
  AMPHUR_ID? : number ;
  AMPHUR_CODE? : string ;
  AMPHUR_NAME? : string ;
  GEO_ID? : number ;
  PROVINCE_ID? : number ;
  }
  export interface amphur_PK {
  AMPHUR_ID? : number ;
  }
  
  
  export interface bankthai {
  bankcode? : string ;
  thaibankname? : string ;
  thaibankeng? : string ;
  image? : string ;
  image2? : string ;
  }
  export interface bankthai_PK {
  bankcode? : string ;
  }
  
  
  export interface banner {
  bannercode? : number ;
  bannername? : string ;
  fncName? : string ;
  OwnerID? : string ;
  backgroundImgName? : string ;
  ImageList? : string ;
  ImagePosition? : string ;
  ImageSize? : string ;
  TextList? : string ;
  TextProperty? : string ;
  }
  export interface banner_PK {
  bannercode? : number ;
  }
  
  
  export interface categoryShop {
  ShopID? : string ;
  Level? : number ;
  categoryno? : number ;
  categorycode? : string ;
  categoryDesc? : string ;
  categoryDesc2? : string ;
  categoryDesc_Eng? : string ;
  imageName? : string ;
  grandParentCode? : string ;
  parentcode? : string ;
  categoryfromweb? : string ;
  TotalProduct? : number ;
  isShow? : string ;
  lastupdate? : Date ;
  createdAt? : Date ;
  updatedby? : string ;
  }
  export interface categoryShop_PK {
  ShopID? : string ;
  categorycode? : string ;
  }
  
  
  export interface categorymaster {
  Level? : number ;
  categorycode? : string ;
  lang? : string ;
  categoryDesc? : string ;
  categoryDesc_Eng? : string ;
  imageName? : string ;
  grandParentCode? : string ;
  parentcode? : string ;
  categoryfromweb? : string ;
  TotalProduct? : number ;
  }
  export interface categorymaster_PK {
  categorycode? : string ;
  lang? : string ;
  }
  
  
  export interface chat {
  id? : number ;
  adminname? : string ;
  userchatname? : string ;
  userid? : string ;
  chattext? : string ;
  chattime? : string ;
  mode? : string ;
  }
  export interface chat_PK {
  id? : number ;
  }
  
  
  export interface chatMember {
  adminname? : string ;
  username? : string ;
  userid? : string ;
  isNew? : number ;
  imgID? : number ;
  }
  export interface chatMember_PK {
  username? : string ;
  userid? : string ;
  }
  
  
  export interface cssClassLib {
  id? : number ;
  ClassID? : number ;
  cssName? : string ;
  cssValue? : string ;
  themename? : string ;
  SourceFunctionName? : string ;
  }
  export interface cssClassLib_PK {
  id? : number ;
  }
  
  
  export interface customer {
  customerid? : number ;
  shopID? : number ;
  username? : string ;
  password? : string ;
  facebookid? : string ;
  LineID? : string ;
  googleid? : string ;
  custname? : string ;
  facebookToken? : string ;
  email? : string ;
  googlename? : string ;
  imageFileName? : string ;
  imageFileName2? : string ;
  Address1? : string ;
  Address2? : string ;
  postcode? : string ;
  Tel? : string ;
  applyDate? : Date ;
  LastLogin? : Date ;
  }
  export interface customer_PK {
  customerid? : number ;
  }
  
  
  export interface customers {
  id? : number ;
  customername? : string ;
  createdAt? : Date ;
  }
  export interface customers_PK {
  id? : number ;
  }
  
  
  export interface department {
  departmentCode? : string ;
  code2? : number ;
  departmentDesc? : string ;
  lang? : string ;
  imageName? : string ;
  faIcon? : string ;
  updatedby? : string ;
  lastupdate? : Date ;
  salary? : number ;
  ItemCode? : string ;
  }
  export interface department_PK {
  departmentCode? : string ;
  }
  
  
  export interface departmentShop {
  shopID? : number ;
  departmentCode? : string ;
  code2? : number ;
  departmentDesc? : string ;
  lang? : string ;
  imageName? : string ;
  faIcon? : string ;
  updatedby? : string ;
  lastupdate? : Date ;
  salary? : number ;
  ItemCode? : string ;
  }
  export interface departmentShop_PK {
  shopID? : number ;
  departmentCode? : string ;
  }
  
  
  export interface district {
  DISTRICT_ID? : number ;
  DISTRICT_CODE? : string ;
  DISTRICT_NAME? : string ;
  tmp? : string ;
  AMPHUR_ID? : number ;
  PROVINCE_ID? : number ;
  GEO_ID? : number ;
  }
  export interface district_PK {
  DISTRICT_CODE? : string ;
  }
  
  
  export interface flagImage {
  language? : string ;
  langName? : string ;
  imageURL? : string ;
  }
  export interface flagImage_PK {
  language? : string ;
  }
  
  
  export interface formParam {
  formCode? : string ;
  FormName? : string ;
  TableName? : string ;
  GroupNo? : number ;
  GroupCaption? : string ;
  FieldOrderNo? : number ;
  FieldName? : string ;
  FieldComment? : string ;
  FieldType? : string ;
  useInputName? : string ;
  FieldSize? : number ;
  isPrimaryKey? : string ;
  isIndex? : string ;
  required? : string ;
  isHidden? : string ;
  isSaved? : string ;
  QueryTextName? : string ;
  QueryKeyCol? : number ;
  TableFK? : string ;
  lastupdate? : Date ;
  }
  export interface formParam_PK {
  FormName? : string ;
  TableName? : string ;
  FieldName? : string ;
  }
  
  
  export interface formParamHead {
  formCode? : string ;
  TableName? : string ;
  formName? : string ;
  formCaption? : string ;
  htmlCodeCompiled? : string ;
  jsCode1? : string ;
  NumField? : number ;
  SQLInsert? : string ;
  SQLUpdate? : string ;
  SQLDelete? : string ;
  SQLReplace? : string ;
  SQLWhereClause? : string ;
  isUseProvinceBox? : string ;
  htmlTextForm? : string ;
  lastupdate? : Date ;
  }
  export interface formParamHead_PK {
  formCode? : string ;
  }
  
  
  export interface fparam {
  maintablename? : string ;
  version? : number ;
  GroupID? : number ;
  GroupTitle? : string ;
  FieldOrder? : number ;
  selected? : string ;
  panelReport? : string ;
  thisTableName? : string ;
  mFieldName? : string ;
  mLabel? : string ;
  ToolName? : string ;
  isKey? : string ;
  isFK? : string ;
  Required? : string ;
  chkOnSearch? : string ;
  chkOnDelete? : string ;
  fieldSize? : number ;
  LineNo? : number ;
  mSql? : string ;
  header_mSql? : string ;
  primarykeyname? : string ;
  fieldType? : string ;
  dataTableFileName? : string ;
  }
  export interface fparam_PK {
  maintablename? : string ;
  version? : number ;
  mFieldName? : string ;
  }
  
  
  export interface groupItem {
  Level? : number ;
  categorycode? : string ;
  lang? : string ;
  categoryDesc? : string ;
  categoryDesc_Eng? : string ;
  imageName? : string ;
  grandParentCode? : string ;
  parentcode? : string ;
  categoryfromweb? : string ;
  TotalProduct? : number ;
  }
  export interface groupItem_PK {
  categorycode? : string ;
  lang? : string ;
  }
  
  
  export interface grouptopic {
  categorycode? : number ;
  category? : string ;
  topiccode? : number ;
  topicdesc? : string ;
  }
  export interface grouptopic_PK {
  categorycode? : number ;
  topiccode? : number ;
  }
  
  
  export interface headorders {
  orderno? : number ;
  customerid? : number ;
  userid? : number ;
  totalmoney? : number ;
  remark? : string ;
  }
  export interface headorders_PK {
  orderno? : number ;
  }
  
  
  export interface imageLib {
  imageCode? : number ;
  imageGroup? : string ;
  imageName? : string ;
  }
  export interface imageLib_PK {
  imageCode? : number ;
  }
  
  
  export interface learnArticle {
  categorycode? : number ;
  category? : string ;
  topicCode? : number ;
  subtopicCode? : number ;
  topicHead? : string ;
  articleID? : number ;
  AliasFileName? : string ;
  GenFileName? : string ;
  article? : string ;
  postdate? : Date ;
  htmlcode? : string ;
  cssText? : string ;
  }
  export interface learnArticle_PK {
  articleID? : number ;
  }
  
  
  export interface learnCategory {
  categorycode? : number ;
  category? : string ;
  }
  export interface learnCategory_PK {
  categorycode? : number ;
  category? : string ;
  }
  
  
  export interface member {
  memberid? : number ;
  membertypecode? : number ;
  username? : string ;
  password? : string ;
  statusCode? : number ;
  shopID? : number ;
  pincode? : string ;
  userfullname? : string ;
  facebookid? : string ;
  LineID? : string ;
  googleid? : string ;
  facebookname? : string ;
  token? : string ;
  email? : string ;
  googlename? : string ;
  assetPath? : string ;
  imageFileName? : string ;
  applyDate? : Date ;
  LastLogin? : Date ;
  }
  export interface member_PK {
  memberid? : number ;
  }
  
  
  export interface memberSendPlace {
  memberID? : number ;
  sendplaceNo? : number ;
  isLastSend? : number ;
  SendName? : string ;
  SendSirName? : string ;
  Address1? : string ;
  Address2? : string ;
  tumbonName? : string ;
  AmphurName? : string ;
  ProvinceName? : string ;
  PostCode? : string ;
  Tel? : string ;
  isSelected? : number ;
  }
  export interface memberSendPlace_PK {
  memberID? : number ;
  sendplaceNo? : number ;
  }
  
  
  export interface memberStatus {
  statusCode? : number ;
  statusDesc? : string ;
  }
  export interface memberStatus_PK {
  statusCode? : number ;
  }
  
  
  export interface memberType {
  membertypecode? : number ;
  typedesc? : string ;
  }
  export interface memberType_PK {
  membertypecode? : number ;
  }
  
  
  export interface modules {
  id? : number ;
  modulename? : string ;
  modulePath? : string ;
  zipfile? : string ;
  remark? : string ;
  used? : string ;
  }
  export interface modules_PK {
  id? : number ;
  modulename? : string ;
  }
  
  
  export interface mywork {
  workid? : number ;
  subject? : string ;
  description? : string ;
  imageFileName? : string ;
  workdate? : Date ;
  }
  export interface mywork_PK {
  workid? : number ;
  }
  
  
  export interface pagecomponent {
  shopCode? : number ;
  pagename? : string ;
  id? : number ;
  sectionname? : string ;
  ParentID? : string ;
  OrderNo? : number ;
  myID? : string ;
  ComponentType? : string ;
  thisClassNameList? : string ;
  LinkTo? : string ;
  LinkClass? : string ;
  LinkTitle? : string ;
  InnerText? : string ;
  CategoryCodeList? : string ;
  ItemCodeList? : string ;
  ImagePath? : string ;
  ImageName? : string ;
  ImageNameDefault? : string ;
  DefaultSizeImage? : string ;
  BoxLabel? : string ;
  }
  export interface pagecomponent_PK {
  pagename? : string ;
  myID? : string ;
  }
  
  
  export interface pagestructure {
  shopcode? : number ;
  id? : number ;
  pagename? : string ;
  templatecode? : number ;
  parentid? : string ;
  sectionOrder? : number ;
  sectionid? : string ;
  sectionname? : string ;
  BoxCaption? : string ;
  sectionLevel? : number ;
  sectionType? : string ;
  imgDefaultList? : string ;
  imgSizeDefault? : string ;
  GroupCodeList? : string ;
  itemCodeList? : string ;
  isHidden? : number ;
  }
  export interface pagestructure_PK {
  shopcode? : number ;
  id? : number ;
  }
  
  
  export interface paymentcontrol {
  lastpaymentno? : number ;
  }
  export interface paymentcontrol_PK {
  lastpaymentno? : number ;
  }
  
  
  export interface plan {
  sectionOrder? : number ;
  sectionname? : string ;
  Description? : string ;
  parentSectionID? : number ;
  level? : number ;
  tablelist? : string ;
  sqlText? : string ;
  pageName? : string ;
  className? : string ;
  }
  export interface plan_PK {
  sectionOrder? : number ;
  parentSectionID? : number ;
  }
  
  
  export interface postcode {
  PostCodeID? : number ;
  PostCode? : string ;
  Tumbon? : string ;
  Amphur? : string ;
  Province? : string ;
  Note? : string ;
  PostOffice? : string ;
  AddDate? : Date ;
  EditDate? : Date ;
  }
  export interface postcode_PK {
  PostCodeID? : number ;
  PostCode? : string ;
  }
  
  
  export interface province {
  PROVINCE_ID? : number ;
  PROVINCE_CODE? : string ;
  PROVINCE_NAME? : string ;
  GEO_ID? : number ;
  }
  export interface province_PK {
  PROVINCE_CODE? : string ;
  }
  
  
  export interface salemaster {
  shopcode? : number ;
  shopname? : string ;
  logoImage? : string ;
  shopurl? : string ;
  OwnerName? : string ;
  Address1? : string ;
  Address2? : string ;
  Tel1? : string ;
  Fax? : string ;
  email? : string ;
  StartOpenTime? : string ;
  StopOpenTime? : string ;
  SocialList? : string ;
  facebookshareID? : string ;
  shopImagePath? : string ;
  LastActiveDateTime? : Date ;
  Point? : number ;
  NumItem? : number ;
  ConvertionRate? : number ;
  numFollower? : number ;
  themeCode? : number ;
  createdate? : Date ;
  }
  export interface salemaster_PK {
  shopcode? : number ;
  }
  
  
  export interface shipmaster {
  shipCode? : number ;
  shipName? : string ;
  transportDate? : number ;
  }
  export interface shipmaster_PK {
  shipCode? : number ;
  }
  
  
  export interface shopBank {
  shopID? : number ;
  bankshopno? : number ;
  accountname_thai? : string ;
  accountname_eng? : string ;
  accountno? : string ;
  bankcode? : string ;
  bankbranch? : string ;
  }
  export interface shopBank_PK {
  shopID? : number ;
  bankshopno? : number ;
  accountno? : string ;
  }
  
  
  export interface shopItem {
  shopcode? : number ;
  categorycode? : number ;
  itemcode? : number ;
  itemname? : number ;
  itemdetail? : number ;
  unitprice? : number ;
  sendPrice? : number ;
  }
  export interface shopItem_PK {
  shopcode? : number ;
  categorycode? : number ;
  itemcode? : number ;
  }
  
  
  export interface shopMaster {
  shopID? : number ;
  shopName? : string ;
  ThemeName? : string ;
  langList? : string ;
  shopURL? : string ;
  jsonData? : string ;
  CategoryData? : string ;
  memberID? : number ;
  logoImageFileName? : string ;
  OwnerName? : string ;
  Owner_CitizenID? : string ;
  citizenImageDoc? : string ;
  paymentSlipImage? : string ;
  Address1? : string ;
  Address2? : string ;
  tumbonID? : number ;
  amphurID? : number ;
  provinceID? : number ;
  postCode? : string ;
  Tel1? : string ;
  Tel2? : string ;
  Tel3? : string ;
  email? : string ;
  FBPageURL? : string ;
  LineID? : string ;
  TotalItem? : number ;
  TotalSaleItem? : number ;
  TotalFollower? : number ;
  Score? : number ;
  chatRate? : number ;
  openShopDate? : Date ;
  logoImageFileName_1? : string ;
  onLineStatus? : number ;
  NumView? : number ;
  NumOrder? : number ;
  NumReturn? : number ;
  LastOnlineDateTime? : Date ;
  shopStatus? : number ;
  shopDesc? : string ;
  salePageCode? : string ;
  carousel_ID? : number ;
  lastupdated? : Date ;
  updatedby? : string ;
  createAT? : Date ;
  }
  export interface shopMaster_PK {
  shopID? : number ;
  shopName? : string ;
  }
  
  
  export interface shopSource {
  shopCode? : number ;
  shopName? : string ;
  shopURL? : string ;
  }
  export interface shopSource_PK {
  shopCode? : number ;
  }
  
  
  export interface shopStatus {
  statusID? : number ;
  StatusDesc? : string ;
  }
  export interface shopStatus_PK {
  statusID? : number ;
  }
  
  
  export interface shopcategory {
  shopcode? : number ;
  categorycode? : number ;
  categoryDesc? : string ;
  categoryURL? : string ;
  }
  export interface shopcategory_PK {
  shopcode? : number ;
  categorycode? : number ;
  }
  
  
  export interface themeMaster {
  themeCode? : number ;
  themeName? : string ;
  themePath? : string ;
  }
  export interface themeMaster_PK {
  themeCode? : number ;
  }
  
  
  export interface users {
  id? : number ;
  oauth_provider? : string ;
  oauth_uid? : string ;
  token? : string ;
  first_name? : string ;
  last_name? : string ;
  tel? : string ;
  email? : string ;
  gender? : string ;
  locale? : string ;
  cover? : string ;
  picture? : string ;
  link? : string ;
  created? : Date ;
  lastlogin? : Date ;
  organizations: [ {
  id? : number ;
  oauth_provider? : string ;
  oauth_uid? : string ;
  token? : string ;
  first_name? : string ;
  last_name? : string ;
  tel? : string ;
  email? : string ;
  gender? : string ;
  locale? : string ;
  cover? : string ;
  picture? : string ;
  link? : string ;
  created? : Date ;
  lastlogin? : Date ;
  }] ;
  systemlangaue: [ {
  id? : number ;
  oauth_provider? : string ;
  oauth_uid? : string ;
  token? : string ;
  first_name? : string ;
  last_name? : string ;
  tel? : string ;
  email? : string ;
  gender? : string ;
  locale? : string ;
  cover? : string ;
  picture? : string ;
  link? : string ;
  created? : Date ;
  lastlogin? : Date ;
  }] ;
  system_theme: [ {
  id? : number ;
  oauth_provider? : string ;
  oauth_uid? : string ;
  token? : string ;
  first_name? : string ;
  last_name? : string ;
  tel? : string ;
  email? : string ;
  gender? : string ;
  locale? : string ;
  cover? : string ;
  picture? : string ;
  link? : string ;
  created? : Date ;
  lastlogin? : Date ;
  }] ;
  }
  export interface users_PK {
  id? : number ;
  }
  
  
  export interface zip {
  articleID? : number ;
  ZipFromFolder? : string ;
  FileName? : string ;
  file? : string ;
  comment? : string ;
  lastupdate? : Date ;
  }
  export interface zip_PK {
  articleID? : number ;
  FileName? : string ;
  }