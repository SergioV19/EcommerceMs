import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignRolesAdminComponent } from './assign-roles-admin.component';

describe('AssignRolesAdminComponent', () => {
  let component: AssignRolesAdminComponent;
  let fixture: ComponentFixture<AssignRolesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignRolesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignRolesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
