import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { MHeaderModule } from '../m-header/m-header.module';
// import { MFooterModule } from '../m-footer/m-footer.module';
// import { MCommonModule } from '../m-common/m-common.module';
// import { MNotFoundModule } from '../m-notfound/m-notfound.module';

// import { MFeedbackComponent } from './m-feedback.component';
import { VTestComponent } from './v-test.component';
// import { MReviewComponent } from './m-review.component';

// import { MAssignmentsService } from '../m-assignments/m-assignments.service';
import { VTestService } from './v-test.service';


@NgModule({
  declarations: [
    VTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    // MHeaderModule,
    // MFooterModule,
    // MCommonModule,
    // MNotFoundModule
  ],
  exports: [
    VTestComponent
    // MReviewComponent
  ],
  providers: [
    // MAssignmentsService,
    VTestService
  ]
})
export class VTestModule { }
