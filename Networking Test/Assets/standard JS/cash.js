#pragma strict
var cashFlow:int;
public var cashReady:int;
var time:float;
var displayCash;
// Use this for initialization
function Start () {
	cashReady = 100;
	cashFlow = 10;
	//displayCash = GameObject.FindWithTag("money").GetComponent("Text");
}

// Update is called once per frame
function Update () {
	if (time <= Time.time - 3) {
		time=Time.time;
		cashReady+=cashFlow;
	}
	displayCash = (cashReady);
}

public function changeCash(temp:int){
	cashReady+=temp;
}

public function changeFlow(temp:int){
	cashFlow+=temp;
}