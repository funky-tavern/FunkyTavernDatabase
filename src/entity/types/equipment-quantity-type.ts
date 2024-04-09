import { type Static, Type } from '@sinclair/typebox';


export const EQUIPMENT_QUANTITY_TYPE = Type.Object({
    quantity: Type.Number(),
    equipment: Type.String(),
});
export type EQUIPMENT_QUANTITY_TYPE = Static<typeof EQUIPMENT_QUANTITY_TYPE>;