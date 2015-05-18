using UnityEngine;
using System.Collections;

public class playerShooting : MonoBehaviour {
	public Transform bullet;
	public Transform spawn1;
	public Transform spawn2;
	public bool leftGun;
	public bool toggle;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if(Input.GetKeyDown(KeyCode.Mouse0) && toggle){
			Instantiate(bullet, spawn1.position, spawn1.rotation);
			Instantiate(bullet, spawn2.position, spawn2.rotation);
		}

		else if(Input.GetKeyDown(KeyCode.Mouse0) && leftGun && !toggle){
			Instantiate(bullet, spawn1.position, spawn1.rotation);
			leftGun = !leftGun;
		}
		else if(Input.GetKeyDown(KeyCode.Mouse0) && !leftGun && !toggle){
			Instantiate(bullet, spawn2.position, spawn2.rotation);
			leftGun = !leftGun;
		}


		if(Input.GetKeyDown(KeyCode.Mouse1))
			toggle = !toggle;
	}
}
