import { Injectable } from '@angular/core';

import { APIService } from '../services/api.service';

@Injectable()
export class TestService {
  constructor(private _api: APIService) { }
}
