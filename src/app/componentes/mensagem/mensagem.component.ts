import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css'],
})
export class MensagemComponent implements OnInit {
  @Input() // criar uma atributo e passa para o componente
  mensagem = '';

  constructor() {}

  ngOnInit(): void {}
}
