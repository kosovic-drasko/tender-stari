import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { isPresent } from 'app/core/util/operators';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { IPonude, getPonudeIdentifier } from '../ponude.model';

export type EntityResponseType = HttpResponse<IPonude>;
export type EntityArrayResponseType = HttpResponse<IPonude[]>;

@Injectable({ providedIn: 'root' })
export class PonudeService {
  public urlDeleSeleced = this.applicationConfigService.getEndpointFor('api/ponude/delete/selected');
  public urlUpdateSeleced = this.applicationConfigService.getEndpointFor('api/ponude/update/selected');
  public resourceUrl = this.applicationConfigService.getEndpointFor('api/ponudes');
  public resourceUrlExcelUpload = SERVER_API_URL + 'api/upload';
  public resourceUrlSifraPonudeDelete = this.applicationConfigService.getEndpointFor('api/ponude-delete');

  constructor(protected http: HttpClient, protected applicationConfigService: ApplicationConfigService) {}

  deleteSifraPonude(sifraPonude: number): any {
    return this.http.delete(`${this.resourceUrlSifraPonudeDelete}/${sifraPonude}`);
  }

  deleteSelected(): void {
    this.http.delete(`${this.urlDeleSeleced}`).subscribe();
  }
  create(ponude: IPonude): Observable<EntityResponseType> {
    return this.http.post<IPonude>(this.resourceUrl, ponude, { observe: 'response' });
  }

  update(ponude: IPonude): Observable<EntityResponseType> {
    return this.http.put<IPonude>(`${this.resourceUrl}/${getPonudeIdentifier(ponude) as number}`, ponude, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IPonude[]>(this.resourceUrl, { params: options, observe: 'response' });
  }
  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  addPonudeToCollectionIfMissing(ponudeCollection: IPonude[], ...ponudesToCheck: (IPonude | null | undefined)[]): IPonude[] {
    const ponudes: IPonude[] = ponudesToCheck.filter(isPresent);
    if (ponudes.length > 0) {
      const ponudeCollectionIdentifiers = ponudeCollection.map(ponudeItem => getPonudeIdentifier(ponudeItem)!);
      const ponudesToAdd = ponudes.filter(ponudeItem => {
        const ponudeIdentifier = getPonudeIdentifier(ponudeItem);
        if (ponudeIdentifier == null || ponudeCollectionIdentifiers.includes(ponudeIdentifier)) {
          return false;
        }
        ponudeCollectionIdentifiers.push(ponudeIdentifier);
        return true;
      });
      return [...ponudesToAdd, ...ponudeCollection];
    }
    return ponudeCollection;
  }

  UploadExcel(formData: FormData): any {
    const headers = new HttpHeaders();

    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    return this.http.post(this.resourceUrlExcelUpload, formData, { headers });
  }

  deletePonuda(id: number): void {
    this.http.delete(`${this.resourceUrl}/${id}`).subscribe(
      () => {
        // eslint-disable-next-line no-console
        console.log('obrisano');
      },
      () => {
        // eslint-disable-next-line no-console
        console.log('nije obrisano');
      }
    );
  }
}
