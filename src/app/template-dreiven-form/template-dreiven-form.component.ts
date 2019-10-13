import { Component } from '@angular/core';

@Component({
  selector: 'app-template-dreiven-form',
  templateUrl: './template-dreiven-form.component.html',
  styleUrls: ['./template-dreiven-form.component.css']
})
export class TemplateDreivenFormComponent  {

  model: any = {};

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }

}
