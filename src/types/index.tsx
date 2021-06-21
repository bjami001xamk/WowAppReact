export interface Character {
    id:string;
    mediainfo:{ avatar_url: string};
    avatar_url:string;
    name:string;
    level:string;
    playable_race:{ id: string
                    name: {
                        en_GB:string;
                    }};
    playable_class:{ id: string
                     name: {
                        en_GB:string;
                     }};
    type:string;

}

export interface CharaterStatistics{
    _links: {
      self: {
        href: string;
      };
    }
    health: number;
    power: number,
    power_type: {
      key: {
        href: string;
      },
      name: string,
      id: string
    },
    speed: {
      rating: string,
      rating_bonus: string
    },
    strength: {
      base: string,
      effective: string
    },
    agility: {
      base: string,
      effective: string
    },
    intellect: {
      base: string,
      effective: string
    },
    stamina: {
      base: string,
      effective: string
    },
    melee_crit: {
      rating: string,
      rating_bonus: string,
      value: string
    },
    melee_haste: {
      rating: string,
      rating_bonus: string,
      value: string
    },
    mastery: {
      rating: string,
      rating_bonus: string,
      value: string
    },
    bonus_armor: string,
    lifesteal: {
      rating: string,
      rating_bonus: string,
      value: string
    },
    versatility: string,
    versatility_damage_done_bonus: string,
    versatility_healing_done_bonus: string,
    versatility_damage_taken_bonus: string,
    avoidance: {
      rating: string,
      rating_bonus: string
    },
    attack_power: string,
    main_hand_damage_min: string,
    main_hand_damage_max: string,
    main_hand_speed: string,
    main_hand_dps: string,
    off_hand_damage_min: string,
    off_hand_damage_max: string,
    off_hand_speed: string,
    off_hand_dps: string,
    spell_power: string,
    spell_penetration: string,
    spell_crit: {
      rating: string,
      rating_bonus: string,
      value: string
    },
    mana_regen: string,
    mana_regen_combat: string,
    armor: {
      base: string,
      effective: string
    },
    dodge: {
      rating: string,
      rating_bonus: string,
      value: string
    },
    parry: {
      rating: string,
      rating_bonus: string,
      value: string
    },
    block: {
      rating: string,
      rating_bonus: string,
      value: string
    },
    ranged_crit: {
      rating: string,
      rating_bonus: string,
      value: string
    },
    ranged_haste: {
      rating: string,
      rating_bonus: string,
      value: string
    },
    spell_haste: {
      rating: string,
      rating_bonus: string,
      value: string
    },
    character: {
      key: {
        href: string
      },
      name: string,
      id: string,
      realm: {
        key: {
          href: string
        },
        name: string,
        id: string,
        slug: string
      }
    }
}