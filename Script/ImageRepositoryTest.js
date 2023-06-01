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

function add_order()
{
  TestedApps.Orders.Run(1, true);
  ImageRepository.add_item_button.add_order.Click();
  customerText.SetText(Project.Variables.name);
  cityText.SetText(Project.Variables.city);
  stateText.SetText(Project.Variables.state);
  streetText.SetText(Project.Variables.street);
  zipText.SetText(Project.Variables.zip);
  cardText.SetText(Project.Variables.card_no);
  priceText.SetText(Project.Variables.price);
}