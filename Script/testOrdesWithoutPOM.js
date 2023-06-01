let order = Aliases.Orders;
let mainForm = Aliases.Orders.MainForm;
let orderForm = Aliases.Orders.OrderForm;
let groupBox = orderForm.Group;
let customerText = groupBox.Customer;
let cityText = groupBox.City;
let streetText = groupBox.Street;
let zipText = groupBox.Zip;
let stateText = groupBox.State;
let cardText = groupBox.CardNo;
let priceText = groupBox.Price;
let quantityText = groupBox.Quantity;
let listView = mainForm.OrdersView;
let dlgConfirmation = order.dlgConfirmation;
let btnYes = dlgConfirmation.btnYes;


function open_orders()
{
  TestedApps.Orders.Run(1,true);
}
var testQuantity = "Test"
function set_info()
{

  customerText.SetText(Project.Variables.name);
  cityText.SetText(Project.Variables.city);
  stateText.SetText(Project.Variables.state);
  streetText.SetText(Project.Variables.street);
  zipText.SetText(Project.Variables.zip);
  cardText.SetText(Project.Variables.card_no);
  priceText.SetText(Project.Variables.price);
  quantityText.UpDownEdit.SetText(testQuantity)
}
function add_order_rClick()
{
  listView.ClickR();
  listView.PopupMenu.Click("New order...");
  set_info();
  orderForm.ButtonOK.ClickButton();
  
  check_info();
}
function add_order_button()
{
  mainForm.ToolBar.ClickItem(4, false);
  set_info();
  orderForm.ButtonOK.ClickButton();
  
  check_info();
}
function add_order_from_top()
{
  mainForm.MainMenu.Click("Orders|New order...");
  set_info();
  orderForm.ButtonOK.ClickButton();
  
  check_info();
}


function check_info()
{
  listView.ClickItemR(Project.Variables.name);
  listView.PopupMenu.Click("Edit order...");
  
  aqObject.CheckProperty(quantityText, "wText", cmpNotEqual, testQuantity);
  aqObject.CheckProperty(priceText, "wText", cmpEqual, Project.Variables.price);
  
  orderForm.ButtonOK.Click();
}

function run()
{
  open_orders();
  add_order_rClick();
  add_order_button();
  add_order_from_top();
}
