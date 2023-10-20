
let CACHENAME = 'pwa_cache1'
const cacheSources = [
    '/',
    '/style.css',
    '/manifest.json'
]
self.addEventListener('install', async event => {
    console.log('install')
    // 开启cache
    const cache = await caches.open(CACHENAME)
    await cache.addAll(cacheSources)
    await self.skipWaiting()
})

// 清除旧的缓存
self.addEventListener('activate', async event => {
    console.log('activate', event)
    // 获取到缓存中所有的key
    const keys = await caches.keys()
    keys.forEach(key => {
        // 删除掉不是当前版本的缓存
        if(key !== CACHENAME) {
            caches.delete(key)
        }
    })
    // service worker激活后，立即获取控制权
    await self.clients.claim()
})

// 请求发送时触发
self.addEventListener('fetch', event => {
    // 请求对象
    const req = event.request
    // 给浏览器响应
    // event.respondWith(networkFirst(req))
    event.respondWith(cacheFirst(req))
})

// 网络优先
async function networkFirst(req) {
    try {
        // 请求网络获取最新数据
        const fresh = await fetch(req)
        return fresh
    } catch(e) {
        // 获取缓存
        const cache = await caches.open(CACHENAME)
        // 获取缓存中的数据
        const cached = await cache.match(req)
        return cached
    }
}

// 缓存优先
async function cacheFirst(req) {
    const cachedResponse = await caches.match(req);
    return cachedResponse || await fetch(req);
}