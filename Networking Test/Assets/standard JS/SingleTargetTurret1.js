var moveSpeed : int = 60;
var warmUp : float = 1;
var projectile : GameObject;
var barrel1:Transform;
var barrel2:Transform;
var cycle:boolean;
var targets = new Array();

public var target : GameObject = null;
private var targetPos : Transform = null;
private var startRot : Quaternion;

public var possibleTargets : GameObject[];

function Start(){
	 startRot = transform.rotation;
	 cycle=false;
}

function Update(){
	FindValidTarget();
	if(target){
		var q = Quaternion.LookRotation(target.transform.position - transform.position);
		transform.rotation = Quaternion.RotateTowards(transform.rotation, q, moveSpeed * Time.deltaTime);
		Invoke("Fire",warmUp);
	}else{
		gameObject.transform.rotation = Quaternion.RotateTowards(transform.rotation, startRot, moveSpeed * Time.deltaTime);	
	}
	
}

function Fire(){
	CancelInvoke();
	if(target!=null){
		if(barrel1!=null){
			Instantiate(projectile, barrel1.position, gameObject.transform.rotation);
			if(barrel2!=null){
				cycle=!cycle;
				if(cycle){
					Instantiate(projectile, barrel2.position, gameObject.transform.rotation);
				}
			}
		}else{
			Instantiate(projectile, gameObject.transform.position, gameObject.transform.rotation);
		}
	}
}

function FindValidTarget(){
	possibleTargets = GameObject.FindGameObjectsWithTag("Enemy");
	var foundTarget : boolean = false;
	for(var z:int=0;z<possibleTargets.length;z++){
		var distance : float = Vector3.Distance(transform.position,possibleTargets[z].transform.position);
		if(distance < 10){
			targets.push(possibleTargets[z]);
			foundTarget = true;
		}
	}
	if(foundTarget){
		for(var y:int=0;y<targets.length;y++){
			if(target && targets[y]){
				var curTarget = target;
				var distance1 : float = Vector3.Distance(transform.position,targets[y].transform.position);
				var distance2 : float = Vector3.Distance(transform.position,curTarget.transform.position);
				if(distance1 < distance2)
					target = targets[y];
			}
			else
				target = targets[y];
		}
	}
	else{
		targets.Clear();
		target = null;
	}
}
