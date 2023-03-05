import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { RoutePartsService } from '../services';

@Component({
  selector: 'jar-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JarBreadcrumb implements OnDestroy {
  private _routeParts: any[];
  private _routerEventSub: Subscription;

  private _base = '';
  private _title = '';
  private _singleRoute = false;

  constructor(
    private router: Router,
    private routePartsService: RoutePartsService,
    private _cd: ChangeDetectorRef,
    private activeRoute: ActivatedRoute
  ) {
    this._routeParts = this.routePartsService.generateRouteParts(this.activeRoute.snapshot);

    this._routerEventSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this._routeParts = this.routePartsService.generateRouteParts(this.activeRoute.snapshot);
        // It will need be refactorized when include multi level
        this._routeParts.reverse().map((item, i) => {
          if (this._routeParts.reverse().length === 1) {
            this._base = item.title;
            this._title = item.title;
            this._singleRoute = true;
          } else if (this._routeParts.reverse().length === 2) {
            this._singleRoute = false;
            if (!i) {
              this._base = item.title;
            }
            if (i) {
              this._title = item.title;
            }
          }
        });
        _cd.markForCheck();
      });
  }

  public ngOnDestroy(): void {
    if (this._routerEventSub) this._routerEventSub.unsubscribe();
  }

  get base() {
    return this._base;
  }

  get title() {
    return this._title;
  }

  get singleRoute() {
    return this._singleRoute;
  }
}
