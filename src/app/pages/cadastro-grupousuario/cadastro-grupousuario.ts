import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GrupoUsuario } from '../../model/grupousuario';
@Component({
    selector:'cadastro-grupousuario',
    templateUrl:'cadastro-grupousuario.html',
    styleUrls:['cadastro-grupousuario.scss']
})
export class CadastroGrupoUsuario implements OnInit {

    public formGroup:FormGroup;
    public grupoUsuario:GrupoUsuario = new GrupoUsuario();
    constructor(private formBuilder:FormBuilder){
    }
    ngOnInit(){
        this.formGroup = this.formBuilder.group({
            codigo:[null ],
            nome:[null, Validators.required],
            descricao:['']
        });
    }
    public salvar(){
        if (this.formGroup.invalid){
            return;
        }
        alert('Salvo com sucesso!');
    }

    public cancelar(){
        alert('Foi Cancelado!');
    }

}