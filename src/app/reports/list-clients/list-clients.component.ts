import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserService } from 'src/app/services/service.index';
import { ActivatedRoute, Params } from '@angular/router';
import { RegisterService } from '../../services/register/register.service';
declare function init_plugins();

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styles: []
})
export class ListClientsComponent implements OnInit, AfterViewInit {

  public clients;
  public search;

  constructor(
    // tslint:disable-next-line: variable-name
    public _userService: UserService,
    // tslint:disable-next-line: variable-name
    public _route: ActivatedRoute,
    // tslint:disable-next-line: variable-name
    public _registerService: RegisterService
  ) {

  }

  ngOnInit() {
    init_plugins();
    this._route.params.forEach((params: Params) => {
      this.search = params.search;
      if (this.search === '') {
        this.search = '0';
      }
    });

    this.getCompanys();
  }

  ngAfterViewInit() {
    this.activePrinter();
  }

  // Listar empresas
  getCompanys() {
    this._registerService.getClients(this.search).subscribe(
      (response: any) => {
        this.clients = response.clients;
      }
    );
  }

  activePrinter() {
    setTimeout(this.printer, 1500);
    this._userService.closeReport();
  }

  printer() {
    window.print();
  }

}
