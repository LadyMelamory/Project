var detect = navigator.userAgent.toLowerCase();
var OS,browser,version,total,thestring;

if (checkIt('konqueror'))
{
	browser = "Konqueror";
	OS = "Linux";
}
else if (checkIt('safari')) browser = "Safari"
else if (checkIt('omniweb')) browser = "OmniWeb"
else if (checkIt('opera')) browser = "Opera"
else if (checkIt('webtv')) browser = "WebTV";
else if (checkIt('icab')) browser = "iCab"
else if (checkIt('msie')) browser = "Internet Explorer"
else if (!checkIt('compatible'))
{
	browser = "Netscape Navigator"
	version = detect.charAt(8);
}
else browser = "An unknown browser";

if (!version) version = detect.charAt(place + thestring.length);

if (!OS)
{
	if (checkIt('linux')) OS = "Linux";
	else if (checkIt('x11')) OS = "Unix";
	else if (checkIt('mac')) OS = "Mac"
	else if (checkIt('win')) OS = "Windows"
	else OS = "an unknown operating system";
}

function checkIt(string)
{
	place = detect.indexOf(string) + 1;
	thestring = string;
	return place;
}

//check browser

count=1;
// flag - for making sure that double feed is deleted when needed
var onlydown,wasenter,backcolor,darkcolor,lightcolor;
var globalCursorPos,secondCursor,virtualkey,firstchange,shorti,deadkey,inkeybord,fftemp,ffflag;
var special=new Array(2,0,0,0,0,0,0);
var dkey=new Array()
var enterh1,enterh2
if (window.getSelection)
{
	enterh1=33
	enterh2=68
	difkeyfirefox=59
	difkeyfirefox2=109
	difkeyfirefox3=61


}
else
{
	enterh1=31
	enterh2=64
	difkeyfirefox=186
	difkeyfirefox2=189
	difkeyfirefox3=187
}
mover=1;
ffflag=false;
deadkey=-1;
backcolor="#D6D3D3" //#CCCCCC #C0C0C0
darkcolor="#C6C1AF" //#C6C1AF #A7A7A7
lightcolor="#FFFFFF" //#ECE9D8 #FFFFFF
virtualPos=0;
firstchange=true;
wasenter = false;
first=true;
virtualkey=false;

onlydown=false;
var curtex,firstsect
var row,count,countb,mode,lastkey,olderkey,oldestkey,countc,selend,selstart,mover
mode=0
lastkey=0
olderkey=0
oldestkey=0
countc=0
selend=0
selstart=0


var keybord=new Array()
keybord[0]=new Array("40","40","40","40","40","40","40","40","40","40","40","40","40","78")
keybord[1]=new Array("61","40","40","40","40","40","40","40","40","40","40","40","40","11")
keybord[2]=new Array("71","40","40","40","40","40","40","40","40","40","40","40","40","50")
keybord[3]=new Array("50","40","40","40","40","40","40","40","40","40","40","40","110")
keybord[4]=new Array("74","74","328","74","74")

dkey[0]=new Array("0x0060","0x00B4","0x005E","0x00A8","0x007E","0x00B8","0x02D9","0x00B0","0x02C7","0x02D8","0x02DB","0x02DD","0x0027","0x0385","0x0384","0x00B7")
dkey[1]=new Array("0x0300","0x0301","0x0302","0x0308","0x0303","0x0327","0x0307","0x030A","0x030C","0x0306","0x0328","0x030B","0x0301","0x0344","0x0301","0x0307")


var keycodes=new Array("192","49","50","51","52","53","54","55","56","57","48",difkeyfirefox2,difkeyfirefox3,"8","9","81","87","69","82","84","89","85","73","79","80","219","221","13","20","65","83","68","70","71","72","74","75","76",difkeyfirefox,"222","220","13","16","226","90","88","67","86","66","78","77","188","190","191","16","17","18","32","18","17")
var us_keybord_show=new Array("`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","Q","W","E","R","T","Y","U","I","O","P","","221","13","20","65","83","68","70","71","72","74","75","76","186","222","220","13","16","226","90","88","67","86","66","78","77","188","190","191","16","17","91","18","32","18","92","93","17")

