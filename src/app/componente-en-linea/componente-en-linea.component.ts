import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-en-linea',
  template: `
    <div class="card">
      <h1>Ejemplo de componente en línea</h1>
      <p>{{message}}</p>
    </div>
  `,
  styles: [ // Array de bloques CSS
    'p {color: violet;}',
    'h1 {color: brown}'
  ]
})
export class ComponenteEnLineaComponent implements OnInit {

  message: string = 'Hola Mundo!'

  constructor() { }

  ngOnInit(): void {
  }

}
