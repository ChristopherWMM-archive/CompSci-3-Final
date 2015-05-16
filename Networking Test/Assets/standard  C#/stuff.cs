using UnityEngine;
using System.Collections;

public class stuff : MonoBehaviour {
	public Transform pref;
	public Transform pref2;
	public Transform pref3;
	public GameObject thing;
	public GameObject thing2;
	public Transform turret;

	// Use this for initialization
	void Start () {
		thing=GameObject.FindGameObjectWithTag ("Zero");
		thing2=GameObject.FindGameObjectWithTag ("Hero");
	}
	
	// Update is called once per frame
	void Update () {

	}
	public void spawnEnemys(int temp,int type){
		if (networkView.isMine) {
				if (type == 1) {
						if (temp==1) {
								Network.Instantiate (pref, thing.transform.position, thing.transform.rotation, 5);
						} else {
								Network.Instantiate (pref, thing2.transform.position, thing2.transform.rotation, 5);
						}
				} else if (type == 2) {
						if (temp==1) {
								Network.Instantiate (pref2, thing.transform.position, thing.transform.rotation, 5);
						} else {
								Network.Instantiate (pref2, thing2.transform.position, thing2.transform.rotation, 5);
						}
				} else {
						if (temp==1) {
								Network.Instantiate (pref3, thing.transform.position, thing.transform.rotation, 5);
						} else {
								Network.Instantiate (pref3, thing2.transform.position, thing2.transform.rotation, 5);
						}
				}
		}
	}
}
