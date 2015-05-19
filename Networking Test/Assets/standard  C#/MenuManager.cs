using UnityEngine;
using System.Collections;

public class MenuManager : MonoBehaviour {
	public Menu CurrentMenu;
	public Menu StoreMenu;
	public AudioSource open;
	public AudioSource close;
	void Start () {
		if(CurrentMenu != null)
			ShowMenu (CurrentMenu);
	}
	public void Update() {
		if (Input.GetKeyDown (KeyCode.Tab)) {
			StoreMenuOpener();
		}
	}
	public void ShowMenu(Menu menu)
	{
		if (CurrentMenu != null)
			CurrentMenu.IsOpen = false;

		CurrentMenu = menu;
		CurrentMenu.IsOpen = true;
	}
	public void HideMenu(Menu menu){
		if (menu != null)
			CurrentMenu = menu;
		close.Play ();
		CurrentMenu.IsOpen = false;
	}
	public void StoreMenuOpener(){
		if (StoreMenu.IsOpen) {	
			close.Play ();
			StoreMenu.IsOpen = false;
		} else {
			open.Play ();
			StoreMenu.IsOpen = true;
		}
	}
	public void QuitGame(){
		Application.Quit ();
	}
}