var overit=true;

//function cookieone()
//{
//  document.cookie=curtex.name +"=" + escape(curtex.value) +"!~!#!@!"
//}



function overide()
{
if (overit)
{
document.onkeydown = "";
document.onkeyup = "";
document.onkeypress = "";
scnbord.style.display="none"
//langtitle.style.display="none"
//langch.style.display="none"
//var d = document.getElementsByName("over")
//for(i=0;i<d.length;i++){
//d[i].checked=false
//}
}
else
{
document.onkeydown = keyHandlerdown;
document.onkeyup = keyHandlerup;
document.onkeypress = keyHandlerpress;
scnbord.style.display="block"
//langtitle.style.display="block"
//langch.style.display="block"
//var d = document.getElementsByName("over")
//for(i=0;i<d.length;i++){
//d[i].checked=true
//}


}
overit=!overit;

}




function showit(wh)
{
	if (document.getElementById(wh).style.display=="none") document.getElementById(wh).style.display="block"
	else document.getElementById(wh).style.display="none"
}

function showcc(wh)
{
 document.getElementById("mail_"+wh).style.display="block";
 document.getElementById("over_mail_"+wh).style.display="block";
 document.getElementById("m"+wh).style.display="block";
 document.getElementById(wh).style.display="none";
}


function checkandsend()
{
var sendmail=true
var tempstring=""
var wrongbox=""


if(sendmail && (document.getElementById("mail_to").value==""))
{
  sendmail=false
  alert('Please Specify at least one recipient in the "To" field')
}

if(sendmail && (document.getElementById("mail_from").value==""))
{
  sendmail=false
  alert('Please Specify your E-mail address in the "From" field')
}

if(sendmail && (document.getElementById("textbox1").value==""))
{
  sendmail=confirm('Send this message without text in the body?')
}

if(sendmail && (document.getElementById("mail_subject").value==""))
{
  sendmail=confirm('Send this message without a subject?')
}



if(sendmail)
{
if((document.getElementById("mail_from").value.indexOf('@')==-1)) sendmail=false;
if((document.getElementById("mail_to").value.indexOf('@')==-1)) sendmail=false;
if((document.getElementById("mail_cc").value.indexOf('@')==-1) && (document.getElementById("mail_cc").value.length>0)) sendmail=false;
if((document.getElementById("mail_bcc").value.indexOf('@')==-1) && (document.getElementById("mail_bcc").value.length>0)) sendmail=false;
if (!sendmail) alert('Please make sure that email addresses contain exactly one "@" sign');
}

if(sendmail)
{
	tempstring=document.getElementById("mail_from").value;
	var temparray = new Array();
	temparray = tempstring.split('@')
	if (temparray[2]!=null) { sendmail=false }
	temparray = tempstring.split(',')
	if (temparray[1]!=null && temparray[0]!="" && temparray[1]!="") { sendmail=false }
	temparray = tempstring.split(';')
	if (temparray[1]!=null && temparray[0]!="" && temparray[1]!="") { sendmail=false }
	temparray = tempstring.split(' ')
	if (temparray[1]!=null && temparray[0]!="" && temparray[1]!="") { sendmail=false }
    if(!sendmail) alert('Please Specify only one address in the "From" field')
	
}



if(sendmail)
{
var fields = new Array("mail_from","mail_to","mail_cc","mail_bcc")
var fieldsname = new Array("From","To","Cc","Bcc")
var sepe = new Array(",")

for (field in fields)
{
	curfield=document.getElementById(fields[field]).value
	if (curfield!="" && sendmail)
	{
	var noreturn = new Array();
	noreturn = curfield.split("\r\n")
	var nf=""
	for (parts in noreturn)
	{
		nf=nf+noreturn[parts]
	}
	document.getElementById(fields[field]).value=nf
	
	var noreturn = new Array();
	noreturn = curfield.split(";")
	var nf=""
	for (parts in noreturn)
	{
		if (parts==0)
		 { nf=nf+noreturn[parts];
		 }
		 else
		 { nf=nf+","+noreturn[parts];
		 }
	}
	document.getElementById(fields[field]).value=nf
	
	
	curfield=document.getElementById(fields[field]).value
	
	var gotit = false
	for (s in sepe)
	{
		var temparray = new Array();
		temparray = curfield.split(sepe[s])
		
		if (temparray[1]!=null && temparray[0]!=""  && temparray[1]!="")
		{
		gotit=true;
		for (email in temparray)
		{
			var emailarray = new Array();
			
			emailarray = temparray[email].split('@')
			if (emailarray[1]==null || emailarray[1]=="" || emailarray[2]!=null) 
				{ sendmail=false }
		  	else
			{
				var emailendarray = new Array();
				emailendarray = emailarray[1].split('.')
				if (emailendarray[4]!=null || emailendarray[0]=="" || emailendarray[0]==null || emailendarray[1]=="" || emailendarray[1]==null) { sendmail=false }
			}
		}
		}
		
	}
	
	if(!gotit)
	{
		var emailarray = new Array();
		emailarray = curfield.split('@')
		if (emailarray[1]==null || emailarray[1]=="" || emailarray[2]!=null) 
		{ sendmail=false }
		else
		{
			var emailendarray = new Array();
			emailendarray = emailarray[1].split('.')
			if (emailendarray[4]!=null || emailendarray[0]=="" || emailendarray[0]==null || emailendarray[1]=="" || emailendarray[1]==null) { sendmail=false }
		}
	}

	if(!sendmail) alert('Some addresses in the "'+fieldsname[field]+'" field were not recognized, Please make sure that all addresses are properly formed.');
	}
}
}


if(sendmail) 
	{
		if (document.getElementById("mecopy").checked)
		{
			document.getElementById("mail_bcc").value=document.getElementById("mail_bcc").value+","+ document.getElementById("mail_from").value
		}
		document.feedbackform.submit(); 
		if (document.getElementById("mecopy").checked)
		{
			document.getElementById("mail_bcc").value=document.getElementById("mail_bcc").value.substring(0,document.getElementById("mail_bcc").value.lastIndexOf(','+document.getElementById("mail_from").value))
		}
		
	}
}

