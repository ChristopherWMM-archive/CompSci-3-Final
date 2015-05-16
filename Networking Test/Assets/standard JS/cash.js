#pragma strict
var cashFlow:int;
var cashReady:int;
var time:float;
// Use this for initialization
function Start () {
	cashReady = 100;
	cashFlow = 10;
}

// Update is called once per frame
function Update () {
	if (time <= Time.time - 3) {
		time=Time.time;
		cashReady+=cashFlow;
	}
}

public function changeCash(temp:int){
	cashReady+=temp;
}

public function changeFlow(temp:int){
	cashFlow+=temp;
}