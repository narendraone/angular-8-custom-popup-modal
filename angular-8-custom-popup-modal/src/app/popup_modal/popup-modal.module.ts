import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupModalComponent } from './popup-modal.component';

@NgModule({
    imports: [CommonModule],
    declarations: [PopupModalComponent],
    exports: [PopupModalComponent]
})
export class PopupModalModule { }