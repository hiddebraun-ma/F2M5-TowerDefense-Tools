using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[System.Serializable]
public class Tile
{
    public string state;
    public int index;

    public static Tile CreateFromJSON(string jsonString)
    {
        return JsonUtility.FromJson<Tile>(jsonString);
    }
}