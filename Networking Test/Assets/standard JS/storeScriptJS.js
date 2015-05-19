import UnityEngine.UI;
import UnityEngine;

var money;
var turret1Cost:int = 20;
var turret2Cost:int = 30;
var walletCost:int = 50;
var mineCost:int = 10;
var cashReady:UI.Text;
var walletText:String;
var timer:float;

function Start () {
	walletText = "Upgrade Wallet ";
	timer = 1.0;
}
public function Update() {

}
 public function StorePurchaseJS (whichItem:int) {
	if(Network.isServer ){

		if (whichItem == 4 &&timer >= 1.0){
			timer = 0.0;
				GameObject.FindWithTag ("turretBuilder").GetComponent (buildyStuff).buildTurret(1,1);
				print("I am a turret");
		}
		else if (whichItem == 7 &&timer >=1.0) {
		timer = 0.0;
				GameObject.FindWithTag ("turretBuilder").GetComponent (buildyStuff).buildTurret(1,2);
		}

	}
	else if(Network.isClient )
	{
		cashReady = GameObject.FindWithTag("money2").GetComponent(UI.Text);
		money = int.Parse(cashReady.text.Substring(1));
		if (whichItem == 4 &&timer >= 1.0) {
	timer = 0.0;
				GameObject.FindWithTag ("turretBuilder").GetComponent (buildyStuff).buildTurret(2,1);
				print("I am a turret");
		}
		else if (whichItem == 7  &&timer >=1.0) {
	timer = 0.0;
				GameObject.FindWithTag ("turretBuilder").GetComponent (buildyStuff).buildTurret(2,2);
		}
	
	}
	//GameObject.FindWithTag("walletUpgrade").GetComponent(UI.Text).text = (walletText + "($" + walletCost.ToString() + ")" );
}
function updateDisplay(){
	if(Network.isServer){
		GameObject.FindWithTag("Hero Base").GetComponent(cash).updateDisplay();
	}
	else if(Network.isClient){
		GameObject.FindWithTag("Zero Base").GetComponent(cash).updateDisplay();
	}
}