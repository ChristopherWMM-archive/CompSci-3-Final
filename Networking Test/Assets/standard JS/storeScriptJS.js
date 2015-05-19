import UnityEngine.UI;
import UnityEngine;

var money;
var turret1Cost:int = 20;
var turret2Cost:int = 30;
var walletCost:int = 50;
var mineCost:int = 10;
var cashReady:UI.Text;
var walletText:String;
public var store:GameObject;

function Start () {
	walletText = "Upgrade Wallet ";
}

 public function StorePurchaseJS (whichItem:int) {
	//if(store.GetComponent(Animator).GetInstanceID(0))
	{
		cashReady = GameObject.FindWithTag("money").GetComponent(UI.Text);
		if(Network.isServer)
		{
			money = int.Parse(cashReady.text.Substring(1));
			if (whichItem == 4 && money <= turret1Cost) {
					GameObject.FindWithTag ("money").GetComponent(UI.Text).text = ("$" + money.ToString ());
					GameObject.FindWithTag ("turretBuilder").GetComponent (buildyStuff).buildTurret(1,1);
					print("I am a turret");
			}
			else if (whichItem == 5 && money <= turret2Cost) {
					GameObject.FindWithTag ("money").GetComponent(UI.Text).text = ("$" + money.ToString ());
					GameObject.FindWithTag ("turretBuilder").GetComponent (buildyStuff).buildTurret(1,2);
					print("I am a turret");
			}else if (whichItem == 6 && money <= walletCost) {
					GameObject.FindWithTag ("money").GetComponent(UI.Text).text = ("$" + money.ToString ());
					GameObject.FindWithTag ("Hero Base").GetComponent(cash).upgradeWallet();
					walletCost = walletCost * 2;
			}
			//GameObject.FindWithTag ("Hero Base").GetComponent(cash).updateDisplay();
		}
		else if(Network.isClient)
		{
			money = int.Parse(cashReady.text.Substring(1));
			if (whichItem == 4 && money <= turret1Cost) {
					GameObject.FindWithTag ("money").GetComponent(UI.Text).text = ("$" + money.ToString ());
					GameObject.FindWithTag ("turretBuilder").GetComponent (buildyStuff).buildTurret(2,1);
					print("I am a turret");
			}
			else if (whichItem == 5 && money <= turret2Cost) {
					GameObject.FindWithTag ("money").GetComponent(UI.Text).text = ("$" + money.ToString ());
					GameObject.FindWithTag ("turretBuilder").GetComponent (buildyStuff).buildTurret(2,2);
					print("I am a turret");
			}else if (whichItem == 6 && money <= walletCost) {
					GameObject.FindWithTag ("money").GetComponent(UI.Text).text = ("$" + money.ToString ());
					GameObject.FindWithTag ("Zero Base").GetComponent(cash).upgradeWallet();
					walletCost = walletCost * 2;
			}
			//GameObject.FindWithTag ("Zero Base").GetComponent(cash).updateDisplay();
		}
		GameObject.FindWithTag("walletUpgrade").GetComponent(UI.Text).text = (walletText + "($" + walletCost.ToString() + ")" );
	}
}
function updateDisplay(){
	if(Network.isServer){
		GameObject.FindWithTag("Hero Base").GetComponent(cash).updateDisplay();
	}
	else if(Network.isClient){
		GameObject.FindWithTag("Zero Base").GetComponent(cash).updateDisplay();
	}
}