function sectchange(wh)
{
if (wh==99) 
	{
		top.location.href = '?language='+langname+'&show=/'
		
	}
else
	{
document.langform.sec.value=wh;
if (secto==99) document.langform.show.value="";
laychange()
	}
}

function laychange()
{
if (document.langform.lay.value==defnum) document.langform.lay.value=1;
document.langform.submit(); 
}

function langchange()
{
document.langform.lay.value=1;
document.langform.submit(); 
}

function littlesearch()
{
	document.gog.textbox1.name="q"
	document.gog.submit(); 
	document.gog.textbox1.name="textbox1"
}

function dmozsearch()
{
	top.location.href = '?language='+langname+'&search='+document.gog.textbox1.value
}



function gowiki(lann)
{
window.open("wikipedia.asp?lang=" + lann + "&q="+document.wiki.q.value,"testwindow","width=640,height=480,resizable=1,scrollbars=1")

}

function colorbox(wh)
{
	if (document.getElementById("over"+wh).checked)
	{
		document.getElementById(wh).style.background= "#FFFFFF";
		document.getElementById(wh).style.borderWidth="1";
		if (!overit) overide();
	}
	else
	{
		document.getElementById(wh).style.background= "#C1C1C1";
		document.getElementById(wh).style.borderWidth="1";
		if (overit) overide();
	}

}

function toogleboard(wh)
{
if (document.getElementById("over"+wh).checked)
{
if (!overit) overide();
shorti=false;
curtex = document.getElementById(wh);

switch(wh)
		{ case "wikitextbox": shorti=true; break;
		case "q": shorti=true; break;
		case "search": shorti=true; break;
		case "mail_from": shorti=true; break;
		case "mail_to": shorti=true; break;
		case "mail_cc": shorti=true; break;
		case "mail_bcc": shorti=true; break;
		case "txtTitle": shorti=true; break;
		case "txtUser": shorti=true; break;
		case "message": shorti=true; break;
		case "term": shorti=true; break;
        }
}
else
{
	if (overit) overide();
	if (secto==8 || secto==99) 
	{
		curtex = document.getElementById(wh);
		overit=true;
		overide()
	}
}
}




