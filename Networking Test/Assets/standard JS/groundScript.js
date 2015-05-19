
var buildable	:boolean		=true;
var selectedServer	:boolean	=false;
var selectedClient	:boolean	=false;
var players			:GameObject[];
var tester			:boolean;
function Start () {
players = GameObject.FindGameObjectsWithTag("stuffScript");
}

function Update () {
	if(players.Length!=2)
		players=GameObject.FindGameObjectsWithTag("stuffScript");
		
	for(var z:int=0;z<players.Length;z++){
		if(tester){
			print("player "+z+" is "+Vector3.Distance(transform.position,players[z].transform.position)+" units away");
		}
		if(Vector3.Distance(transform.position,players[z].transform.position)<1.6){
			if(transform.parent.name=="Hero")
				selectedServer = true;
			else
				selectedClient = true;	
		}else{
			selectedServer = false;
			selectedClient = false;
		}
	}
}

function getBuildable(){
return buildable;
}

function isSelected(temp:int){
if(temp==1)
return selectedServer;
else
return selectedClient;
}


function notBuildable(){
buildable=false;
}

function setSelected(temp:boolean,temp2:int){
if(temp2==1)
selectedServer=temp;
else 
selectedClient=temp;
}

function OnTriggerEnter(temp:Collider){
	if(temp.tag=="turretBuilder"){
		if(Network.isServer){
			setSelected(true,1);
		}
		if(Network.isClient){
			setSelected(true,2);
		}
	}
}

function OnTriggerExit(temp:Collider){
	if(temp.tag=="turretBuilder"){
		if(Network.isServer){
			setSelected(false,1);
		}
		if(Network.isClient){
			setSelected(false,2);
		}
	}
}