import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  ResolveEnd,
  ResolveStart,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, Subscription } from 'rxjs';
import { JarLaySnavItems, LAYOUT_RESOURCES_LOADED } from './navigation';
import { RoutePartsService } from './services';
import initLayout from './layout.bundle';

@Component({
  selector: 'jar-layout',
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JarLayout implements OnInit, AfterViewInit {
  @Input() appTitle = 'JASR JW';
  @Input() appIcon = 'favicon.ico';
  @Input() initialPage = 'dashboard';
  @Input() includeBreadcrumbs = false;

  @Input() sidenav: JarLaySnavItems[] = [];

  @Input() authorities: any | any[];
  @Input() context: any;

  private _pageTitle = '';
  private _isModuleLoading: boolean = false;
  private _resourcesLoaded = LAYOUT_RESOURCES_LOADED;

  private _routerSubs!: Subscription;
  private _loadedSubs!: Subscription;

  constructor(
    private _routePartsService: RoutePartsService,
    private _activeRoute: ActivatedRoute,
    private _cd: ChangeDetectorRef,
    private _router: Router,
    private _title: Title
  ) {}

  public ngOnInit(): void {
    initLayout;

    this._changePageTitle();

    this._setLoader();
  }

  public ngAfterViewInit(): void {
    this._loadedSubs = this._resourcesLoaded.valueChanges.subscribe(() => {
      this._cd.markForCheck();
    });

    setTimeout(() => {
      this._loadedSubs.unsubscribe();
    }, 10000);
  }

  private _setLoader() {
    this._routerSubs = this._router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
        this._isModuleLoading = true;
      }
      if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
        this._isModuleLoading = false;
        this._scrollTop();
      }
    });
    document.getElementsByTagName('body')[0].classList.add('jar-layout');
  }

  private _changePageTitle() {
    this._router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      const routeParts = this._routePartsService.generateRouteParts(this._activeRoute.snapshot);
      if (routeParts.length) {
        this._pageTitle = routeParts
          .reverse()
          .map(part => part.title)
          .reduce((partA, partI) => {
            return `${partA} > ${partI}`;
          });
        this._pageTitle = `${this.appTitle} | ${this._pageTitle}`;
        this._title.setTitle(this._pageTitle);
      }
    });
  }

  private _scrollTop() {
    window.scroll({
      top: 0,
      left: 0,
    });
  }

  public ngOnDestroy(): void {
    document.getElementsByTagName('body')[0].classList.remove('jar-layout');
    this._routerSubs.unsubscribe();
  }

  get isModuleLoading() {
    return this._isModuleLoading;
  }

  get resourcesLoaded() {
    return this._resourcesLoaded.value;
  }
}
