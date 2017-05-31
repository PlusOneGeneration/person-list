export class Name {
  familyName: string = null;
  givenName: string = null;
  formatted: string = null;
}

export class PhoneNumber {
  id: string = null;
  pref: boolean = false;
  value: string = '';
  type: string = "mobile";
}

export class Photo {
  id: string = null;
  pref: boolean = false;
  type: string = null;
  value: string = null;
}

export class Item {
  id: string = null;
  rawId?: string = null;
  displayName?: string = '';
  name?: Name;
  nickname?: string = null;
  phoneNumbers?: PhoneNumber[] = [];
  emails? = [];
  addresses?: string = null;
  ims?: string = null;
  organizations?: string = null;
  birthday?: string = null;
  note?: string = null;
  photos?: Photo[];
  categories?: string = null;
  urls?: string = null;
}

