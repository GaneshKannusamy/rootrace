import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

public qrCodeVal: string = null;
  public level: "L" | "M" | "Q" | "H";
  public width: number;

  constructor() {
      this.level = "L";
      this.qrCodeVal = "QR code string value";
      this.width = 200;
    }

    updateLevel(newValue: "L" | "M" | "Q" | "H") {
      this.level = newValue;
    }

    updateQrInfo(newValue: string) {
      this.qrCodeVal = "https://www.google.com/search?"+newValue;
    }

    updateWidth(newValue: number) {
      this.width = newValue;
    }

  ngOnInit() {
  }

}