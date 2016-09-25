/**
 * File name: Elevator.ts  
 */

/** The coverage of the elevator */
enum CoverageOptions
{
    /** All floors are covered */
    All,

    /** Even number floors are covered */
    Even,

    /** Odd number floors are covered */
    Odd
}

/**
 * The configuration options of elevator
 */
interface ElevatorOptions
{
    /** The capacity of this elevator carriage */
    capacity: number;

    /** The time needed to open/close doors */
    openCloseTime: number;

    /** The coverage options */
    coverage: number[]| CoverageOptions;

    /** The time the elevator takes to move through floors when fully sped up */
    floorTime;

    /** The time the elevator takes when move to a stopping floor */
    stopFloorTime;
}

/**
 * The elevator class.
 */
class Elevator
{
    /**
     * @constructor - elevator
     * @param options - the configuration options of elevator
     */
    constructor(options: ElevatorOptions)
    {
    }
}