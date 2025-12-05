import { Component, signal } from '@angular/core';
import { IpService } from './service/ip';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})

// export class App {
//   protected readonly title = signal('projet1')
// }

export class App {

  constructor(private ipService:IpService){}

  // title: string = 'projet titre';
  protected readonly title = signal('projet1')
  ipAddress: string = 'Inconnue IP';

  getIP()
  {
    this.ipService.getIPAddress().subscribe((res:any)=>{
      this.ipAddress=res.ip;
    });
  }
}
