import { Injectable } from '@angular/core';

import { APIService } from '../services/api.service';

@Injectable()
export class MoldService {
  constructor(private _api: APIService) { }
}
