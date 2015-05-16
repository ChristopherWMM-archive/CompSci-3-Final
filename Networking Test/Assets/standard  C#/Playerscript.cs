using UnityEngine;
using System.Collections;

public class Playerscript : MonoBehaviour {
	public float speed = 10f;

	private float lastSynchronizationTime = 0f;
	private float syncDelay = 0f;
	private float syncTime = 0f;
	private Vector3 syncStartPosition = Vector3.zero;
	private Vector3 syncEndPosition = Vector3.zero;
	private CharacterController cc;

	void Start()
	{

	}

	void Update()
	{
		if (networkView.isMine) 
		{
			Camera.main.transform.rotation=transform.rotation;
			Camera.main.transform.position=transform.position;
			Camera.main.transform.parent=transform;
		}
	}

	private void SyncedMovement()
	{
		syncTime += Time.deltaTime;
		rigidbody.position = Vector3.Lerp(syncStartPosition, syncEndPosition, syncTime / syncDelay);
	}

	void OnSerializeNetworkView(BitStream stream, NetworkMessageInfo info)
	{
		Vector3 syncPosition = Vector3.zero;
		Vector3 syncVelocity = Vector3.zero; //We will be adding velocity into the consideration 
		if (stream.isWriting)
		{
			syncPosition = rigidbody.position;
			stream.Serialize(ref syncPosition);
			
			syncVelocity = rigidbody.velocity;
			stream.Serialize(ref syncVelocity);
		}
		else
		{
			stream.Serialize(ref syncPosition);
			stream.Serialize(ref syncVelocity);
			
			syncTime = 0f;
			syncDelay = Time.time - lastSynchronizationTime;
			lastSynchronizationTime = Time.time;
			
			syncEndPosition = syncPosition + syncVelocity * syncDelay; //We multiply the velocity by the delay to create 
																		//the effect of movement prediction through times of lag.
			syncStartPosition = rigidbody.position;
		}
	}
}
