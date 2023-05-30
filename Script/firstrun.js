function hello_world()
{
  Log.Message("Hello World");
}

function order_test()
{
  KeywordTests.open_order.Run();
  KeywordTests.add_order.Run();
  KeywordTests.close_app.Run();
}