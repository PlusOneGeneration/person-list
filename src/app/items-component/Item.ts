// export class Item {
//     id: number = null;
//     name: string = '';
//     phone: number = null;
// }

export class Name{
  familyName: string = null;
  givenName: string = null;
  formatted: string = null;
}

export class PhoneNumber{
  id: string = null;
  pref: boolean = false;
  value: string = null;
  type: string = null;
}

export class Photo{
  id: string = null;
  pref: boolean=false;
  type: string = null;
  value: string = null;
}

//
export class Item {
  id: string = null;
  rawId?: string = null;
  displayName?: string = null;
  name?: Name;
  nickname?: string = null;
  phoneNumbers?: PhoneNumber[];
  emails?: string = null;
  addresses?: string = null;
  ims?: string = null;
  organizations?: string = null;
  birthday?: string = null;
  note?: string = null;
  photos?: Photo[];
  categories?: string = null;
  urls?: string = null;
}

