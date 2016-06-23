/**
 * Call.ts
 * 
 * A Call model.
 * 
 */

export enum CALL_ROLE {
  caller,
  callee
}

export interface ICall {
  userId: string;
  role: CALL_ROLE;
  accepted: boolean;
  cancelled: boolean;
  busy: boolean;
  connection: any;
  timestamp: any;
}

export class Call implements ICall {
  
  userId: string;
  role: CALL_ROLE;
  accepted: boolean;
  cancelled: boolean;
  busy: boolean;
  connection: any;
  timestamp: any;

  constructor(userId: string, data: any) {
    this.userId =  userId;
    this.role = data.role || CALL_ROLE.caller;
    this.accepted = (data.role === CALL_ROLE.caller);
    this.cancelled = data.cancelled || false;
    this.busy = data.busy || true;
    this.connection = data.connection || null;
    this.timestamp = '' // firebase.database.ServerValue.TIMESTAMP;
  }
}