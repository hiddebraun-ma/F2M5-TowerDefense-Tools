using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using TMPro;
using UnityEngine;

public class LevelGenerator : MonoBehaviour
{
    private Level level;
    private List<GameObject> tiles = new List<GameObject>();
    private Dictionary<string, Color> tileColors = new Dictionary<string, Color>();

    // Reference to the Prefab. Drag a Prefab into this field in the Inspector.
    public GameObject myPrefab;

    // Start is called before the first frame update
    void Start()
    {
        tileColors.Add("path", Color.yellow);
        tileColors.Add("buildable", Color.white);
        tileColors.Add("waypoint", Color.blue);
        tileColors.Add("spawnpoint", Color.red);
        tileColors.Add("default", Color.grey);

        startUp();
    }

    private void startUp()
    {
        generateLevel();
    }

    private async void generateLevel()
    {

        level = await loadLevel();

        int tileCount = level.tiles.Count;
        float gap = 0.1f;
        float x = 0;
        float z = 0;
        for (int i = 1; i <= tileCount; i++)
        {
            Tile tileData = level.tiles[i - 1];
            GameObject tile = Instantiate(myPrefab, new Vector3(x, 0, z), Quaternion.identity);

            x += tile.GetComponent<MeshRenderer>().bounds.size.x + gap;
            tile.GetComponent<MeshRenderer>().material.color = tileColors[tileData.state];
            tile.GetComponentInChildren<TextMeshPro>().text = tileData.state;

            if (i % level.width == 0)
            {
                z -= tile.GetComponent<MeshRenderer>().bounds.size.z + gap;
                x = 0;
            }

            tiles.Add(tile);

        }

    }

    private async Task<Level> loadLevel()
    {
        LevelLoader loader = new LevelLoader();
        return await loader.loadLevelsFromServerAsync();
    }

    async void Update()
    {
        if (Input.GetKeyDown("r"))
        {

            Debug.Log("Reloading");
            foreach (GameObject tile in tiles)
            {
                Destroy(tile);
            }
            tiles.Clear();
            level = await loadLevel();
            generateLevel();


        }
    }

}
