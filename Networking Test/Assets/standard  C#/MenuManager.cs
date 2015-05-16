using UnityEngine;
using System.Collections;

public class MenuManager : MonoBehaviour {
	public Menu CurrentMenu;
	public Menu StoreMenu;
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

		CurrentMenu.IsOpen = false;
	}
	public void StoreMenuOpener(){
		if (StoreMenu.IsOpen)
			StoreMenu.IsOpen = false;
		else
			StoreMenu.IsOpen = true;
	}
}
