import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  data: any[] = []

  editing: boolean = false

  est: any = {
    matricula: '',
    nombre: '',
    edad: null,
    sexo: 'M',
    cuatrimestre: ''
  }

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getAllEstudiantes()
  }

  getAllEstudiantes() {
    this.dataService.getEstudiantes().subscribe(
      res => {
        this.data = res.data
        console.log(res)
      },
      error => {
        console.log(error)
      }
    )
  }

  createEstudiante() {
    this.dataService.createEstudiante(this.est).subscribe(
      res => {
        this.getAllEstudiantes()
        this.est = {}
      },
      error => {
        console.log(error)
      }
    )
  }

  delete(id: any) {
    this.dataService.deleteEstudiante(id).subscribe(
      res => {
        console.log(res)
        this.getAllEstudiantes()
      },
      error => {
        console.log(error)
      }
    )
  }

  edit(est: any) {
    this.editing = true
    this.est = est
  }

  editEst() {
    this.dataService.updateEstudiante(this.est, this.est._id).subscribe(
      res => {
        this.getAllEstudiantes()
        this.est = {}
        this.editing = false
      },
      error => {
        console.log(error)
      }
    )
  }
}
