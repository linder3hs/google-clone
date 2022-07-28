export interface IResult {
  answers: any[];
  device_region: string;
  device_type: string;
  image_results: any[];
  results: any[];
  total?: number;
  ts: number;
}

export interface Results {
  searchs: IResult;
  images?: any;
  videos?: any;
  news?: any;
  books?: any;
}
