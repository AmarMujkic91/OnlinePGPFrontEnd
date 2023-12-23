import {HttpHeaders} from "@angular/common/http";

export class MojConfig{
  static adresa_servera = "https://localhost:44358";

  static http_opcije= function (){

    let mojtoken = localStorage.getItem("autentifikacija-tokenTest");
    if(mojtoken!=null){
      return {

        headers: {
          'autentifikacija-tokenTest': mojtoken,
        }
      };
    }
    else {
      return {
        headers: {
          'autentifikacija-tokenTest': 'BadToken',
        }
      };
    }

  }

}
