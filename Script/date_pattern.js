﻿function date()
{
  var year_now = aqDateTime.GetYear(aqDateTime.Now());
  var month_now = aqDateTime.GetMonth(aqDateTime.Now());
  var day_of_month = aqDateTime.GetDay(aqDateTime.Now());
  var day_of_week = aqDateTime.GetDayOfWeek(aqDateTime.Now());
  
  var whole_date =  year_now +":-:"+ month_now + ":-:" + day_of_month;
  Log.Message(whole_date);
  return whole_date;
}
