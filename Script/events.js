var count = 0;
 
function error_log(count)
{
  if(count<10)
  {
   Log.Error("(!#!@#%#% EROR 001011100100100100011110011010101"); 
  }
}

function event_message(sender, errorInfo)
{
  Log.Message("mess");
  count++;
}

function run()
{
  while(true)
  {
    error_log(count); 
  }
}

// ნავიგაცია :::: სტეპ 3 გაწერილია DesignPatternHW/main/orderInfo ში <3