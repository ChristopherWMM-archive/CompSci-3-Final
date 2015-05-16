var moveSpeed : int = 60;
var warmUp : float = 1;
var projectile : GameObject;
var range : float = 10;

var targets = new Array();

private var target : GameObject = null;
private var targetPos : Transform = null;
private var startRot : Quaternion;

var possibleTargets : GameObject[];

function Start(){
	 startRot = transform.rotation;
}

function Update(){
	FindValidTarget();
	if(target){
		var q = Quaternion.LookRotation(target.transform.position - transform.position);
		transform.rotation = Quaternion.RotateTowards(transform.rotation, q, moveSpeed * Time.deltaTime);
		
		//var hit : RaycastHit;
		//var fwd = transform.TransformDirection (Vector3.forward);
	
		//if (Physics.Raycast(transform.position, fwd, hit)){
			//if(hit.collider.gameObject.CompareTag("enemy")){
				Invoke("Fire", warmUp);
			//} 
		//}
	}
	else{
		gameObject.transform.rotation = Quaternion.RotateTowards(transform.rotation, startRot, moveSpeed * Time.deltaTime);	
	}
	
}

function Fire(){
	CancelInvoke();
	if(target)
		Instantiate(projectile, gameObject.transform.position, gameObject.transform.rotation);
}

function FindValidTarget(){
	possibleTargets = GameObject.FindGameObjectsWithTag("enemy");
	var foundTarget : boolean = false;
	var foundNewTarget : boolean = false;
	for(var z:int=0;z<possibleTargets.length;z++){
		var distance : float = Vector3.Distance(transform.position,possibleTargets[z].transform.position);
		if(distance < range){
			if(targets.length <= 0)
				foundNewTarget = true;
			if(foundNewTarget){
				targets.push(possibleTargets[z]);
				target = targets[0];
				foundTarget = true;
			}
		}
	}
	if(foundTarget){
		for(var y:int=0;y<targets.length;y++){
			if(targets[y].Equals(target)){
				var curTarget = target;
				var distance1 : float = Vector3.Distance(transform.position,targets[y].transform.position);
				var distance2 : float = Vector3.Distance(transform.position,curTarget.transform.position);
				if(distance1 < distance2)
					target = targets[y];
			}
//			else if(targets[y++].Equals(null)){
//				print("2");
//				targets.clear();
//				target = null;
		}
	}
	else{
		targets.clear();
	}
}
