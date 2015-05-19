#pragma strict

var deleteTime : float = 5;
var moveSpeed : float = 0.1;
var damage:int=1;
function Start(){
	yield WaitForSeconds(deleteTime);
	Network.Destroy(gameObject);
}
function Update() {
	gameObject.transform.Translate(0,0,moveSpeed * Time.deltaTime);
}

function OnTriggerEnter(other : Collider){
	if(other.gameObject.CompareTag("Enemy") || other.gameObject.CompareTag("Enemy2")){
		other.gameObject.GetComponent(enemyScript).Damage(damage);
	}
	else if(!other.gameObject.CompareTag("stuffScript") || !other.gameObject.CompareTag("turret"))
	Network.Destroy(gameObject);
}