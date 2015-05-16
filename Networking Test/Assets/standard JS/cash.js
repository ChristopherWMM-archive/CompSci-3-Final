
var cashFlow:int;
public var cashReady:int;
var time:float;
public var displayCash:UI.Text;
public var started:boolean;
// Use this for initialization
function Start () {
	cashReady = 100;
	cashFlow = 10;
	started = false;
}

// Update is called once per frame
function Update () {
if(Network.isServer || Network.isClient)
{
	if (time <= Time.time - 3) {
		time=Time.time;
		cashReady+=cashFlow;
	}
	displayCash.text = cashReady.ToString();
}
}

public function changeCash(temp:int){
	cashReady+=temp;
}

public function changeFlow(temp:int){
	cashFlow+=temp;
}