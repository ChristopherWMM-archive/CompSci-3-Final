#pragma strict
var money:int;
function Start () {

}

function Update () {
	
	if(Network.isServer)
	{
		money = GameObject.FindWithTag ("Hero Base").GetComponent(cash).cashReady;
		//insert money qualifications here
			if (Input.GetKeyDown (KeyCode.Keypad4)) {
				GameObject.FindWithTag ("turretBuilder").GetComponent (buildyStuff).buildTurret(1,1);
			}
			else if (Input.GetKeyDown (KeyCode.Keypad5)) {
				GameObject.FindWithTag ("turretBuilder").GetComponent (buildyStuff).buildTurret(2,1);
			}
	}
	else if(Network.isClient)
	{
		money = GameObject.FindWithTag ("Zero Base").GetComponent(cash).cashReady;
	//insert other money qualifications here
		if (Input.GetKeyDown (KeyCode.Keypad4)) {
			GameObject.FindWithTag ("turretBuilder").GetComponent (buildyStuff).buildTurret(1,2);
		}
		else if (Input.GetKeyDown (KeyCode.Keypad5)) {
			GameObject.FindWithTag ("turretBuilder").GetComponent (buildyStuff).buildTurret(2,2);
		}
	}
}