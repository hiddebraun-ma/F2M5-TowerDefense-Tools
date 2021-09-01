using System;
using System.IO;
using System.Threading.Tasks;
using UnityEngine;
using UnityEngine.Networking;

public class LevelLoader
{
    private Level level;

    [SerializeField]
    private string jsonPath = "";

    [SerializeField]
    private string jsonUrl = "http://localhost:3001/levels";

    [ContextMenu("Load Levels from JSON")]
    public Level loadLevelsFromFile()
    {
        Debug.Log($"Persistent data loaded from: {Application.persistentDataPath}");
        Debug.Log("Loading from " + jsonPath);

        using (StreamReader stream = new StreamReader(jsonPath))
        {
            string json = stream.ReadToEnd();
            level = Level.CreateFromJSON(json);
            return level;
        }
    }

    [ContextMenu("Load Levels from Server")]
    public async Task<Level> loadLevelsFromServerAsync()
    {
        Debug.Log("Loading from " + jsonUrl);
        level = await DoJsonRequest(jsonUrl);
        return level;

    }

    public async Task<Level> DoJsonRequest(string jsonUrl)
    {

        try
        {
            UnityWebRequest request = UnityWebRequest.Get(jsonUrl);
            request.SetRequestHeader("Content-Type", "application/json");

            // Request and wait for the desired page.
            var operation = request.SendWebRequest();

            while (!operation.isDone)
                await Task.Yield();


            if (request.result != UnityWebRequest.Result.Success)
            {
                Debug.LogError("Error: " + request.error);
            }

            Debug.Log($"Result = {request.downloadHandler.text}");

            return Level.CreateFromJSON(request.downloadHandler.text);

        }
        catch (Exception ex)
        {
            Debug.LogError($"{nameof(DoJsonRequest)} failed: {ex.Message}");
            return default;
        }

    }

}
