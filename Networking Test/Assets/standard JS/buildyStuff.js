﻿#pragma strict
public var pref		:Transform;
public var pref2	:Transform;
var tiles : GameObject[];
function Start () {
	tiles=GameObject.FindGameObjectsWithTag("Ground");
}

function Update () {

}

function buildTurret(temp2:int,type:int){
	if (networkView.isMine) {
		for(var z:int=0;z<tiles.length;z++){
			print("on tile "+z+" of "+tiles.length);
			if(temp2==1){
				if(tiles[z].GetComponent(groundScript).getBuildable()&&tiles[z].GetComponent(groundScript).isSelected(1)){
					tiles[z].GetComponent(groundScript).notBuildable();
					var temp:Vector3=tiles[z].transform.position;
					temp.y-=2;
					if(type==1)
					Network.Instantiate(pref , temp, tiles[z].transform.rotation,5);
					else
					Network.Instantiate(pref2, temp, tiles[z].transform.rotation,5);
				}
			}else{
				if(tiles[z].GetComponent(groundScript).getBuildable()&&tiles[z].GetComponent(groundScript).isSelected(2)){
					tiles[z].GetComponent(groundScript).notBuildable();
					var temp1:Vector3=tiles[z].transform.position;
					temp1.y-=2;
					if(type==1)
					Network.Instantiate(pref , temp1, tiles[z].transform.rotation,5);
					else
					Network.Instantiate(pref2, temp1, tiles[z].transform.rotation,5);
				}
			}
		}
	}
}

function OnTriggerEnter(temp:Collider){
	if(temp.tag=="Ground"){
		if(Network.isServer){
			temp.GetComponent(groundScript).setSelected(true,1);
		}
		if(Network.isClient){
			temp.GetComponent(groundScript).setSelected(true,2);
		}
	}
}

function OnTriggerExit(temp:Collider){
	if(temp.tag=="Ground"){
		if(Network.isServer){
			temp.GetComponent(groundScript).setSelected(false,1);
		}
		if(Network.isClient){
			temp.GetComponent(groundScript).setSelected(false,2);
		}
	}
}