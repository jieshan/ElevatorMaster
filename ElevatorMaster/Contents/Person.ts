/**
 * File name: Person.ts  
 */

/**
 * The person class.
 */
class Person
{
    /** The floor number the person starts from */
    public origin: number;

    /** The floor number the person desires to go */
    public destination: number;

    /** The floor range of the person chooses to walk instead of taking elevator  */
    public exerciseRange: number;

    /** The time the person takes to move in/out of elevator */
    public moveThroughTime: number;

    /**
     * @constructor - person
     * @param origin - the floor number the person starts from
     * @param destination - the floor number the person desires to go
     * @param exercisrRange - the floor range of the person chooses to walk instead of taking elevator
     * @param moveThroughTime - the time the person takes to move in/out of elevator
     */
    constructor (origin: number, destination: number, exerciseRange: number, moveThroughTime)
    {
        this.origin = origin;
        this.destination = destination;
        this.exerciseRange = exerciseRange;
        this.moveThroughTime = moveThroughTime;
    }
}  