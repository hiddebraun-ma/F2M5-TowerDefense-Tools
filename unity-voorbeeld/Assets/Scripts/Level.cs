using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[System.Serializable]
public class Level
{
    public int width;
    public List<Tile> tiles;
    public static Level CreateFromJSON(string jsonString)
    {
        return JsonUtility.FromJson<Level>(jsonString);
    }

    public override string ToString()
    {
        return $"width={width}, tiles={tiles.Count}";
    }
}