function selcop(wh)
{
document.getElementById(wh).select()
Copied = getSel()
Copied.execCommand("Copy");
}

function getSel()
{
	var txt = '';
	if (window.getSelection)
	{
		var startPos = curtex.selectionStart;
        var endPos = curtex.selectionEnd;   
        txt=curtex.value.substring(startPos, endPos);
	}
	else if (document.getSelection)
	{
		txt = document.getSelection();
	}
	else if (document.selection)
	{
		txt = document.selection.createRange();
		
	}
	else return;
	return txt;
}


function delselect()
{
var element = curtex;

	
range = getSel()

	if (window.getSelection)
	{
		
		 selstart = curtex.selectionStart;
         selend = curtex.selectionEnd;   
		

	}
	else 
	{
		if(!virtualkey || (firstchange && virtualkey))
		{
var stored_range = range.duplicate();
stored_range.moveToElementText(element);
stored_range.setEndPoint( 'EndToEnd', range );
element.selectionStart = stored_range.text.length - range.text.length;

element.selectionEnd = element.selectionStart + range.text.length;
selstart = element.selectionStart
selend=element.selectionEnd
		}
		else
		{
			selend+=mover;
		}

	}
}


function getCursorPos(textElement) {
	delselect()
	if (window.getSelection)
	{
		 return selstart;   
	
	}
	else 
{
  if ((selend-selstart)<=1) 
  {
  var sOldText = textElement.value;

//create a range object and save off it's text
  var objRange = document.selection.createRange();
  var sOldRange = objRange.text;

//set this string to a small string that will not normally be encountered
  var sWeirdString = '#%~';

//insert the weirdstring where the cursor is at
  objRange.text = sOldRange + sWeirdString; 
  objRange.moveStart('character', (0 - sOldRange.length - sWeirdString.length));

//save off the new string with the weirdstring in it
  var sNewText = textElement.value;

//set the actual text value back to how it was
  objRange.text = sOldRange;

//look through the new string we saved off and find the location of
//the weirdstring that was inserted and return that value
  for (i=0; i <= sNewText.length; i++) {
    var sTemp = sNewText.substring(i, i + sWeirdString.length);
    if (sTemp == sWeirdString) {
      var cursorPos = (i - sOldRange.length);
      return cursorPos;
    }
  }
  }
  else return selstart;
}
}


function secCursor(position)
{
var xd
xd=position
for(i=1;i<=position;i++)
   {
 
    if(curtex.value.substring(i-1,i)=="\n") 
		{	
		      xd=xd-1;
  		}  
  }
  return xd;
}


function setCursorPos() 
{
  virtualkey=false
  delselect()
 // if (window.getSelection) globalCursorPos=selstart-mover else 
  globalCursorPos=getCursorPos(curtex);
  secondCursor=  secCursor(globalCursorPos)
}

function writeit(stringToInsert) 
{

  if (!virtualkey) setCursorPos()
  else
  {
   // if (!window.getSelection) selend=globalCursorPos+mover;
	globalCursorPos+=mover
	secondCursor=secCursor(globalCursorPos)
  }
 mover=stringToInsert.length
 
 
  if (stringToInsert=="\b") 
  {
   if ((firstchange && !virtualkey) || !firstchange)
    {
	globalCursorPos-=1
	stringToInsert=""
	 mover=mover-1
  	}
  }
  
  
  x=1
   
  while (curtex.value.substring(globalCursorPos-2*x,globalCursorPos-2*(x-1))=="\r\n" && !virtualkey)  
     { 
	   selend=selend+2
   	  x+=1
	 }

  var firstPart = curtex.value.substring(0, globalCursorPos);
  var secondPart = curtex.value.substring(selend,curtex.value.length);
  curtex.value = firstPart + stringToInsert + secondPart;
 	
	if (window.getSelection)
	{
		
  curtex.selectionStart=globalCursorPos+mover
   curtex.selectionEnd=globalCursorPos+mover
 
		
	}
	else 
 {
	
 var r = curtex.createTextRange()
 r.move("character",secondCursor+mover)
  r.select();
  
 }
 	
}


