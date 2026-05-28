/**
 * 解析站点 URL
 * @param {string} url - 站点地址
 * @returns {string[]} - [主域名, 后缀]
 */
export const parseSiteUrl = (url) => {
  if (!url) return "imsyy.top".split(".");
  // 去除协议前缀
  const urlFormat = url.replace(/^(https?:\/\/)/, "");
  return urlFormat.split(".");
};

/**
 * 获取带协议的完整站点 URL
 * @param {string} url - 站点地址
 * @returns {string} - 完整 URL
 */
export const getFullSiteUrl = (url) => {
  if (!url) return "https://www.imsyy.top";
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return "//" + url;
  }
  return url;
};
