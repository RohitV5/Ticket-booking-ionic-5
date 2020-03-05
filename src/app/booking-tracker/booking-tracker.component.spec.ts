import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookingTrackerComponent } from './booking-tracker.component';

describe('BookingTrackerComponent', () => {
  let component: BookingTrackerComponent;
  let fixture: ComponentFixture<BookingTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingTrackerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