function givethekey(strrep)
{
if (strrep.substring(0,2)=="0x") 
		{			
			var tco
			var addstr=""
 			tco=strrep.indexOf("0x",tco)
			while (tco!="-1")
				{
				 addstr= addstr+String.fromCharCode(strrep.substring(tco,tco+6))
				 tco=strrep.indexOf("0x",tco+1)
				}
		    return addstr;
	   	 }
		else return strrep;
}

 function writethekey(countc)
{
	 var curkey = keybord_chars[mode][countc-1];
var printt=true;

var whichdead=2;
if(deadkey!=-1)
{
	if(dkey[2][deadkey].indexOf(givethekey(curkey))!=-1) {
				whichdead=1;
	}
	else
	  {
		whichdead=0;
	  }
}
else
{
for(d=0;d<=16;d++)
{
	 if(curkey==dkey[0][d] && dkey[2][d]!="") 
	 	{
			deadkey=d;
			printt=false;
		}
}
}

if (printt){
if (whichdead==0) {  
writeit(givethekey(dkey[whichdead][deadkey]));
deadkey=-1;
} 
if (!((countc==28 || countc==42) && shorti)) writeit(givethekey(curkey));

if (whichdead==1) { writeit(givethekey(dkey[whichdead][deadkey])); 
deadkey=-1;
}
}
}



function press(countc)
{
//var currenttext=document.createTextNode("ilan");
var specialkey=false
var colors="#93B9FF"
	for(i=13;i<=20;i++)
	{
	  if (keycodes[countc-1]==i)
	   { 
	     specialkey=true
		 colors=backcolor
		  if (i==20 && special[4]==1) colors=backcolor
		  else if (i>=15 && special[i-15]==0) colors="#FF9393"
		if(i==13) colors="#FF9393"
	   }
	}
	
if (!specialkey)
{
    if(olderkey!=0)
		{
		var mytable=document.getElementById("uni"+olderkey)
		mytable.setAttribute("bgColor",backcolor );
		}
	if(lastkey!=0)
		{
		var mytable=document.getElementById("uni"+lastkey)
		mytable.setAttribute("bgColor","#FCFCFC");
		oldestkey=olderkey
		}
    olderkey=lastkey
	lastkey=countc
}
		

    var mytable=document.getElementById("uni"+countc)
    myrow=mytable.getElementsByTagName("tr").item(0);
    mycel=myrow.getElementsByTagName("td").item(0);
	mytable.setAttribute("borderColorDark",lightcolor);
	mytable.setAttribute("borderColorLight",darkcolor);
	mytable.setAttribute("bgColor",colors);
	mytable.style.borderLeftWidth="thick";
	mytable.style.borderRightWidth="medium";
	mytable.style.borderTopWidth="thick";
	mytable.style.borderBottomWidth="medium";
	
}



function unpress(countc)
{
//var currenttext=document.createTextNode("ilan");
	
var mytable=document.getElementById("uni"+countc)
myrow=mytable.getElementsByTagName("tr").item(0);
mycel=myrow.getElementsByTagName("td").item(0);
mytable.setAttribute("borderColorDark",darkcolor);
mytable.setAttribute("borderColorLight",lightcolor);
	mytable.style.borderLeftWidth="medium";
	mytable.style.borderRightWidth="thick";
	mytable.style.borderTopWidth="medium";
	mytable.style.borderBottomWidth="thick";
	//border-left-width:medium; border-top-width:thin;  border-right-width:thick; border-bottom-width:thick;
	
   for(i=13;i<=19;i++)
	{
	  if (keycodes[countc-1]==i && special[i-15]==0)
	   { 
	         mytable.setAttribute("bgColor",backcolor);
	   }
	   
	}
	  if (keycodes[countc-1]==13)
	   { 
	         mytable.setAttribute("bgColor",backcolor);
	   }
	
}

