"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
describe('Wel', function () {
    var comp;
    var fixture;
    var de; // the DebugElement with the welcome message
    var el; // the DOM element with the welcome message
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent],
        });
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
        //  get the "welcome" element by CSS selector (e.g., by class name)
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        el = de.nativeElement;
    });
    it('no title in the DOM until manually call `detectChanges`', function () {
        expect(el.textContent).toEqual('');
    });
    it('should display original title', function () {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    });
    it('should display a different test title', function () {
        //  comp.title = 'Great man';
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    });
});
//# sourceMappingURL=app.component.spec.js.map