using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using System.Net;
public class IPAddress : MonoBehaviour {

	// Use this for initialization
	Text showIP;
	Text showPort;
	Text serverStatus;
	Text hostStatus;

	string strHostName = "";
	//int connectPort = 25001;//default for school is 25001
	void OnAwake(){
		Application.runInBackground = true;
	}
	void Start () {
		showIP = GameObject.FindWithTag("showIP").GetComponent<Text> ();
		showPort = GameObject.FindWithTag("showPort").GetComponent<Text> ();
		serverStatus = GameObject.FindWithTag("ServerStatus").GetComponent<Text> ();
		hostStatus = GameObject.FindWithTag("HostStatus").GetComponent<Text> ();
		serverStatus.text = ("Start Server");
		hostStatus.text = ("Disconnected");
	}
	
	// Update is called once per frame
	void Update () {
		strHostName = System.Net.Dns.GetHostName();
		IPHostEntry ipEntry = System.Net.Dns.GetHostEntry(strHostName);
		System.Net.IPAddress[] addr = ipEntry.AddressList;
		showIP.text=("IP: "+addr[0]);
		showPort.text = "25001";

		if (Network.peerType == NetworkPeerType.Server && Network.connections.Length >= 1) {
			hostStatus.text = ("Connections: " + Network.connections.Length + "; Ping: " + Network.GetAveragePing (Network.connections [0]));
		}
		else if (Network.peerType == NetworkPeerType.Server && Network.connections.Length <= 0) {
			hostStatus.text = ("Waiting");
		}

	}
	public void StartServer() {
		if (Network.peerType == NetworkPeerType.Disconnected) {
			Network.InitializeServer (32, 25001, false);
			serverStatus.text = ("Server!");
			hostStatus.text = ("Waiting");
		}else
			Disconnect ();
	}
	public void Disconnect() {
		Network.Disconnect (200);
		serverStatus.text = ("Start Server");
		hostStatus.text = ("Disconnected");
	}

}
