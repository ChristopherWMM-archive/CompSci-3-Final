#pragma strict

function Start () {

}

function Update () {
	if(transform.position.y<2)
		transform.Translate(0,4*Time.deltaTime,0);
	if(transform.position.y>2)
		transform.position.y=2;
}