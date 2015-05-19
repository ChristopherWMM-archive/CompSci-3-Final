using System.Collections;
using UnityEngine.UI;
using UnityEngine;

public class storeScriptC : MonoBehaviour {
	public Menu store;
	public int money;
	public int hoverCost = 10;
	public int crabCost = 20;
	public int virusCost = 30;
	public bool heroUpdate;
	public bool zeroUpdate;
	Text cashReady;
	// Use this for initialization
	void Start () {
	}
	
	// Update is called once per frame
	public void StorePurchaseC (int whichItem) {
		print ("someone is trying to buy stuff");
		if (store.IsOpen) {
			if (Network.isServer && GameObject.FindWithTag ("money1") != null) {
				cashReady = GameObject.FindWithTag ("money1").GetComponent<Text>();
				money = int.Parse(cashReady.text.Substring (1));
					//insert money qualifications here
				if (whichItem == 1 && money >= hoverCost) {
					money-=hoverCost;
					GameObject.FindWithTag ("money1").GetComponent<Text>().text = ("$" + money.ToString ());
					GameObject.FindWithTag ("stuffScript").GetComponent <stuff> ().spawnEnemys (1, 1);
					print("I am a enemy");
				} else if (whichItem == 2 && money >= crabCost) {
					money -= crabCost;
					GameObject.FindWithTag ("money1").GetComponent<Text>().text = ("$" + money.ToString ());
						GameObject.FindWithTag ("stuffScript").GetComponent <stuff> ().spawnEnemys (1, 2);
					print("I am a enemy");
				} else if (whichItem == 3 && money >= virusCost) {
					money -= virusCost;
					GameObject.FindWithTag ("money1").GetComponent<Text>().text = ("$" + money.ToString ());
						GameObject.FindWithTag ("stuffScript").GetComponent <stuff> ().spawnEnemys (1, 3);
					print("I am a enemy");
				} 
			} else if (Network.isClient && GameObject.FindWithTag ("money2") != null) {
				cashReady = GameObject.FindWithTag ("money2").GetComponent<Text>();
				money = int.Parse(cashReady.text.Substring (1));
				if (whichItem == 1 && money >= hoverCost) {
					money -= hoverCost;
					GameObject.FindWithTag ("money2").GetComponent<Text>().text = ("$" + money.ToString ());
						GameObject.FindWithTag ("stuffScript").GetComponent <stuff> ().spawnEnemys (2, 1);
					print("I am a enemy");
				} else if (whichItem == 2 && money >= crabCost) {
					money -= crabCost;
					GameObject.FindWithTag ("money2").GetComponent<Text>().text = ("$" + money.ToString ());
						GameObject.FindWithTag ("stuffScript").GetComponent <stuff> ().spawnEnemys (2, 2);
					print("I am a enemy");
				} else if (whichItem == 3  && money >= virusCost) {
					money -= virusCost;
					GameObject.FindWithTag ("money2").GetComponent<Text>().text = ("$" + money.ToString ());
						GameObject.FindWithTag ("stuffScript").GetComponent <stuff> ().spawnEnemys (2, 3);
					print("I am a enemy");
				} 
			}

		}
	}
}
	
