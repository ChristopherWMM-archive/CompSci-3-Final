import UnityEngine.UI;

var ready;
var countdown:int = 20;
var timer:float;
var show:GameObject;
var display:UI.Text;
var oneTime;
var buttonRow:GameObject;
function Start () {
	oneTime = true;
	ready = false;
	show.SetActive(false);
	buttonRow.SetActive(false);
}
function Update () {
	if(ready)
	{
		if(oneTime)
		{
			show.SetActive(true);
			display.text = "20";
			oneTime = false;
		}
		timer = timer + Time.deltaTime;
		if(timer>=1.0)
			counter();
		if(countdown <= 0)
		{
			buttonRow.SetActive(true);
			show.SetActive(false);
		}
	}
}
function counter () {
	timer = 0;
	countdown--;
	display.text = (countdown.ToString());
}
function OnPlayerConnected(){
	ready = true;
}
function OnConnectedToServer(){
	ready = true;
}
