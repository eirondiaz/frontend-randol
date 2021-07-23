import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  API: string = 'http://localhost:4500/api/v1/estudiantes'

  constructor(private _http: HttpClient) { }

  getEstudiantes() {
    return this._http.get<any>(this.API)
  }

  createEstudiante(data: any) {
    return this._http.post<any>(this.API, data)
  }

  deleteEstudiante(id: any) {
    return this._http.delete<any>(this.API + '/' + id)
  }

  updateEstudiante(data: any, id: any) {
    return this._http.put<any>(this.API + '/' + id, data)
  }
}
