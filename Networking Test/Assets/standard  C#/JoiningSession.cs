using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using System.Net;
public class JoiningSession : MonoBehaviour {

	Text IPEntry;
	Text PortEntry;
	Text Status;
	Text Connect;

	public string connectToIP;
	public string connectPort;// default for school is 25001

	public bool startConnect;
	public bool disconnect;
	void OnAwake(){
		Application.runInBackground = true;
	}
	void Start () {	
		IPEntry = GameObject.FindWithTag("IPEntry").GetComponent<Text> ();
		PortEntry = GameObject.FindWithTag("PortEntry").GetComponent<Text> ();
		Status = GameObject.FindWithTag("Status").GetComponent<Text> ();
		Connect = GameObject.FindWithTag("Connect").GetComponent<Text> ();
		Connect.text = ("Connect");
		startConnect = false;
		disconnect = false;
	}
	
	// Update is called once per frame
	void Update () {			
			
		if (Network.peerType == NetworkPeerType.Connecting){	
			Status.text = ("Connection status: Connecting");
			
		}else if (Network.isClient){
			Status.text = ("Connection status: Client!" + "; Ping: "+Network.GetAveragePing(  Network.connections[0] ) );		
			//Tells player if they are Client or Server
		
		}else if (Network.peerType == NetworkPeerType.Disconnected){
			
			connectToIP = IPEntry.text;
			connectPort = PortEntry.text;
			
			Status.text = ("Connection status: Disconnected");
		}

	}
	public void connect(){
		if (!startConnect) {
			Connect.text = ("Disconnect");
			startConnect = true;

			//Network.useNat = false;
			Network.Connect(connectToIP, int.Parse(connectPort));
		}
		else if (startConnect)
		{
			Connect.text = ("Connect");
			startConnect = false;
			//Disconnect Button
			Network.Disconnect(200);
		}
	}
	public void SetIP(){
		connectToIP = IPEntry.text;
	}
	public void SetPort() {
		connectPort = PortEntry.text;
	}
}