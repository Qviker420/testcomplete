class OrderInfo
{
  constructor()
  {
     this.customerText = Aliases.Orders.OrderForm.Group.Customer;
     this.cityText = Aliases.Orders.OrderForm.Group.City;
     this.streetText = Aliases.Orders.OrderForm.Group.Street;
     this.zipText = Aliases.Orders.OrderForm.Group.Zip;
     this.stateText = Aliases.Orders.OrderForm.Group.State;
     this.cardText = Aliases.Orders.OrderForm.Group.CardNo;
     this.priceText = Aliases.Orders.OrderForm.Group.Price;
     this.okButton = Aliases.Orders.OrderForm.ButtonOK;
  }
  
  set_order_info()
  {
    this.customerText.SetText(Project.Variables.name);
    this.cityText.SetText(Project.Variables.city);
    this.stateText.SetText(Project.Variables.state);
    this.streetText.SetText(Project.Variables.street);
    this.zipText.SetText(Project.Variables.zip);
    this.cardText.SetText(Project.Variables.card_no);
    this.priceText.SetText(Project.Variables.price);
    this.okButton.Click();
  }
  
  check_order_info()
  {
    aqObject.CheckProperty(this.qntText, "wText", cmpEqual, Project.Variables.Quantity);
    aqObject.CheckProperty(this.priceText, "wText", cmpEqual, Project.Variables.price);
    this.okButton.Click();
  }
}

module.exports.orderInfo = new OrderInfo();