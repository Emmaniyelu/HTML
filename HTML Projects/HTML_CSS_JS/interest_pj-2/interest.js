//defining a functionfor finding interest amount
function getAmount()
{
  let p,t,r,si,tamt;	//local vars
  //data coll
  p=pamt.value;
  t=time.value;
  r=roi.value;
  
  //calc's
  si=p*t*r/100;
  tamt=+p+si;
  
  //displaying op
  intAmt.innerHTML="Interest amount	:&#8377;"+si;
  totAmt.innerHTML="Total amount	:&#8377;"+tamt;
}