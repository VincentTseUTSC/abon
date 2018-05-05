import { Injectable } from '@angular/core';

import { APIService } from '../services/api.service';

@Injectable()
export class VTestService {
  constructor(private _api: APIService) { }

  getTest(params) {
    return this._api.get('test', params);
  }
  // getSubmission(params) {
  //   return this._api.get('works/submissions', params);
  // }

  // getSubmissionFile(params) {
  //   return this._api.get('works/submissions/files', params);
  // }

  // getAllAnnotations(params) {
  //   return this._api.get('works/annotations', params);
  // }

  // addAnnotation(params) {
  //   return this._api.put('works/annotations', params);
  // }

  // deleteAnnotation(params) {
  //   return this._api.delete('works/annotations', params);
  // }

  // getSubmissionFeedback(params) {
  //   return this._api.get('works/feedbacks', params);
  // }

  // getFeedbackQuestion(params) {
  //   return this._api.get('works/feedback_questions', params);
  // }

  // updateFeedbacks(params) {
  //   return this._api.post('works/feedbacks', params);
  // }
}
