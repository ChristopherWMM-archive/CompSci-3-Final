import UnityEngine.UI;
import UnityEngine;


var cashFlow:int;
public var cashReady:int;
var time : float;
public var displayCash;
public var started:boolean;
public var period : float = 5.0;
// Use this for initialization
function Start () {
	cashReady = 100;
	cashFlow = 10;
	started = false;
	displayCash = "0";
}

// Update is called once per frame
function Update () {
	if((Network.isServer || Network.isClient) && started){
		Invoke("addCash",period);
		if(cashReady != int.Parse(displayCash.text))
			cashReady = int.Parse(displayCash.text);
		updateDisplay();
	}
}

public function addCash(){
	CancelInvoke();
	cashReady+=cashFlow;
	updateDisplay();
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

public function updateDisplay(){
	GameObject.FindWithTag("money").GetComponent(UI.Text).text = (cashReady.ToString());
}

function OnConnectedToServer(){
	print("OnConnectedToServer");
	started = true;
	displayCash = GameObject.FindWithTag("money").GetComponent(UI.Text);
}

function OnPlayerConnection() {
	print("OnPlayerConnection");
	started = true;
	displayCash = GameObject.FindWithTag("money").GetComponent(UI.Text);
}