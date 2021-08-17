import { requerst } from "./requerst";
// 轮播图
export function bannerurls() {
 return requerst("prod-api/api/rotation/list")
}