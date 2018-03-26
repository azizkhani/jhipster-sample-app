import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { Label } from './label.model';
import { LabelService } from './label.service';

@Component({
    selector: 'jhi-label-detail',
    templateUrl: './label-detail.component.html'
})
export class LabelDetailComponent implements OnInit {

    label: Label;

    constructor(
        private route: ActivatedRoute,
        private router: Router

    ) {
    }

    ngOnInit() {
        this.route.data.subscribe(({label}) => {
            this.label = label.body ? label.body : label;
        });
    }

    previousState() {
        window.history.back();
    }
}
