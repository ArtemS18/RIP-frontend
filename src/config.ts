const target_tauri = typeof window !== 'undefined' && (window as any).__TAURI__;

export const api_proxy_addr = "http://192.168.1.36:8080";
export const img_proxy_addr = "http://192.168.1.36:9000";

export const dest_api = target_tauri ? api_proxy_addr : "/api";
export const dest_img = target_tauri ? img_proxy_addr : "/img";
export const dest_root = target_tauri ? "" : import.meta.env.BASE_URL;