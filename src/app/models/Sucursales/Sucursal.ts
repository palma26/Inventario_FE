import {Data} from '../Sucursales/DataSucursal';
import {TransaccionResponse} from '../TransaccionResponse';

export interface Sucursal extends TransaccionResponse{
 data?: Data[];
}
