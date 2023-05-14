import { Component, DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SelectedLinkDirective } from './selected-link.directive';

@Component({
  template: `
    <table>
      <thead>
        <tr>
          <th><a appSelectedLink class="selector">Link 1</a></th>
          <th><a appSelectedLink class="selector">Link 2</a></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cell 1</td>
          <td>Cell 2</td>
        </tr>
      </tbody>
    </table>
  `
})
class TestComponent {}

describe('SelectedLinkDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let links: DebugElement[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedLinkDirective, TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    links = fixture.debugElement.queryAll(By.css('a.selector'));
  });

  it('should add selected class to clicked link', () => {
    const link1 = links[0].nativeElement as HTMLElement;
    const link2 = links[1].nativeElement as HTMLElement;

    // Click on the first link
    link1.click();
    fixture.detectChanges();

    // Check that only the first link has the selected class
    expect(link1.classList.contains('selected')).toBe(true);
    expect(link2.classList.contains('selected')).toBe(false);

    // Click on the second link
    link2.click();
    fixture.detectChanges();

    // Check that only the second link has the selected class
    expect(link1.classList.contains('selected')).toBe(false);
    expect(link2.classList.contains('selected')).toBe(true);
  });

  it('should remove selected class from all links except the clicked link', () => {
    const link1 = links[0].nativeElement as HTMLElement;
    const link2 = links[1].nativeElement as HTMLElement;

    // Click on the first link
    link1.click();
    fixture.detectChanges();

    // Check that only the first link has the selected class
    expect(link1.classList.contains('selected')).toBe(true);
    expect(link2.classList.contains('selected')).toBe(false);

    // Click on the second link
    link2.click();
    fixture.detectChanges();

    // Check that only the second link has the selected class
    expect(link1.classList.contains('selected')).toBe(false);
    expect(link2.classList.contains('selected')).toBe(true);

    // Click on the first link again
    link1.click();
    fixture.detectChanges();

    // Check that only the first link has the selected class
    expect(link1.classList.contains('selected')).toBe(true);
    expect(link2.classList.contains('selected')).toBe(false);
  });
});
