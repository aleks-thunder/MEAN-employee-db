import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent {
  submitted: boolean = false;

  constructor(public service: EmployeeService, private toastr: ToastrService) {}

  onSubmit() {
    this.submitted = true;
    if (this.service.employeeForm.valid) {
      if (this.service.employeeForm.get('_id')?.value == '') {
        this.service.postEmployee().subscribe(() => {
          this.service.fetchEmployeeList();
          this.toastr.success('Created successfully', 'Employee registered');
          this.resetForm();
        });
      } else {
        this.service.putEmployee().subscribe(() => {
          this.service.fetchEmployeeList();
          this.toastr.success('Updated successfully', 'Employee changed');
          this.resetForm();
        });
      }
    }
  }

  resetForm() {
    this.service.employeeForm.reset();
    this.submitted = false;
  }
}
