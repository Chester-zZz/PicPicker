const host = '127.0.0.1';
const port = '3000';
const baseUrl = `http://${host}:${port}`

export default {
  host,
  port,
  baseUrl,
  likeApi: `${baseUrl}/api/likeit`,
  getPageApi: `${baseUrl}/api/getPage`
}
