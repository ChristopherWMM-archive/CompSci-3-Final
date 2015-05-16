

function Start () {

}

function Update () {

}

public function quitGame () {
	
	Application.Quit();
}
public function startGame () {
	if(GameObject.FindWithTag("server").GetComponent("IPAddress").isServer && GameObject.FindWithTag("joining").GetComponent("JoiningSession").isClient)
		Application.LoadLevel("In Game UI");
}