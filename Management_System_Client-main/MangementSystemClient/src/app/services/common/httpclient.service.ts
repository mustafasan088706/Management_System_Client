import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//HttpClienti kullanabilmek icin AppModule de HttpClientModule import edilmelidir.

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {



  //Burada ki gibi baseUrli inject ettik eger adres degisecekse direk gidip appmodule provider daki sabit adresi degistirmemiz yeterli olacaktir.
  constructor(private httpClient: HttpClient, @Inject("baseUrl") private baseUrl: string) { }

  //Islemleri generic olarak yapiyoruz ki bize ne tipte geliyorsa gelsin gelen veriyi karsilayabilelim. Ayrica AppModule kisminda baseUrl olusturarak sabit url kismini tek bir kaynaga baglamis olduk([{provide:"baseUrl",useValue:"https//localhost:7131/api",multi:true}]).

  //id kismini neden class icerisinde degil de metod icerisinde verdigizin nedeni ise her istekte id ile ilgili bir calisma yapilmayacak oldugundan haliyle genel olmayan bir durumu class icerisinde tanimlamak best practice acisindan uygun degildir bundan dolayi eger ihtiyac duyuluyorsa metot icerisinde ayrica tanimlanabilir.Id yi nullable olarak tanimlamamizin neden ise eger id gelmiyorsa genel bir islem id geliyorsa o id ye ozel bir islem yaptigimizi dusunebiliriz.

  private url(requestParameter: Partial<RequestParameters>): string {

    //strint interpolation ile verileri alalim.Buarada eger request parameter iceerisindeki baseurl doluysa bunu kullan eger yoksa uygulamanin ana base urlini kullan diyoruz..Burada action mesela her daim olmasi gerekmediginden asagida tanimlarken slash koymadan tanimlayip eger varsa tekrar cift tirnak icinde ve slash koyarak tanimliyoruz.Yani action varsa /actionAdi yoksa "" bos gec demis olduk.
    return `${requestParameter.baseUrl ? requestParameter.baseUrl : this.baseUrl}/${requestParameter.controller}${requestParameter.action ? `/${requestParameter.action}` : ""}`;
  }


  get<T>(requestParameter: Partial<RequestParameters>,id? :string) :Observable<T>{
    let url: string = "";

//Eger fullendpoint doluysa onu kullan yoksa yukaridaki metot ile tanimladigimiz url konfuígurasyonunu kullan demis olduk.
    if (requestParameter.fullEndPoint)
      url = requestParameter.fullEndPoint;


    else
    //Eger id doluysa doluysa bunu kullan bossa bos gec dedik.
    url = `${this.url(requestParameter)}${id ? `/${id}` : ""}${requestParameter.queryString ? `?${requestParameter.queryString}` : ""}`;

//httpclientin donus tipini de parameter yaptik ki donecek sonucunda bir generic oldugunu bilecektir.Ve yukarida metodun basinada Observable donecegini belirttik.
      return this.httpClient.get<T>(url,{headers:requestParameter.headers})
  }

 post<T>(requestParameter: Partial<RequestParameters>,body:Partial<T>) :Observable<T>{
    let url: string = "";

    if (requestParameter.fullEndPoint)
    url = requestParameter.fullEndPoint;
  else

  url = `${this.url(requestParameter)}${requestParameter.queryString ? `?${requestParameter.queryString}` : ""}`


    return this.httpClient.post<T>(url,body,{headers:requestParameter.headers})
  }
 
 
 
  put<T>(requestParameter: Partial<RequestParameters>,body:Partial<T>) :Observable<T>{
    let url: string = "";

    if (requestParameter.fullEndPoint)
    url = requestParameter.fullEndPoint;
  else

  url = `${this.url(requestParameter)}${requestParameter.queryString ? `?${requestParameter.queryString}` : ""}`;
    return this.httpClient.put<T>(url,body,{headers:requestParameter.headers});
  }



  delete<T>(requestParameter: Partial<RequestParameters>,id:string): Observable<T>{
    let url: string = "";

    if (requestParameter.fullEndPoint)
    url = requestParameter.fullEndPoint;
  else

  url = `${this.url(requestParameter)}/${id}${requestParameter.queryString ? `?${requestParameter.queryString}` : ""}`;
    return this.httpClient.delete<T>(url,{headers:requestParameter.headers});
  }

}

//Bu istekleri parameterik olarak yapmak icin class icerisinde tanimlamak best practice dir.
export class RequestParameters {
  controller?: string;
  action?: string;
  queryString?:string;
  headers?: HttpHeaders;
  baseUrl?: string;
  fullEndPoint?: string;//Uygulama bambaska bir api uzerinden istek gonderecekse bunu kullanacagiz.Dis dunyada farkli servislere istek gonderebilmek amac.
}