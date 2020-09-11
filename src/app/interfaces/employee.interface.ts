/**
 * Employee data structure from api
 */
export interface EmployeeInterface {
  id?: number;
  name: string;
  last_name: string;
  birthday: number;
}

/**
 * Complete response from api
 */
export interface EmployeeApiResponseInterface {
  success: boolean;
  data: ApiDataInterface;
}

/**
 * Data structure for data property
 */
interface ApiDataInterface {
  employees: Array<EmployeeInterface>;
}