function changemode(keylog,downup)
{
var multy,pmode
for(i=16;i<19;i++)
{ //shift,ctrl,alt,,caps
	if (keylog==i && special[i-15]!=downup) special[i-15]=downup
}
if (keylog==20 && downup==1) special[4]=!special[4];


multy=1;
if (special[4]) multy*=2; //caps
if (special[1]) multy*=3; //shift
if (special[2]) multy*=5;//ctrl
if (special[3]) multy*=7; //alt

pmode=mode
if (multy==1) mode=0; //nothing
if (multy==3) mode=1; //shift
if (multy==35) mode=2; //alt Gr (alt+ctrl)
if (multy==105) mode=3; //alt Gr (alt+ctrl) +shift

if (multy==2) mode=4; //caps
if (multy==6) mode=5; //caps + shift
if (multy==70) mode=6; //caps + alt Gr (alt+ctrl)
if (multy==210) mode=7; //caps + alt Gr (alt+ctrl) +shift

if (multy==5) mode=8;
if (multy==15) mode=9;
if (pmode!=mode) drawchars(fonts)
}




function virtualHandlerPress(keycount)
{
	
press(keycount)
if (keycount==28) press(42)
if (keycount==42) press(28)
if (!virtualkey) firstchange=true
else firstchange=false; 

delselect()

countb=1
for(i=16;i<19;i++)
{ //shift,ctrl,alt,,caps
	if (keycodes[keycount-1]==i) 
		{
		  if (special[i-15]==0) changemode(keycodes[keycount-1],1)
		  else changemode(keycodes[keycount-1],0)
		}
}

	if (keycodes[keycount-1]==20) changemode(keycodes[keycount-1],1);
		 

writethekey(keycount)
virtualkey=true;
//cookieone();
}

function virtualHandlerUp(keycount)
{
unpress(keycount); 
if (keycount==28) unpress(42)
if (keycount==42) unpress(28)
}


function keyHandlerpress(e)
{
if (!window.getSelection) e = window.event;
if (e.keyCode!=32 && e.keyCode!=222)
{
if (virtualkey) firstchange=true
else firstchange=false; 
onlydown=false;
curtex.focus()
if (inkeybord && !wasenter) {
			writethekey(countc)
			if (!onlydown) 
			{curtex.blur()
			
			}
			
if(browser=="Safari")
  {
  var firstPart = curtex.value.substring(0, globalCursorPos);
  var secondPart = curtex.value.substring(curtex.selectionEnd,curtex.value.length);
  curtex.value = firstPart + secondPart;
  curtex.selectionStart=globalCursorPos-mover
  curtex.selectionEnd=globalCursorPos-mover
  }
  
virtualkey=false;
}
if (wasenter && shorti) 
	{
	curtex.blur()
	if (curtex.id=="term")
		{
				document.transbox.onsubmit()
				document.transbox.submit();
		}
	if (curtex.id=="q")
		{
			if (secto==4) document.wiki.wikibutton.onclick(); 
			if (secto==3) document.googlesearch.submit(); 
					
				
		}
	if (curtex.id=="message")
		{
			sendMessage();
		}
	}
countc=0

//cookieone();
// cleanwaste()

}
}

function keyHandlerpressnothing(e)
{
 	curtex.focus()
	
}

