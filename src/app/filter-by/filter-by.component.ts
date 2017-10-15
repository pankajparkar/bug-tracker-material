import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/takeUntil';
import { Subscription } from 'rxjs/Subscription';

import { FilterByService } from './filter-by.service';
import { CommonService } from './../services/common.service';

@Component({
    selector: 'bt-filter-by',
    templateUrl: 'filter-by.component.html'
})

export class FilterByComponent implements OnInit {
    filterName$: Observable<string>;
    filterNameSub$: Subscription;
    destroy$: Subject<boolean> = new Subject<boolean>();
    names: any[];
    constructor(
        private filterByService: FilterByService,
        private commonService: CommonService
    ) { }

    getNames(){
        //created a promis that depends on it
        return new Promise((resolve, reject) => {
            this.commonService.getNames().subscribe(
                (names: any[]) => {
                    this.names = names;
                    resolve();
                }
            )
        })
    }

    setFilterName(item: any){
        let value = item;
        this.filterByService.emitFilterNameValue(value);        
    }

    ngOnInit() { 
        this.getNames().then(() => 
            this.setFilterName(this.filterByService.getFilterNameLastValue())
        );
        this.filterName$ = this.filterByService.filterNameObservable().takeUntil(this.destroy$);
    }

    ngOnDestroy(){
        //clearing up stuff
        this.destroy$.next(true);
        // Now let's also unsubscribe from the subject itself:
        this.destroy$.unsubscribe();
    }
}