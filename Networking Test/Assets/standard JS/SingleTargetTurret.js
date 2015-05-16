#pragma strict

var moveSpeed : int = 60;
var warmUp : float = 1;
var projectile : GameObject;

private var target : GameObject = null;
private var targetPos : Transform = null;
private var startRot : Quaternion;


function Start(){
	 startRot = transform.rotation;
}

function Update(){

	var hit : RaycastHit;
	var fwd = transform.TransformDirection (Vector3.forward);
	
	if (Physics.Raycast(transform.position, fwd, hit)){
		if(hit.collider.gameObject.transform.tag == "Enemy"){
			Invoke("Fire", warmUp);
		} 
	}
	
	if(target == null){
		gameObject.transform.rotation = Quaternion.RotateTowards(transform.rotation, startRot, moveSpeed * Time.deltaTime);
		CancelInvoke();
	}
}

function OnTriggerEnter(other : Collider){
 	//Checks if an object enters range
 	if(other.gameObject.tag == "Enemy")
 	{
 		//Defines the target
 		target = other.gameObject;
 	}
}

function OnTriggerStay(other : Collider){
 	//Checks if current target exists
 	if(target != null){
 			if(other.gameObject.tag == "Enemy"){
 				Aim();
 			}
 	}
 	//Checks if no current target exists
 	if(target == null){
 		if(other.gameObject.tag == "Enemy"){
 			//Sets the new object as current target
 			target = other.gameObject;
 			CancelInvoke();
 		}
 	}
}

function OnTriggerExit(other : Collider){
 	//Checks if target is out of range
 	if(other.gameObject.tag == "Enemy"){
 		//Remove current target
 		target = null;
 		CancelInvoke();
 	}
}

function Aim(){
	var q = Quaternion.LookRotation(target.transform.position - transform.position);
	transform.rotation = Quaternion.RotateTowards(transform.rotation, q, moveSpeed * Time.deltaTime);
}

function Fire(){
	CancelInvoke();
	Instantiate(projectile, gameObject.transform.position, gameObject.transform.rotation);
}
