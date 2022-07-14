import { IHvalePonude } from './../hvale-ponude.model';
import { AfterViewInit, Component, Input, ViewChild, OnInit } from '@angular/core';
import { HvalePonudeService } from '../service/hvale-ponude.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'jhi-hvale-ponude',
  templateUrl: './hvale-ponude.component.html',
  styleUrls: ['./hvale-ponude.component.scss'],
})
export class HvalePonudeComponent implements AfterViewInit, OnInit {
  hvalePonudes?: any;
  ukupnaProcijenjena?: number | null | undefined;
  isLoading = false;
  sifraPonude?: any;
  public displayedColumns = [
    'sifra postupka',
    'broj partije',
    'inn',
    'farmaceutski oblik',
    'pakovanje',
    'kolicina',
    'procijenjena vrijednost',
  ];

  public dataSource = new MatTableDataSource<IHvalePonude>();
  sifraPostupka?: any;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() postupak: any;

  constructor(protected hvaleService: HvalePonudeService) {}

  ngOnInit(): void {
    this.getSifraPostupka();
    this.getTotalProcijenjena();
  }

  public getSifraPostupka(): void {
    this.hvaleService.hvali(this.postupak).subscribe((res: HttpResponse<IHvalePonude[]>) => {
      this.dataSource.data = res.body ?? [];
      this.hvalePonudes = res;
      this.getTotalProcijenjena();
    });
  }
  nadjiPoSifriPonude(): void {
    this.isLoading = true;
    this.hvaleService
      .query({
        'sifraPonude.in': this.sifraPonude,
      })
      .subscribe({
        next: (res: HttpResponse<IHvalePonude[]>) => {
          this.isLoading = false;
          this.dataSource.data = res.body ?? [];
          this.getTotalProcijenjena();
        },
        error: () => {
          this.isLoading = false;
        },
      });
  }

  sifraPonudeNull(): void {
    this.sifraPonude = null;
    this.sifraPonude = '';
    this.getSifraPostupka();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getTotalProcijenjena(): any {
    return (this.ukupnaProcijenjena = this.dataSource.filteredData
      .map(t => t.procijenjenaVrijednost)
      .reduce((acc, value) => acc! + value!, 0));
  }
}
