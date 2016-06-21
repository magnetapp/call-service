/**
 * IWorker.ts
 * 
 * Defines the IWorker interface.
 * 
 */

/**
 * IWorker
 * 
 * A generic interface for all Worker classes.
 * 
 * Properties:
 * 
 * @prop {IFirebaseService} firebase - The Worker's firebase instance
 * 
 * Methods:
 * 
 * @method go(): Promise<any> - Starts the Worker
 * 
 */

export interface IWorker {
  go(): Promise<any>;
}