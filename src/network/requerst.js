import axios from "axios";
export function requerst(params) {
  const interface1 = axios.create({
    baseURL:"http://124.93.196.45:10001",
    timeout:3000
  })
  return interface1(params)
}