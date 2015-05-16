#pragma strict
var health:int;
function Start () {
health =100;
}

function Update () {
	if(health<=0){
		print(transform.tag+" dead");
		Application.Quit();
	}
}

function hurt(temp:int){
	health-=temp;
}