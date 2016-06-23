export interface IXirsysModel {
  ident: string;
  secret: string;
  domain: string;
  application: string;
  room: string;
  secure: number;
}

export class XirsysModel implements IXirsysModel {
  ident: string;
  secret: string;
  domain: string;
  application: string;
  room: string;
  secure: number;

  constructor(options?: any) {
    this.ident = options.ident || 'magnetadmin';
    this.secret = options.secret || '';
    this.domain = options.domain || 'www.magnet.host';
    this.room = options.room || 'test';
    this.application = options.application || 'test';
    this.secure = options.secure || 0;
  }
}