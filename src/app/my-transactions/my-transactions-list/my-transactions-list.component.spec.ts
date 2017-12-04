import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTransactionsListComponent } from './my-transactions-list.component';

describe('MyTransactionsListComponent', () => {
  let component: MyTransactionsListComponent;
  let fixture: ComponentFixture<MyTransactionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTransactionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTransactionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
