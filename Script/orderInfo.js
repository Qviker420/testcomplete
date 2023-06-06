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
     this.address = "თბილისი, ნუცუბიძის 72, 0177";
  }
  
  set_order_info()
  {
    var zip = aqString.SubString(this.address, 22, 26);
    var city = aqString.SubString(this.address, 0, 6);
    Aliases.Orders.OrderForm.Group.WinFormsObject("label8").eqauls("Street:");
    this.customerText.Keys(Project.Variables.name);
    this.customerText.Keys("^a[Del]");
    this.customerText.Keys(Project.Variables.name);
    this.cityText.Keys(city);
    this.stateText.SetText(Project.Variables.state);
    this.streetText.Keys(this.address);
    this.zipText.Keys(zip);
    this.cardText.SetText(Project.Variables.card_no);
    this.priceText.SetText(Project.Variables.price);
    this.okButton.Click();
  }
  
  check_order_info()
  {

  //  aqObject.CheckProperty(this.priceText, "wText", cmpEqual, Project.Variables.price);
    this.okButton.Click();
  }
}

module.exports.orderInfo = new OrderInfo();