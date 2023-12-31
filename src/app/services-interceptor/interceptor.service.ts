import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable,finalize,tap } from 'rxjs';
import { spinnerService } from './spinner.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private spinnerService:spinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  this.spinnerService.callSpinner()
   return next.handle(request).pipe(
    finalize(()=>{
      this.spinnerService.stopSpinner()
    })
   )
  }
}
