#pragma strict
var buildable	:boolean		=true;
var selectedServer	:boolean	=false;
var selectedClient	:boolean	=false;
function Start () {

}

function Update () {

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