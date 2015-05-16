import UnityEngine.UI;

var money;
public var store;
function Start () {

}

function Update () {

	if(Network.isClient)
	{
		//insert money qualifications here
			if (Input.GetKeyDown (KeyCode.Keypad4)) {
				if(GameObject.FindWithTag ("Hero Base").GetComponent(cash).cashReady >= 10){
					GameObject.FindWithTag ("Hero Base").GetComponent(cash).cashReady -= 10;
					GameObject.FindWithTag ("turretBuilder").GetComponent (buildyStuff).buildTurret(1,1);
				}
			}
			else if (Input.GetKeyDown (KeyCode.Keypad5)) {
				if(GameObject.FindWithTag ("Hero Base").GetComponent(cash).cashReady >= 10){
					GameObject.FindWithTag ("Hero Base").GetComponent(cash).cashReady -= 10;
					GameObject.FindWithTag ("turretBuilder").GetComponent (buildyStuff).buildTurret(2,1);
				}
			}
	}
	else if(Network.isServer)
	{	
		//insert other money qualifications here
		if (Input.GetKeyDown (KeyCode.Keypad4)) {
			if(GameObject.FindWithTag ("Hero Base").GetComponent(cash).cashReady >= 10){
				GameObject.FindWithTag ("Zero Base").GetComponent(cash).cashReady -= 10;
				GameObject.FindWithTag ("turretBuilder").GetComponent (buildyStuff).buildTurret(1,2);
			}
		}
		else if (Input.GetKeyDown (KeyCode.Keypad5)) {
			if(GameObject.FindWithTag ("Hero Base").GetComponent(cash).cashReady >= 10){
				GameObject.FindWithTag ("Zero Base").GetComponent(cash).cashReady -= 10;
				GameObject.FindWithTag ("turretBuilder").GetComponent (buildyStuff).buildTurret(2,2);
			}
		}
	}
}