import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {throwError} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  StartGame(){
    return this._http.get<any>("https://localhost:10001/api/datagame/startgame",
        {withCredentials: true})
        .pipe(map((res:any)=>{return res;}),
            catchError(err => {
              console.log("error StartGame   ",err);
              return throwError(err);
            }));
  }

    EndRound(id:number){
        //const params = new HttpParams().set('secretNumber', id.toString());
        return this._http.post<any>("https://localhost:10001/api/datagame/endround/",
            id,{ withCredentials: true })
            .pipe(map((res:any)=>{return res;}),
                catchError(err => {
                    console.log("error EndRound   ",err);
                    return throwError(err);

                }));
    }
}
