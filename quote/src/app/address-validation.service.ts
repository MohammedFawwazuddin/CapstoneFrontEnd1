import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressValidationService {
  private apiUrl = 'https://loqate-address.p.rapidapi.com/rest/';

  private httpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': '05f6b6737bmshf3b4c4329a2c06ap1a42cbjsn3cb36587d0f4',
      'X-RapidAPI-Host': 'loqate-address.p.rapidapi.com'
    })
  };

  constructor(private http: HttpClient) {}

  validateAddress(address: string): Observable<any> {
    const params = new HttpParams()
      .set('lqtkey', '14dea8c6fggh51yt7b1c8d477994542b7f115009')
      .set('p', 'v+g')
      .set('addr', address)
      .set('opts', 'DefaultCountry=USA,OutputScript=Latn');

    return this.http.get(this.apiUrl, { params, ...this.httpOptions });
  }
}