function keyHandlerdown(e)
{
	curtex.focus()
	if (!window.getSelection) e = window.event;

	


wasenter=false
if (e.keyCode==13) {wasenter=true;} 

countc=1
countb=1
inkeybord=false;

for (key in keycodes)
{
 if (e.keyCode==keycodes[key]) 
 	{
	
	press(countb)
	//if (e.keyCode==17) writethekey(countc)
	countc=countb
    //writethekey(countc)
	inkeybord=true;
	if (e.keyCode>=16 && e.keyCode<=20) onlydown=true;
	
	} 
 countb=countb+1
}
changemode(e.keyCode,1); 

if (window.getSelection ) 
{
	
	
		if (e.keyCode!=186 && e.keyCode!=191) document.onkeypress=keyHandlerpressnothing(e);
		
	if (e.keyCode!=8 && e.keyCode!=32) keyHandlerpress(e);
}

}
 
 
function keyHandlerup(e)
{
	if (window.getSelection) document.onkeypress = keyHandlerpress;
	
	
	if (!window.getSelection) e = window.event;
	
	
curtex.focus()


if (e.keyCode>=16 && e.keyCode<=20) onlydown=false;
changemode(e.keyCode,0)
	if (onlydown && inkeybord && keybord_chars[mode][countc-1]!="" && keybord_chars[mode][countc-1]!="0x0000") writethekey(countc) //in case of keys that dont have a press, (CTRL+1 i.e)


countb=1
for (key in keycodes)
{
	if (e.keyCode==keycodes[key]) unpress(countb);
 	countb=countb+1
}               


wasenter=false;
}



function makecookies()
{
var the_inputs=document.getElementsByTagName("textarea");
for(var n=0;n<the_inputs.length;n++){
 document.cookie=the_inputs[n].name +"=" + escape(the_inputs[n].value) +"!~!#!@!"
}

}

function bakecookies()
{

var the_inputs=document.getElementsByTagName("textarea");

for(var n=0;n<the_inputs.length;n++){
 if(document.cookie.indexOf(the_inputs[n].name)!=-1)
 	{
	if (document.cookie.indexOf(the_inputs[n].name)+the_inputs[n].name.length+1-document.cookie.indexOf("!~!#!@!",document.cookie.indexOf(the_inputs[n].name)+the_inputs[n].name.length)<-1)
	{
   the_inputs[n].value=unescape(document.cookie.substring(document.cookie.indexOf(the_inputs[n].name)+the_inputs[n].name.length+1,document.cookie.indexOf("!~!#!@!",document.cookie.indexOf(the_inputs[n].name)+the_inputs[n].name.length)));
	
	
	}
	}
}


}




function drawchars(dfont)
{
var x
x=1;
controlkey=false
fontsiz=dfont
for (key in keycodes)
{
if (x!=28) {
controlkey=false
var mytable=document.getElementById("uni"+x);
myrow=mytable.getElementsByTagName("tr").item(0);
mycel=myrow.getElementsByTagName("td").item(0);
	ntext = document.createTextNode(givethekey(keybord_chars[1][x-1])+" ");

switch(x)
		{ case 14: ntext = document.createTextNode("Backspace");  controlkey=true;  break;
		  case 15: ntext = document.createTextNode("Tab"); controlkey=true; break;
		  case 28: ntext = document.createTextNode("Enter"); controlkey=true; break;
		  case 42: ntext = document.createTextNode("Enter"); controlkey=true; break;
		  case 29: ntext = document.createTextNode("CapsLock");  controlkey=true; break;
		  case 43: ntext = document.createTextNode("Shift"); controlkey=true; break;
		  case 55: ntext = document.createTextNode("Shift"); controlkey=true; break;
		  case 56: ntext = document.createTextNode("Ctrl"); controlkey=true; break;
		  case 60: ntext = document.createTextNode("Ctrl"); controlkey=true; break;
		  case 57: ntext = document.createTextNode("Alt"); controlkey=true; break;
		  case 59: ntext = document.createTextNode("Alt"); controlkey=true; break;
		}

if (mycel.childNodes.length == 0) 
{
mycel.appendChild(ntext) 
mycel.style.fontSize="10";
mycel.style.color='#666666';
if (controlkey){ mycel.style.fontSize="9"; mycel.style.color='black';}

mycel=myrow.getElementsByTagName("td").item(0);

	ntext = document.createTextNode(" " + givethekey(keybord_chars[mode][x-1]));
if (!controlkey) mycel.appendChild(ntext) 
if(!controlkey) mycel.style.fontSize=fontsiz;
}
else
{
mycel=myrow.getElementsByTagName("td").item(0);
if (mode==1 && !controlkey) 
		{
			mycel.style.color='#000000'; 
			 mycel.style.fontSize=fontsiz;
			}
		else if(!controlkey)
		{
			mycel.style.color='#666666';
			mycel.style.fontSize="10";
		}

mycel=myrow.getElementsByTagName("td").item(0);
if (mode!=1) ntext = document.createTextNode(" "+givethekey(keybord_chars[mode][x-1]))
else ntext=document.createTextNode("")
prentext= mycel.lastChild;
if (!controlkey) mycel.replaceChild(ntext,prentext)
if(!controlkey) mycel.style.fontSize=fontsiz;

}
}
x=x+1
}
}

