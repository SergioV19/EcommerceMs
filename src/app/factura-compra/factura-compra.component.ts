import { Component, OnInit } from '@angular/core';
import {VentasService} from "../ventas.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-factura-compra',
  templateUrl: './factura-compra.component.html',
  styleUrls: ['./factura-compra.component.css']
})
export class FacturaCompraComponent implements OnInit {
  
  constructor(private ventasService: VentasService, private activatedRoute: ActivatedRoute) { }
  public venta = {
    total: 0,
    nombre: "",
    direccion: "",
    productos: [],
  };
  public factura = {
    
  }
  public fecha = {
    dia: new Date().getDate(),
    mes: new Date().getMonth(),
    ano: new Date().getFullYear(),
  }
  

  public columnas = ['cantidad', 'nombre', 'precio Unitario', 'precio Total'];

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    this.venta = await this.ventasService.obtenerDetalleDeVenta(id);
  }

}
