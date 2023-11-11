import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private backend_url = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  public getCountyData(name: string): Promise<any> {
    return this.http.get(`${this.backend_url}/${name.toLowerCase().replace(" ", "_")}`).toPromise();
  }

  public getStateDataByCounty(name: string): Promise<any[]> {
    return <Promise<any[]>> this.http.get(`${this.backend_url}/`).toPromise();
  }

  public uploadFile(filename: string, filedata: any): Promise<void> {
    return <Promise<void>> this.http.post(`${this.backend_url}/upload/test.xlsx`, {'file': filedata}).toPromise();
  }
}
