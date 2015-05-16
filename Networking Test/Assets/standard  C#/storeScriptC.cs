using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class storeScriptC : MonoBehaviour {
	public Menu store;
	public int money;
	string cashReady;
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		if (store.IsOpen) {
			cashReady = GameObject.FindWithTag ("money").GetComponent<Text>().text;
			money = int.Parse (cashReady);
			if (Network.isClient) {

					//insert money qualifications here
				if (Input.GetKeyDown (KeyCode.Keypad1) && money >= 10) {
					money -= 10;
						GameObject.FindWithTag ("stuffScript").GetComponent <stuff> ().spawnEnemys (1, 1);
				} else if (Input.GetKeyDown (KeyCode.Keypad2) && money >= 10) {
					money -= 10;
						GameObject.FindWithTag ("stuffScript").GetComponent <stuff> ().spawnEnemys (2, 1);
				} else if (Input.GetKeyDown (KeyCode.Keypad3) && money >= 10) {
					money -= 10;
						GameObject.FindWithTag ("stuffScript").GetComponent <stuff> ().spawnEnemys (3, 1);
				} else if (Input.GetKeyDown (KeyCode.Keypad6)) {
						GameObject.FindWithTag ("hud").GetComponent <MenuManager> ().HideMenu (store);
				}
			} else if (Network.isServer) {

				if (Input.GetKeyDown (KeyCode.Keypad1) && money >= 10) {
					money -= 10;
						GameObject.FindWithTag ("stuffScript").GetComponent <stuff> ().spawnEnemys (1, 2);
				} else if (Input.GetKeyDown (KeyCode.Keypad2) && money >= 10) {
					money -= 10;
						GameObject.FindWithTag ("stuffScript").GetComponent <stuff> ().spawnEnemys (2, 2);
				} else if (Input.GetKeyDown (KeyCode.Keypad3) && money >= 10) {
					money -= 10;
						GameObject.FindWithTag ("stuffScript").GetComponent <stuff> ().spawnEnemys (2, 3);
				} else if (Input.GetKeyDown (KeyCode.Keypad6)) {
						GameObject.FindWithTag ("hud").GetComponent <MenuManager> ().HideMenu (store);
					}
			}
			GameObject.FindWithTag ("money").GetComponent<Text>().text = money.ToString();
		}
	}
}
	
