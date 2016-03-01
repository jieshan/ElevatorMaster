/**
 * File name: Floor.ts  
 */

/**
 * The floor class.
 */
class Floor
{
    /** The level of this floor */
    public level: number;

    /** Whether going up is requested */
    public upRequested: boolean;

    /** Whether going down is requested */
    public downRequested: boolean;

    /** The destination coverage of this floor */
    public coverage: number[];

    /** The array holding the people that are waiting */
    public waitingLounge: Person[];

    /**
     * @constructor - floor
     * @param level - the level of this floor
     */
    constructor(level: number)
    {
        this.level = level;
    }
} 