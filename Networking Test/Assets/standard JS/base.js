#pragma strict
import UnityEngine.UI;

var health:int;
var yourHealth:UI.Text;
var enemyHealth:UI.Text;
function Start () {
health =100;

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
		print(transform.tag+" dead");
		Application.Quit();
	}
}

function hurt(temp:int){
	health-=temp;
}
