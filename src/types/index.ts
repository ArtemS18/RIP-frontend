export interface Component {
  id: number;
  title: string;
  type: string;
  mtbf: number;
  mttr: number;
  available: number;
  img?: string;
  description?: string;

}
export interface IPaginatedComponents {
  items: Component[];
  total: number;
}

export interface ICrumb {
  label: string;
  path?: string;
  active?: boolean;
}

export interface ICart{
  sys_calculation_id: number | null;
  components_count: number;
}