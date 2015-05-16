var minDamage : int = 3;
var midDamage : int = 8;
var maxDamage : int = 13;
var armTime : float = 1;
var explodeTime : float = 1;
var range : float = 10;

var targets = new Array();
var possibleTargets : GameObject[];

var particle : GameObject;

private var target : GameObject = null;
private var isArmed : boolean = false;
private var explode : boolean = false;

function Start () {
	Invoke("Arm", armTime);
	targets = new GameObject[10];
}

function Update () {
	FindValidTarget();
}

function Arm(){
	CancelInvoke();
	isArmed = true;
}

function Explode(){
	CancelInvoke();
	Damage();
	//Damage Stuff & Particles
	Instantiate(particle, gameObject.transform.position, gameObject.transform.rotation);
	Destroy(gameObject.transform.parent.gameObject);

}

function Damage(){
	var damage : int;
	for(var y:int=0;y<targets.length;y++){
	if(targets[y]){
			var distance : float = Vector3.Distance(transform.position,targets[y].transform.position);
			if(distance < range/3)
				damage = Random.Range(midDamage,maxDamage);
			else if(distance > range/3 && 2*(range/3))
				damage = Random.Range(minDamage,midDamage);
			else
				damage = minDamage;
			print("Damage: "+damage);
			targets[y].GetComponent(enemyScript).Damage(damage);
			}
	}
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
				foundTarget = true;
			}
		}
	}
	if(foundTarget && isArmed){
		if(!explode){
			explode = true;
			Invoke("Explode",explodeTime);
		}
	}
	else if(!foundNewTarget && !foundTarget && !explode){
		targets.clear();
		target = null;
	}
}