// storage.ts
export interface StorageInterface {
    save(key: string, data: any): void;
    load<T>(key: string): T | null;
    remove(key: string): void;
    clear(): void;
    exists(key: string): boolean;
  }
  
  export class LocalStorageStorage implements StorageInterface {
    save(key: string, data: any): void {
      console.log(`Saving key: ${key}, data:`, data);  // Логування збереження
      localStorage.setItem(key, JSON.stringify(data));
  }
  
  load<T>(key: string): T | null {
      const data = localStorage.getItem(key);
      console.log(`Loading key: ${key}, data:`, data);  // Логування завантаження
      return data ? JSON.parse(data) : null;
  }
  
    remove(key: string): void {
      localStorage.removeItem(key);
    }
  
    clear(): void {
      localStorage.clear();
    }
  
    exists(key: string): boolean {
      return localStorage.getItem(key) !== null;
    }
  }