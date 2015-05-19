using UnityEngine;
using System.Collections;

public class stuff : MonoBehaviour {
	public Transform pref;
	public Transform pref2;
	public Transform pref3;
	public GameObject zero;
	public GameObject hero;
	public Transform turret;

	// Use this for initialization
	void Start () {
		zero=GameObject.FindGameObjectWithTag ("Zero");
		hero=GameObject.FindGameObjectWithTag ("Hero");
	}
	
	// Update is called once per frame
	void Update () {

	}
	public void spawnEnemys(int temp,int type){
		if (networkView.isMine) {
				if (type == 1) {
						if (temp==1) {
							Network.Instantiate (pref, zero.transform.position, zero.transform.rotation, 5);
						} else {
							Network.Instantiate (pref, hero.transform.position, hero.transform.rotation, 5);
						}
				} else if (type == 2) {
						if (temp==1) {
							Network.Instantiate (pref2, zero.transform.position, zero.transform.rotation, 5);
						} else {
							Network.Instantiate (pref2, hero.transform.position, hero.transform.rotation, 5);
						}
				} else {
						if (temp==1) {
							Network.Instantiate (pref3, zero.transform.position, zero.transform.rotation, 5);
						} else {
							Network.Instantiate (pref3, hero.transform.position, hero.transform.rotation, 5);
						}
				}
		}
	}
}
