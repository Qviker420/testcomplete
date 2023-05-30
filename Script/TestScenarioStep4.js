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
let listView = mainForm.OrdersView;
let dlgConfirmation = order.dlgConfirmation;
let btnYes = dlgConfirmation.btnYes;


var user_data = {
  name: "Test Name",
  city: "Test City",
  street: "Test Street",
  state: "NYC",
  zip: "0123",
  cardNo: "123123123"
}

var user_data_second = {
  name: "Test 2 Name",
  city: "Test 2 City",
  street: "Test 2 Street",
  state: "NYC2",
  zip: "01232",
  cardNo: "123123123213"
}

function open()
{
  TestedApps.Orders.Run(1, true);
}

function fill_order(name, street, city, zip, card, state)
{
   mainForm.MainMenu.Click("Orders|New order...");
   cityText.SetText(city);
   streetText.SetText(street);
   customerText.SetText(name);
   stateText.SetText(state);
   zipText.SetText(zip);
   
   cardText.SetText(card);
   
   aqObject.CheckProperty(stateText, "wText", cmpEqual, state);
   aqObject.CheckProperty(zipText, "wText", cmpEqual, zip);
   aqObject.CheckProperty(customerText, "wText", cmpEqual, name);
   aqObject.CheckProperty(streetText, "wText", cmpEqual, street);
   
   orderForm.ButtonOK.ClickButton();
}

function delete_orders()
{
  
  listView.ClickItemR(0, "MyMoney");
  listView.PopupMenu.Click("Delete order");
  btnYes.ClickButton();
}

function Test1()
{
   open();
   fill_order(user_data.name, user_data.street, user_data.city, user_data.zip, user_data.cardNo, user_data.state);
   fill_order(user_data_second.name, user_data_second.street, user_data_second.city, user_data_second.zip, user_data_second.cardNo, user_data_second.state);
   delete_orders();
   
   mainForm.Close();
   order.dlgConfirmation.btnNo.ClickButton();
}