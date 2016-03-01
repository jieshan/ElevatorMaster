/**
 * File name: Building.ts  
 */

/**
 * The building class.
 */
class Building
{
    /** The number of floors in the building */
    public numFloors: number;

    /** The array of floors in the building */
    public floors: Floor[];

    /** The array of elevators in the building */
    public elevators: Elevator[];

    /**
     * @constructor - building
     * @param numfloors - the number of floors in the building
     */
    constructor(numFloors: number)
    {
        this.numFloors = numFloors;
        for (var i = 0; i < numFloors; i++)
        {
            this.floors.push(new Floor(i + 1));
        }
    }
} 