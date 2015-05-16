#pragma strict
var anim : Animator;
var alternate : boolean = false;
var noHealth : boolean = false;
var attack : boolean = false;
function Start () {
	anim=GetComponent("Animator");
}

function Update () {
if (Input.GetKeyDown(KeyCode.Space))
	{
	print(alternate);
		alternate = !alternate;
	}
if (Input.GetKeyDown(KeyCode.N))
	{
		noHealth = !noHealth;
	}
if (Input.GetKeyDown(KeyCode.A))
	{
		attack = !attack;
	}
	
		anim.SetBool("IsMove",alternate);

		anim.SetBool("no Health",noHealth);
	
		anim.SetBool("attack",attack);
}