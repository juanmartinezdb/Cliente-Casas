import { Solicitud } from './../../model/solicitud';
import { HousingService } from '../../service/housing.service';
import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormService } from '../../service/form.service';
import { HousingLocation } from '../../model/housinglocation';

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
@Input() housingId!: number | undefined;


constructor (private fb: FormBuilder){
  this.applyForm = this.fb.group({
    firstName: ["", [Validators.required]],
    lastName: ["",[Validators.required]],
    email: ["",[Validators.email]]
  });
}

  submitApplication() {
    if (this.applyForm.valid){

      let solicitud: Solicitud = {
        houseid: this.housingId!,
        firstName: this.applyForm.value.firstName ,
        lastName: this.applyForm.value.lastName ,
        email: this.applyForm.value.email
      }

      this.formService.submitApplication(solicitud)
      alert("formulario enviado con exito");
    }
  }
}
