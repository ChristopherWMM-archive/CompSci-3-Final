#pragma strict

function Start () {

}

function Update () {
	if(Network.isServer)
	{
		if (Input.GetKeyDown (KeyCode.Keypad4)) {
			GameObject.FindWithTag ("turretBuilder").GetComponent (buildyStuff).buildTurret(1,1);
		}
		else if (Input.GetKeyDown (KeyCode.Keypad5)) {
			GameObject.FindWithTag ("turretBuilder").GetComponent (buildyStuff).buildTurret(1,2);
		}
	}
	else if(Network.isClient)
	{
		if (Input.GetKeyDown (KeyCode.Keypad4)) {
			GameObject.FindWithTag ("turretBuilder").GetComponent (buildyStuff).buildTurret(2,1);
		}
		else if (Input.GetKeyDown (KeyCode.Keypad5)) {
			GameObject.FindWithTag ("turretBuilder").GetComponent (buildyStuff).buildTurret(2,2);
		}
	}
}