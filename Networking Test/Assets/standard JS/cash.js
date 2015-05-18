import UnityEngine.UI;
import UnityEngine;

var heroDisplay : GameObject;
var zeroDisplay : GameObject;
var currentDisplay;
var cashFlow:int;
var time:int;
public var upgradeWalletIncrement:int = 100;
public var maxMoney:int = 100;
public var cashReady:int;
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
		Invoke("addCash", period);
		if(cashReady != int.Parse(currentDisplay.text.subString(1,currentDisplay.text.length+1)))
			cashReady = int.Parse(currentDisplay.text.subString(1,currentDisplay.text.length+1));
		updateDisplay();
	}
	
}

public function addCash(){
	CancelInvoke();
	if(cashReady <= (maxMoney-cashFlow))
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
	currentDisplay.GetComponent(UI.Text).text = ("$" + cashReady.ToString());
}

function OnConnectedToServer(){
	heroDisplay.gameObject.SetActive(true);
	started = true;
	currentDisplay = heroDisplay.GetComponent(UI.Text);
}

function OnPlayerConnected() {
	zeroDisplay.SetActive(true);
	started = true;
	currentDisplay = zeroDisplay.GetComponent(UI.Text);
}
function upgradeWallet(){
	maxMoney += upgradeWalletIncrement;
}