function drawcell(keycount,keywidth)
{
 block+="<td border='0'><table  cellspacing='0' cellpadding='1' border='0'><tr><td width='"+ keywidth*0.75 +"' height='33'><table style='border-left-width:medium; border-top-width:medium;  border-right-width:thick; border-bottom-width:thick; font-size:11px; font-weight:100; cursor:pointer' id='uni"+keycount+"' height='100%' width='100%' border='2' cellspacing='0' cellpadding='0'  bordercolordark="+darkcolor+" bordercolorlight="+lightcolor+" bgcolor="+backcolor+" onMouseDown='virtualHandlerPress("+keycount+");' onMouseOut='virtualHandlerUp("+keycount+");' onMouseUp='virtualHandlerUp("+keycount+");'><tr><td style='border:0' width='50%'  valign='top' height='100%'></td><td style='border:0' height='100%' width='50%' valign='bottom'></td></tr></table></td></tr></table></td>"; 
}




var block;
block="";


function drawkeyboard()
{


for (row=0;row<=4;row++)
{
     if (count==15)  block+="<table cellspacing='0' cellpadding='0' border='0'><tr><td>";
	 block+="<table cellspacing='0' cellpadding='0'><tr>";
	for (key in keybord[row])
	{
	 if (count!=28 && count!=42 ) drawcell(count,keybord[row][key]);
	if (count==28) block+="<td border='0'><table  cellspacing='0' cellpadding='0' border='0'><tr><td width='"+keybord[row][key]*0.73 +"' height='"+enterh1+"'><table style='border-left-width:medium; border-top-width:medium;  border-right-width:thick; border-bottom-width:thick; border-right:0; font-size:11px; font-weight:100; cursor:pointer' id='uni"+count+"' height='100%' width='100%' border='1' cellspacing='0' cellpadding='0'  bordercolordark="+darkcolor+" bordercolorlight="+lightcolor+" bgcolor="+backcolor+" onMouseDown='virtualHandlerPress("+count+");' onMouseOut='virtualHandlerUp("+count+");' onMouseUp='virtualHandlerUp("+count+");'><tr><td style='border:0' width='40%'  valign='top' height='100%'></td><td style='border:0' height='100%' width='40%' valign='bottom'></td></tr></table></td></tr></table></td>"; 
	if (count==42) {
	block+=("</tr></table>")
	block+="<td border='0'><table  cellspacing='0' cellpadding='0' border='0'><tr><td width='"+keybord[row][key]*0.73 +"' height='"+enterh2+"'><table style='border-left-width:medium; border-top-width:medium;  border-right-width:thick; border-bottom-width:thick; border-left:0 none #000000; font-size:11px; font-weight:100; cursor:pointer' id='uni"+count+"' height='100%' width='100%' border='1' cellspacing='0' cellpadding='0'  bordercolordark="+darkcolor+" bordercolorlight="+lightcolor+" bgcolor="+backcolor+" onMouseDown='virtualHandlerPress("+count+");' onMouseOut='virtualHandlerUp("+count+");' onMouseUp='virtualHandlerUp("+count+");'><tr><td style='border:0' width='40%'  valign='top' height='100%'></td><td style='border:0' height='100%' width='40%' valign='bottom'></td></tr></table></td></tr></table></td>"; 
	}
	 count+=1
	}
block+=("</tr></table>")
}
block+=("</td></tr></table>")

	document.write(block)
	drawchars(15);
}


