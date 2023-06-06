function sum(num_1, num_2)
{
  var num_1_string = aqConvert.VarToStr(num_1);
  var num_2_string = aqConvert.VarToStr(num_2);
  
  var sum_num_1 = 0;
  var sum_num_2 = 0;
  var i = 0;
  
  while(i< aqString.GetLength(num_1_string))
  {
    sum_num_1 += aqConvert.VarToInt(aqString.GetChar(num_1_string, i));
    i++; 
  }

  i=0;
  
  while(i< aqString.GetLength(num_2_string))
  {
     sum_num_2 += aqConvert.VarToInt(aqString.GetChar(num_2_string, i));
     i++; 
  }
  
  return aqConvert.VarToStr(sum_num_1)+aqConvert.VarToStr(sum_num_2);
}


function run()
{
  Log.Message(sum(531, 65)); 
}