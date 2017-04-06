import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By }                                from '@angular/platform-browser';
import { DebugElement }                      from '@angular/core';
import { AppComponent }                      from './app.component';


describe('Wel',() => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;  // the DebugElement with the welcome message
  let el: HTMLElement; // the DOM element with the welcome message

 beforeEach(() => {
    TestBed.configureTestingModule({
       declarations: [ AppComponent ],

    });

    fixture = TestBed.createComponent(AppComponent);
    comp    = fixture.componentInstance;

    //  get the "welcome" element by CSS selector (e.g., by class name)
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

     it('no title in the DOM until manually call `detectChanges`', () => {
        expect(el.textContent).toEqual('');
    });

    it('should display original title', () => {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    });

    it('should display a different test title', () => {
      //  comp.title = 'Great man';
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    });

});