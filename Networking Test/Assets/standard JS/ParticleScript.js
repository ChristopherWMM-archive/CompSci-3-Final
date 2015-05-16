#pragma strict
var destroyTime: int = 3;
function Start () {
	yield WaitForSeconds(destroyTime);
	Destroy(gameObject);
}
