import UnityEngine.UI;
import UnityEngine;

var heroDisplay : GameObject;
var zeroDisplay : GameObject;
var currentDisplay:UI.Text;
var cashFlow:int;
var time:int;
var oneTime;
var timer:float;
public var upgradeWalletIncrement:int = 100;
public var maxMoney:int = 300;
public var cashReady:int;
public var started:boolean;
public var period : float = 5.0;
// Use this for initialization
function Start () {
	cashReady = 100;
	cashFlow = 10;
	started = false;
	oneTime = true;
	timer = 0;
}

// Update is called once per frame
function Update () {
	if((Network.isServer || Network.isClient) && started){
	if(cashReady >= (maxMoney-10))
		cashFlow = 0;
	else if(cashReady <= (maxMoney-10))
		cashFlow = 10;
		
		timer = timer + Time.deltaTime;
		if(timer >= 5)
		{
			timer = 0;
			addCash();
		}
		
		if(oneTime)
		{
			currentDisplay.text = ("$100");
			oneTime = false;
		}
		if(!((int.Parse(currentDisplay.text.Substring(1))).Equals(cashReady)))
			cashReady = int.Parse(currentDisplay.text.Substring(1));
		updateDisplay();
	}
	
}

public function addCash(){

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
	zeroDisplay.gameObject.SetActive(true);
	started = true;
	currentDisplay = zeroDisplay.GetComponent(UI.Text);
}
function upgradeWallet(){
	if(maxMoney < 900)
		maxMoney += upgradeWalletIncrement;
}
