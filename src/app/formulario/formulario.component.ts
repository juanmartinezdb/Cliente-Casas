import { HousingService } from './../housing.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  housingService: HousingService = inject(HousingService);
  formService: FormService = inject(FormService);
  applyForm: FormGroup;
constructor (private fb: FormBuilder){
  this.applyForm = this.fb.group({
    firstName: ["", [Validators.required]],
    lastName: ["",[Validators.required]],
    email: ["",[Validators.email]]
  });
}

  submitApplication() {
    if (this.applyForm.valid){
      this.formService.submitApplication(
        this.applyForm.value.firstName ?? '',
        this.applyForm.value.lastName ?? '',
        this.applyForm.value.email ?? '',
      )
    }
  }
}
