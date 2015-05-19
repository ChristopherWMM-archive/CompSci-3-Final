#pragma strict
var health : int = 10;
var speed  : float = 0;
var damage : int;
var target1: Transform;
var target2: Transform;
function Start () {
		if (Vector3.Distance (GameObject.FindGameObjectWithTag ("Hero Base").transform.position, transform.position) < 
		Vector3.Distance (GameObject.FindGameObjectWithTag ("Zero Base").transform.position, transform.position)) 
		{
			target1=GameObject.FindGameObjectWithTag ("Hero Base").transform;
			target2=GameObject.FindGameObjectWithTag ("Zero Base").transform;
		} else {
			target1=GameObject.FindGameObjectWithTag ("Zero Base").transform;
			target2=GameObject.FindGameObjectWithTag ("Hero Base").transform;
		}
		target2.GetComponent(cash).changeFlow(2);
}
function Update () {
	if(health <= 0){
		target1.GetComponent(cash).changeCash(5);
		Network.Destroy(gameObject);
	}
	if(Vector3.Distance (target1.position, transform.position)<=2){
		target1.GetComponent(base).hurt(damage);
		Network.Destroy(gameObject);
	}
}

function Damage(damage : int){
	health -= damage;
}