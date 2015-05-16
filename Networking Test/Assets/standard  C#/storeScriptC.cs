using UnityEngine;
using System.Collections;

public class storeScriptC : MonoBehaviour {
	public Menu store;
	public int money;
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
				//money = GameObject.FindWithTag ("money").GetComponent<cash>().cashReady;
				if (Network.isServer) {

						//insert money qualifications here
						if (Input.GetKeyDown (KeyCode.Keypad1)) {
								GameObject.FindWithTag ("stuffScript").GetComponent <stuff> ().spawnEnemys (1, 1);
								print ("key 1");
						} else if (Input.GetKeyDown (KeyCode.Keypad2)) {
								GameObject.FindWithTag ("stuffScript").GetComponent <stuff> ().spawnEnemys (2, 1);
						} else if (Input.GetKeyDown (KeyCode.Keypad3)) {
								GameObject.FindWithTag ("stuffScript").GetComponent <stuff> ().spawnEnemys (3, 1);
						} else if (Input.GetKeyDown (KeyCode.Keypad6)) {
								GameObject.FindWithTag ("hud").GetComponent <MenuManager> ().HideMenu (store);
						}
				} else if (Network.isClient) {
			
						if (Input.GetKeyDown (KeyCode.Keypad1)) {
								GameObject.FindWithTag ("stuffScript").GetComponent <stuff> ().spawnEnemys (1, 2);
						} else if (Input.GetKeyDown (KeyCode.Keypad2)) {
								GameObject.FindWithTag ("stuffScript").GetComponent <stuff> ().spawnEnemys (2, 2);
						} else if (Input.GetKeyDown (KeyCode.Keypad3)) {
								GameObject.FindWithTag ("stuffScript").GetComponent <stuff> ().spawnEnemys (2, 3);
						} else if (Input.GetKeyDown (KeyCode.Keypad6)) {
								GameObject.FindWithTag ("hud").GetComponent <MenuManager> ().HideMenu (store);
						}

			
				}
		}
}
	
