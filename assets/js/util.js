/*
 * @Author: your name
 * @Date: 2020-12-29 21:35:48
 * @LastEditTime: 2020-12-29 21:35:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \opig.github.io\assets\js\util.js
 */

 
/**
 * 默认超时状态会重试3次
 * @param {*} params
 */
export function ajax(params = {}) {
  const retryLimit = params.retryLimit === undefined ? 3 : params.retryLimit;
  let tryCount = 0;
  let data = params.data;
  let postStringify = params.postStringify === false ? false : true;

  return new Promise((resolve, reject) => {
    if (params.type === 'POST' && postStringify) {
      data = JSON.stringify(data || {});
    }
    const op = $.extend(
      {
        contentType: 'application/json;charset=utf-8',
        dataType: 'json',
        // timeout: 1,
        success(res) {
          resolve(res);
        },
        error(xhr, textStatus) {
          if (textStatus === 'timeout' && retryLimit) {
            tryCount++;
            if (tryCount <= retryLimit) {
              $.ajax(op);
              return;
            }
          }
          reject(xhr);
        },
      },
      params,
      {
        data,
      }
    );
    $.ajax(op);
  });
}
