import UnityEngine.UI;

var money;
var turret1Cost:int = 20;
var turret2Cost:int = 30;
var walletCost:int = 50;
var mineCost:int = 10;

var walletText:String;
public var store;

function Start () {
	walletText = "Upgrade Wallet \n";
}

 public function StorePurchaseJS (whichItem:int) {

	if(Network.isClient)
	{
		//insert money qualifications here
			if (whichItem == 4) {
				if(GameObject.FindWithTag ("Hero Base").GetComponent(cash).cashReady >= turret1Cost){
					GameObject.FindWithTag ("Hero Base").GetComponent(cash).cashReady -= turret1Cost;
					GameObject.FindWithTag ("turretBuilder").GetComponent (buildyStuff).buildTurret(1,1);
				}
			}
			else if (whichItem == 5) {
				if(GameObject.FindWithTag ("Hero Base").GetComponent(cash).cashReady >= turret2Cost){
					GameObject.FindWithTag ("Hero Base").GetComponent(cash).cashReady -= turret2Cost;
					GameObject.FindWithTag ("turretBuilder").GetComponent (buildyStuff).buildTurret(2,1);
				}
			}else if (whichItem == 6) {
				if(GameObject.FindWithTag ("Hero Base").GetComponent(cash).cashReady >= walletCost){
					GameObject.FindWithTag ("Hero Base").GetComponent(cash).cashReady -= walletCost;
					GameObject.FindWithTag ("Hero Base").GetComponent(cash).upgradeWallet();
					walletCost = walletCost * 1.5;
				}
			}
			GameObject.FindWithTag ("Hero Base").GetComponent(cash).updateDisplay();
	}
	else if(Network.isServer)
	{	
		//insert other money qualifications here
		if (whichItem == 4) {
			if(GameObject.FindWithTag ("Zero Base").GetComponent(cash).cashReady >= turret1Cost){
				GameObject.FindWithTag ("Zero Base").GetComponent(cash).cashReady -= turret1Cost;
				GameObject.FindWithTag ("turretBuilder").GetComponent (buildyStuff).buildTurret(1,2);
			}
		}
		else if (whichItem == 5) {
			if(GameObject.FindWithTag ("Zero Base").GetComponent(cash).cashReady >= turret2Cost){
				GameObject.FindWithTag ("Zero Base").GetComponent(cash).cashReady -= turret2Cost;
				GameObject.FindWithTag ("turretBuilder").GetComponent (buildyStuff).buildTurret(2,2);
			}
		}
		else if (whichItem == 6) {
			if(GameObject.FindWithTag ("Zero Base").GetComponent(cash).cashReady >= walletCost){
				GameObject.FindWithTag ("Zero Base").GetComponent(cash).cashReady -= walletCost;
				GameObject.FindWithTag ("Zero Base").GetComponent(cash).upgradeWallet();
				walletCost = walletCost * 1.5;
			}
		}
		GameObject.FindWithTag ("Zero Base").GetComponent(cash).updateDisplay();
	}
	GameObject.FindWithTag("walletUpgrade").GetComponent(UI.Text).text = (walletText + "($" + walletCost.ToString() + ")" );
}
function updateDisplay(){
	if(Network.isClient){
		GameObject.FindWithTag("Hero Base").GetComponent(cash).updateDisplay();
	}
	else if(Network.isServer){
		GameObject.FindWithTag("Zero Base").GetComponent(cash).updateDisplay();
	}
}