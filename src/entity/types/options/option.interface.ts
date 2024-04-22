import { z } from 'zod';

// Option Set Type Definition
export const OptionArray = <T extends z.ZodType<any>>(T: T) =>
    z.object({
        options: z.array(T),
    });

export const OptionFromResourceList = (resource_list: string) =>
    z.object({
        resource_list: z.literal(resource_list),
    });

export const OptionEquipmentCategory = z.object({
    equipment_category: z.string(),
});

export const Options = <T extends z.ZodType<any>>(T: T) =>
    z.object({
        desc: z.string(),
        type: z.string(),
        choose: z.number(),
        from: T,
    });

// OptionSet Type Definition
export const OptionReference = z.string();
export type OptionReference = z.infer<typeof OptionReference>;

export const OptionCountedReference = z.object({
    count: z.number(),
    of: z.string(),
});
export type OptionCountedReference = z.infer<typeof OptionCountedReference>;

export const OptionChoice = <T extends z.ZodType<any>>(T: T) => Options(T);
