using UnityEngine;
using System.Collections;

public class baseScript : MonoBehaviour {
	public int health=100;
	GameObject[] enemys;
	// Use this for initialization
	void Start () {
	}
	
	// Update is called once per frame
	void Update () {
		enemys=GameObject.FindGameObjectsWithTag ("Enemy");
		Debug.Log("enemys is"+enemys.Length+" long");
		for (int z=0; z<enemys.Length; z++) {
			if(Vector3.Distance(transform.position,enemys[z].transform.position)<2){
				Debug.Log("enemy "+z+" is in range");
				health--;
				enemys[z].GetComponent<Enemyscript>().killMe();
			}
		}
	}

	void updateHealth(){

	}

	int getHealth(){
		return(health);
	}
}
