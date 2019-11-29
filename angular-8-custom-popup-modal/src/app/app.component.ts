import { Component, ViewEncapsulation } from '@angular/core';
import { PopupModalService } from './popup_modal';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {

    constructor(private modalService: PopupModalService) { }

    ngOnInit() { }

    openModal() {
        this.modalService.open("custom-modal-1");
    }

    closeModal() {
        this.modalService.close("custom-modal-1");
    }
 }
