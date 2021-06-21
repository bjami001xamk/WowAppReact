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