import UnityEngine.UI;
import UnityEngine;


var cashFlow:int;
public var cashReady:int;
var time:float;
public var displayCash;
public var started:boolean;
// Use this for initialization
function Start () {
	cashReady = 100;
	cashFlow = 10;
	started = false;
	
}

// Update is called once per frame
function Update () {
	
if(Network.isServer || Network.isClient)
{
	if(cashReady != int.Parse(displayCash.text))
		cashReady = displayCash.text;
	if (time <= Time.time - 3) {
		time=Time.time;
		cashReady+=cashFlow;
	}
	displayCash = ("$" + cashReady.ToString());
}
}

public function changeCash(temp:int){
	cashReady+=temp;
}

public function changeFlow(temp:int){
	cashFlow+=temp;
}
public function getCash(){
	return cashReady;
}
function OnConnectedToServer(){
	displayCash = GameObject.FindWithTag("money").GetComponent(UI.Text);
}
function OnPlayerConnection() {
	displayCash = GameObject.FindWithTag("money").GetComponent(UI.Text);
}