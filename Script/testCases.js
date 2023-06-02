const main_page = require("mainPage");
const order_info = require("orderInfo");

function test_toolbar_order()
{
  TestedApps.Orders.Run(1, true);
  main_page.mainPage.make_new_order_toolbar();
  order_info.orderInfo.set_order_info();
  main_page.mainPage.edit_for_check();
  order_info.orderInfo.check_order_info();
}

function test_button_order()
{
  main_page.mainPage.new_order_list();
  order_info.orderInfo.set_order_info();
  main_page.mainPage.edit_for_check();
  order_info.orderInfo.check_order_info();
}

module.exports.testCases = new test_toolbar_order();
