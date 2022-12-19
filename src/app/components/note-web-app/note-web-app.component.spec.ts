import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteWebAppComponent } from './note-web-app.component';

describe('NoteWebAppComponent', () => {
  let component: NoteWebAppComponent;
  let fixture: ComponentFixture<NoteWebAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteWebAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteWebAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
