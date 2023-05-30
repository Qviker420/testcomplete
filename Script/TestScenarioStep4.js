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
   aqObject.CheckProperty(streetText, "Enabled", cmpEqual, true);
   customerText.SetText(name);
   aqObject.CheckProperty(customerText, "Enabled", cmpEqual, true);
   stateText.SetText(state);
   zipText.SetText(zip);
   aqObject.CheckProperty(zipText, "Enabled", cmpEqual, true);
   cardText.SetText(card);
   orderForm.ButtonOK.ClickButton();
}

function Test1()
{
   open();
   fill_order(user_data.name, user_data.street, user_data.city, user_data.zip, user_data.cardNo, user_data.state);
   fill_order(user_data_second.name, user_data_second.street, user_data_second.city, user_data_second.zip, user_data_second.cardNo, user_data_second.state);
   mainForm.Close();
   Aliases.Orders.dlgConfirmation.btnNo.ClickButton();
}
