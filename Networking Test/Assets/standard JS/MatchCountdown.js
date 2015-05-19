import UnityEngine.UI;

var serverReady;
var clientReady;
var countdown:int = 20;
var period;
var display:UI.Text;
var oneTime;
var buttonRow:GameObject;
function Start () {
	period = 1;
	oneTime = true;
}
function Update () {
	if(serverReady && clientReady)
	{
		if(oneTime)
		{
			display.SetActive(true);
			display.text = "20";
		}
		Invoke("counter",period);
		if(countdown <= 0)
		{
			buttonRow.SetActive(true);
		}
	}
}
function counter () {
	countdown--;
	display.text = countdown.ToString();
}
function OnPlayerConnected () {
	serverReady = true;
}
function OnConnectedToServer () {
	clientReady = true;
}