var max = 1000000;
var min = 0;
var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

let orders = Aliases.Orders;
let mainForm = orders.MainForm;
let orderForm = orders.OrderForm;
let groupBox = orderForm.Group;
let okButton = orderForm.ButtonOK;
let cardText = groupBox.CardNo;
let listView = mainForm.OrdersView;

function generate_random()
{
  var max = 1000000;
  var min = 0;
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

function FillRandom(){
  TestedApps.Orders.Run(1, true);
  mainForm.ToolBar.ClickItem(4, false);
  cardText.Click();
  cardText.Keys(generate_random()+"^A^C");
  var val = Sys.Clipboard;
  Log.Message(val);
  okButton.Click();
  listView.DblClickItem(0, "MyMoney");
  cardText.Click();
  var new_val = "123123"
  cardText.Keys("^A"+ new_val);
  okButton.Click();
  listView.DblClickItem(0, "MyMoney");
  aqObject.CheckProperty(cardText, "wText", cmpEqual, new_val);
  okButton.Click();
}