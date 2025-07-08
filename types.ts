
export interface DataEntry {
  name: string;
  email: string;
  product: string;
  quantity: number;
}

export interface ToastInfo {
  message: string;
  type: 'success' | 'error' | 'info';
}
