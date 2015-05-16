using UnityEngine;
using System.Collections;

public class NavigationMovement: MonoBehaviour {
	NavMeshAgent agent;
	//public int maxPlayerNum = 20;
	//public Vector3[] totalUnitsNum;
	public Vector3 U1Destination;

	public float xPos;
	public float zPos;
	public int unitNum;
	Transform target;
	public Vector3 basePos;
	public bool havePlacedBase = false;

	// Use this for initialization
	void Start () {
		agent = GetComponent<NavMeshAgent>();
	}
	
	// Update is called once per frame
	void Update () {
		if (Vector3.Distance (GameObject.FindGameObjectWithTag ("Hero Base").transform.position, transform.position) < Vector3.Distance (GameObject.FindGameObjectWithTag ("Zero Base").transform.position, transform.position)) {
			agent.SetDestination (GameObject.FindGameObjectWithTag ("Hero Base").transform.position);
			target=GameObject.FindGameObjectWithTag ("Hero Base").transform;
		} else {
			agent.SetDestination (GameObject.FindGameObjectWithTag ("Zero Base").transform.position);
			target=GameObject.FindGameObjectWithTag ("Zero Base").transform;
		}
		if(Vector3.Distance(transform.position,target.position)<2){
			agent.SetDestination(transform.position);
		}
	}
}