#pragma strict
var money:int;
function Start () {

}

function Update () {
	money = GameObject.FindWithTag ("money").GetComponent(cash).cashReady;
	if(Network.isServer)
	{
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
	//insert other money qualifications here
		if (Input.GetKeyDown (KeyCode.Keypad4)) {
			GameObject.FindWithTag ("turretBuilder").GetComponent (buildyStuff).buildTurret(1,2);
		}
		else if (Input.GetKeyDown (KeyCode.Keypad5)) {
			GameObject.FindWithTag ("turretBuilder").GetComponent (buildyStuff).buildTurret(2,2);
		}
	}
}