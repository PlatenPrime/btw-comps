export type Artikul = {
  artikul: string;
  nameukr: string;
  prod?: string;
  category?: string;
  subcategory?: string;
  size?: string;
  competitorsLinks?: {
    sharteLink?: string;
    yumiLink?: string;
    airLink?: string;
    bestLink?: string;
    aeroLink?: string;
    balunLink?: string;
    svyatoLink?: string;
    ideaLink?: string;
    chudoLink?: string;
  };
  avail?: {
    btrade?: number;
    sharte?: number | string | boolean;
    yumi?: number | string | boolean;
    air?: number | string | boolean;
    best?: number | string | boolean;
    aero?: number | string | boolean;
    balun?: number | string | boolean;
    svyato?: number | string | boolean;
    idea?: number | string | boolean;
    chudo?: number | string | boolean;
  };
  price?: {
    btrade?: string;
    sharte?: string;
    yumi?: string;
    air?: string;
    best?: string;
    aero?: string;
    balun?: string;
    svyato?: string;
    idea?: string;
    chudo?: string;
  };
  abc?: string;
};
