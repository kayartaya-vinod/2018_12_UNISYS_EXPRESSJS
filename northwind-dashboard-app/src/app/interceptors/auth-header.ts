import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { headersToString } from 'selenium-webdriver/http';

// module: ./interceptors/autho-header.ts


export class AuthHeaderInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {

        let newReq = req;

        // check for _x in sessionStorage
        // if found, add a request header 'Authorization' with 'Bearer ...'
        if ('_x' in sessionStorage) {
            newReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + sessionStorage['_x'])
            });
        }
        return next.handle(newReq);
    }

}