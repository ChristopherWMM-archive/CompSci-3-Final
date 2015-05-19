using UnityEngine;
using System.Collections;

public class playerShooting : MonoBehaviour {
	public Menu store;
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
		if(!store)
			store = GameObject.FindWithTag("menuManager").GetComponent<MenuManager>().StoreMenu;

		if (!store.IsOpen && networkView.isMine) {
			if (Input.GetKeyDown (KeyCode.Mouse0) && leftGun && !toggle) {
					Instantiate (bullet, spawn1.position, spawn1.rotation);
					audio.Play ();
					leftGun = !leftGun;
			} else if (Input.GetKeyDown (KeyCode.Mouse0) && !leftGun && !toggle) {
					Instantiate (bullet, spawn2.position, spawn2.rotation);
					audio.Play ();
					leftGun = !leftGun;
			}
		}
	}
}
