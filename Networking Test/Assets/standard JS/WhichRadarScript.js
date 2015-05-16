
var zeroRadar:Camera;
var heroRadar:Camera;
function Start () {
	//zeroRadar.gameObject.SetActive(false);
	//heroRadar.gameObject.SetActive(false);
}

function Update () {
	
}
function OnConnectedToServer() {
	heroRadar.gameObject.SetActive(true);
}
function OnPlayerConnected() {
	zeroRadar.gameObject.SetActive(true);
}