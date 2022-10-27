import {Data } from '../Empresas/DataEmpresa';
import { TransaccionResponse } from '../TransaccionResponse';

export interface Empresa extends TransaccionResponse{
  data?: Data[];
}
