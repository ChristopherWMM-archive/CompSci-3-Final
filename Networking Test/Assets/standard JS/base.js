#pragma strict
import UnityEngine.UI;

var health:int;
var yourHealth:UI.Text;
var enemyHealth:UI.Text;
var gameOver:GameObject;
function Start () {
	health =100;
	gameOver.SetActive(false);
}

function Update () {
	if(Network.isServer)
	{
		if(transform.tag == "Hero Base" && int.Parse(yourHealth.text.Substring(0,yourHealth.text.Length-1)) != health)
			yourHealth.text = (health + "%");
		else if(transform.tag == "Zero Base" && int.Parse(enemyHealth.text.Substring(0,enemyHealth.text.Length-1)) != health)
			enemyHealth.text = (health + "%");
	}
	else if(Network.isClient)
	{
		if(this.gameObject.tag == "Zero Base" && int.Parse(yourHealth.text.Substring(0,yourHealth.text.Length-1)) != health)
			yourHealth.text = (health + "%");
		else if(this.gameObject.tag == "Hero Base" && int.Parse(enemyHealth.text.Substring(0,enemyHealth.text.Length-1)) != health)
			enemyHealth.text = (health + "%");
	}
	if(health<=0){
		gameOver.SetActive(true);
		gameOver.GetComponentInChildren(UI.Text).text = (transform.tag + "Wins!");
	}
}

function hurt(temp:int){
	health-=temp;
}
