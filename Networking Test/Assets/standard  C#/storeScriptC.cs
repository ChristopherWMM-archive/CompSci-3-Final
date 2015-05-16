using UnityEngine;
using System.Collections;

public class storeScriptC : MonoBehaviour {
	public Menu store;
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		if (Network.isServer) {
			{
				if (Input.GetKeyDown (KeyCode.Keypad1)) {
					GameObject.FindWithTag ("stuffScript").GetComponent <stuff>().spawnEnemys (1, 1);
				} else if (Input.GetKeyDown (KeyCode.Keypad2)) {
					GameObject.FindWithTag ("stuffScript").GetComponent <stuff>().spawnEnemys (1, 2);
				} else if (Input.GetKeyDown (KeyCode.Keypad3)) {
					GameObject.FindWithTag ("stuffScript").GetComponent <stuff>().spawnEnemys (1, 3);
				} else if (Input.GetKeyDown (KeyCode.Keypad6)) {
					GameObject.FindWithTag ("hud").GetComponent <MenuManager>().HideMenu (store);
				}
			}
			if (Network.isClient) {
				{
					if (Input.GetKeyDown (KeyCode.Keypad1)) {
						GameObject.FindWithTag ("stuffScript").GetComponent <stuff>().spawnEnemys (2, 1);
					} else if (Input.GetKeyDown (KeyCode.Keypad2)) {
						GameObject.FindWithTag ("stuffScript").GetComponent <stuff>().spawnEnemys (2, 2);
					} else if (Input.GetKeyDown (KeyCode.Keypad3)) {
						GameObject.FindWithTag ("stuffScript").GetComponent <stuff>().spawnEnemys (2, 3);
					} else if (Input.GetKeyDown (KeyCode.Keypad6)) {
						GameObject.FindWithTag ("hud").GetComponent <MenuManager>().HideMenu (store);
					}
				}
			}
		}
	}
}
