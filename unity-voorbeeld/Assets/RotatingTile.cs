using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RotatingTile : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        transform.Rotate(90 * Time.deltaTime, 0, 0); //rotates 360 degrees per second around x axis
    }

}
