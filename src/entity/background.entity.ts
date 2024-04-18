import { Column, Entity, PrimaryColumn } from 'typeorm';
import { LanguageOption } from './types/options/language-option.type';
import { TEquipmentQuantity } from './types/equipment-quantity-type';
import { PersonalityTraits } from './types/options/personality-traits-options.type';
import { StartingEquipmentOptions } from './types/options/starting-equipment-options.type';
import { StringTraits } from './types/options/string-options.type';

@Entity()
export class Background {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @Column('simple-array')
    starting_proficiencies: string[];

    @Column('simple-json')
    language_options: LanguageOption;

    @Column('simple-json')
    starting_equipment: TEquipmentQuantity;

    @Column('simple-json', { nullable: true })
    starting_equipment_options: StartingEquipmentOptions[];

    @Column('simple-json', { nullable: true })
    feature: { name: string; desc: string };

    @Column('simple-json')
    personality_traits: PersonalityTraits;

    @Column('simple-json')
    ideals: StringTraits;

    @Column('simple-json')
    bonds: StringTraits;

    @Column('simple-json')
    flaws: StringTraits;
}
