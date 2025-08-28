<template>
    <div class="min-h-screen bg-gray-50 py-10">
        <div class="mx-auto max-w-5xl rounded-2xl bg-white p-6 shadow">
            <!-- Header -->
            <div class="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div>
                    <h1 class="text-2xl font-semibold tracking-tight">個人資料（Profile）</h1>
                    <p class="text-sm text-gray-500">管理你的基本資料、安全性與偏好設定。</p>
                </div>
                <div class="flex items-center gap-3">
                    <button class="rounded-xl border px-4 py-2 text-sm hover:bg-gray-50" type="button"
                        @click="resetAll">
                        還原變更
                    </button>
                    <button
                        class="rounded-xl bg-black px-4 py-2 text-sm text-white hover:bg-gray-900 disabled:opacity-50"
                        :disabled="!isDirty || saving" type="button" @click="saveAll">
                        <span v-if="!saving">儲存設定</span>
                        <span v-else>儲存中…</span>
                    </button>
                </div>
            </div>

            <!-- Body -->
            <div class="mt-8 grid gap-6 md:grid-cols-[260px_1fr]">
                <!-- Sidebar Tabs -->
                <aside class="rounded-2xl border bg-white">
                    <nav class="p-2">
                        <button v-for="tab in tabs" :key="tab.key"
                            class="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm hover:bg-gray-50"
                            :class="activeTab === tab.key ? 'bg-gray-100 font-medium' : ''" @click="activeTab = tab.key"
                            type="button">
                            <component :is="tab.icon" class="h-4 w-4" />
                            <span>{{ tab.label }}</span>
                        </button>
                    </nav>
                </aside>

                <!-- Content Panels -->
                <section class="space-y-6">
                    <!-- Profile Info -->
                    <div v-if="activeTab === 'info'" class="rounded-2xl border p-6">
                        <h2 class="mb-4 text-lg font-semibold">基本資訊</h2>
                        <div class="flex flex-col gap-6 md:flex-row">
                            <!-- Avatar -->
                            <div class="flex flex-col items-start gap-3">
                                <div
                                    class="relative h-24 w-24 overflow-hidden rounded-2xl bg-gray-100 ring-1 ring-gray-200">
                                    <img v-if="form.avatarPreview" :src="form.avatarPreview" alt="avatar"
                                        class="h-full w-full object-cover" />
                                    <div v-else class="flex h-full w-full items-center justify-center text-gray-400">無頭像
                                    </div>
                                    <input ref="avatarInput" type="file" accept="image/*"
                                        class="absolute inset-0 cursor-pointer opacity-0" @change="onAvatarChange" />
                                </div>
                                <div class="text-xs text-gray-500">點選上傳新頭像（JPG/PNG, ≤ 2MB）</div>
                                <button v-if="form.avatarPreview" class="text-xs underline" type="button"
                                    @click="removeAvatar">移除頭像</button>
                            </div>

                            <!-- Fields -->
                            <div class="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2">
                                <div>
                                    <label class="mb-1 block text-sm font-medium">暱稱</label>
                                    <input v-model.trim="form.displayName" type="text"
                                        class="w-full rounded-xl border px-3 py-2 outline-none focus:ring"
                                        placeholder="例如：Yano" />
                                    <p v-if="v.displayName" class="mt-1 text-xs text-red-500">{{ v.displayName }}</p>
                                </div>
                                <div>
                                    <label class="mb-1 block text-sm font-medium">Email</label>
                                    <input v-model.trim="form.email" type="email"
                                        class="w-full rounded-xl border px-3 py-2 outline-none focus:ring"
                                        placeholder="you@example.com" />
                                    <p v-if="v.email" class="mt-1 text-xs text-red-500">{{ v.email }}</p>
                                </div>
                                <div>
                                    <label class="mb-1 block text-sm font-medium">使用者名稱</label>
                                    <input v-model.trim="form.username" type="text"
                                        class="w-full rounded-xl border px-3 py-2 outline-none focus:ring"
                                        placeholder="username" />
                                    <p v-if="v.username" class="mt-1 text-xs text-red-500">{{ v.username }}</p>
                                </div>
                                <div>
                                    <label class="mb-1 block text-sm font-medium">電話（選填）</label>
                                    <input v-model.trim="form.phone" type="tel"
                                        class="w-full rounded-xl border px-3 py-2 outline-none focus:ring"
                                        placeholder="09xx-xxx-xxx" />
                                </div>
                                <div class="md:col-span-2">
                                    <label class="mb-1 block text-sm font-medium">個人簡介</label>
                                    <textarea v-model.trim="form.bio" rows="3"
                                        class="w-full resize-none rounded-xl border px-3 py-2 outline-none focus:ring"
                                        placeholder="簡短介紹你自己"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Security -->
                    <div v-else-if="activeTab === 'security'" class="rounded-2xl border p-6">
                        <h2 class="mb-4 text-lg font-semibold">安全性</h2>
                        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label class="mb-1 block text-sm font-medium">目前密碼</label>
                                <input v-model="security.current" type="password"
                                    class="w-full rounded-xl border px-3 py-2 outline-none focus:ring" />
                                <p v-if="v.current" class="mt-1 text-xs text-red-500">{{ v.current }}</p>
                            </div>
                            <div>
                                <label class="mb-1 block text-sm font-medium">新密碼</label>
                                <input v-model="security.newPwd" type="password"
                                    class="w-full rounded-xl border px-3 py-2 outline-none focus:ring" />
                                <p v-if="v.newPwd" class="mt-1 text-xs text-red-500">{{ v.newPwd }}</p>
                            </div>
                            <div>
                                <label class="mb-1 block text-sm font-medium">確認新密碼</label>
                                <input v-model="security.confirm" type="password"
                                    class="w-full rounded-xl border px-3 py-2 outline-none focus:ring" />
                                <p v-if="v.confirm" class="mt-1 text-xs text-red-500">{{ v.confirm }}</p>
                            </div>
                            <div class="flex items-end">
                                <button class="rounded-xl border px-4 py-2 text-sm hover:bg-gray-50" type="button"
                                    @click="changePassword">更新密碼</button>
                            </div>
                        </div>

                        <div class="mt-6 rounded-xl border p-4">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="text-sm font-medium">兩步驟驗證（2FA）</p>
                                    <p class="text-xs text-gray-500">提升帳戶安全性（TOTP / Authenticator）。</p>
                                </div>
                                <label class="inline-flex cursor-pointer items-center gap-2">
                                    <input type="checkbox" v-model="security.enable2FA" class="h-4 w-4" />
                                    <span class="text-sm">啟用</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- Preferences -->
                    <div v-else-if="activeTab === 'prefs'" class="rounded-2xl border p-6">
                        <h2 class="mb-4 text-lg font-semibold">偏好設定</h2>
                        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div class="rounded-xl border p-4">
                                <p class="text-sm font-medium">語言</p>
                                <select v-model="prefs.lang" class="mt-2 w-full rounded-xl border px-3 py-2">
                                    <option value="zh-TW">繁體中文</option>
                                    <option value="en">English</option>
                                    <option value="ja">日本語</option>
                                </select>
                            </div>
                            <div class="rounded-xl border p-4">
                                <p class="text-sm font-medium">主題</p>
                                <select v-model="prefs.theme" class="mt-2 w-full rounded-xl border px-3 py-2">
                                    <option value="system">跟隨系統</option>
                                    <option value="light">淺色</option>
                                    <option value="dark">深色</option>
                                </select>
                            </div>
                            <div class="rounded-xl border p-4 md:col-span-2">
                                <p class="text-sm font-medium">通知</p>
                                <div class="mt-3 space-y-2 text-sm">
                                    <label class="flex items-center gap-3">
                                        <input type="checkbox" v-model="prefs.notifyEmail" class="h-4 w-4" />
                                        Email 通知
                                    </label>
                                    <label class="flex items-center gap-3">
                                        <input type="checkbox" v-model="prefs.notifyPush" class="h-4 w-4" />
                                        推播通知（行動裝置）
                                    </label>
                                    <label class="flex items-center gap-3">
                                        <input type="checkbox" v-model="prefs.newsletter" class="h-4 w-4" />
                                        訂閱電子報
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Activity Log -->
                    <div v-else-if="activeTab === 'activity'" class="rounded-2xl border p-6">
                        <h2 class="mb-4 text-lg font-semibold">活動紀錄</h2>
                        <div class="overflow-hidden rounded-xl border">
                            <table class="w-full text-left text-sm">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th class="px-4 py-2">時間</th>
                                        <th class="px-4 py-2">動作</th>
                                        <th class="px-4 py-2">IP</th>
                                        <th class="px-4 py-2">裝置</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(row, i) in activity" :key="i" class="border-t">
                                        <td class="px-4 py-2">{{ row.time }}</td>
                                        <td class="px-4 py-2">{{ row.action }}</td>
                                        <td class="px-4 py-2">{{ row.ip }}</td>
                                        <td class="px-4 py-2">{{ row.ua }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <!-- Toast -->
        <transition name="fade">
            <div v-if="toast.show"
                class="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-xl bg-black/90 px-4 py-2 text-sm text-white shadow-lg">
                {{ toast.message }}
            </div>
        </transition>
    </div>
</template>

<script setup>
import { reactive, ref, computed, watch } from 'vue'

// Icons: 用最簡單的內嵌 SVG 以免外部依賴
const IconUser = {
    template: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5Z" stroke="currentColor" stroke-width="1.5"/><path d="M4 22c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="currentColor" stroke-width="1.5"/></svg>`
}
const IconShield = {
    template: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3Z" stroke="currentColor" stroke-width="1.5"/></svg>`
}
const IconSliders = {
    template: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7h10M4 17h16M14 7v10M20 17V7" stroke="currentColor" stroke-width="1.5"/></svg>`
}
const IconClock = {
    template: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" stroke="currentColor" stroke-width="1.5"/><path d="M12 6v6l4 2" stroke="currentColor" stroke-width="1.5"/></svg>`
}

const tabs = [
    { key: 'info', label: '基本資訊', icon: IconUser },
    { key: 'security', label: '安全性', icon: IconShield },
    { key: 'prefs', label: '偏好設定', icon: IconSliders },
    { key: 'activity', label: '活動紀錄', icon: IconClock }
]

const activeTab = ref('info')

// Mock form state
const initial = {
    avatarPreview: '',
    displayName: 'Yano',
    email: 'yano@example.com',
    username: 'yano_dev',
    phone: '',
    bio: '前端工程師，熱愛遊戲與 UI/UX。'
}

const form = reactive({ ...initial })
const security = reactive({ current: '', newPwd: '', confirm: '', enable2FA: false })
const prefs = reactive({ lang: 'zh-TW', theme: 'system', notifyEmail: true, notifyPush: false, newsletter: false })
const activity = ref([
    { time: '2025-08-20 10:21', action: '登入成功', ip: '203.0.113.5', ua: 'Chrome / Windows' },
    { time: '2025-08-19 22:03', action: '變更暱稱', ip: '203.0.113.5', ua: 'Chrome / Windows' },
    { time: '2025-08-18 08:17', action: '啟用 Email 通知', ip: '198.51.100.2', ua: 'Safari / iOS' }
])

const toast = reactive({ show: false, message: '' })

// Validation (簡化示例)
const v = reactive({ displayName: '', email: '', username: '', current: '', newPwd: '', confirm: '' })

function validateInfo() {
    v.displayName = form.displayName ? '' : '暱稱為必填'
    v.email = /.+@.+\..+/.test(form.email) ? '' : 'Email 格式不正確'
    v.username = form.username ? '' : '使用者名稱為必填'
    return !v.displayName && !v.email && !v.username
}

function validatePassword() {
    v.current = security.current ? '' : '請輸入目前密碼'
    v.newPwd = security.newPwd.length >= 8 ? '' : '新密碼至少 8 碼'
    v.confirm = security.newPwd && security.newPwd === security.confirm ? '' : '兩次新密碼不一致'
    return !v.current && !v.newPwd && !v.confirm
}

// Avatar upload
const avatarInput = ref(null)
function onAvatarChange(e) {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 2 * 1024 * 1024) {
        showToast('檔案過大（>2MB）')
        avatarInput.value.value = ''
        return
    }
    const reader = new FileReader()
    reader.onload = () => (form.avatarPreview = reader.result)
    reader.readAsDataURL(file)
}
function removeAvatar() {
    form.avatarPreview = ''
    if (avatarInput.value) avatarInput.value.value = ''
}

// Dirty state
const isDirty = computed(() => JSON.stringify({ form, security, prefs }) !== JSON.stringify({ form: initial, security: { current: '', newPwd: '', confirm: '', enable2FA: false }, prefs: { lang: 'zh-TW', theme: 'system', notifyEmail: true, notifyPush: false, newsletter: false } }))

function resetAll() {
    Object.assign(form, initial)
    Object.assign(security, { current: '', newPwd: '', confirm: '', enable2FA: false })
    Object.assign(prefs, { lang: 'zh-TW', theme: 'system', notifyEmail: true, notifyPush: false, newsletter: false })
    showToast('已還原變更')
}

const saving = ref(false)
async function saveAll() {
    const okInfo = validateInfo()
    if (!okInfo) {
        activeTab.value = 'info'
        showToast('請先修正基本資訊欄位')
        return
    }
    saving.value = true
    // 模擬 API 延遲
    await new Promise(r => setTimeout(r, 700))
    saving.value = false
    showToast('設定已儲存（Demo）')
}

function changePassword() {
    if (!validatePassword()) return
    showToast('已更新密碼（Demo）')
    Object.assign(security, { current: '', newPwd: '', confirm: security.confirm, enable2FA: security.enable2FA })
    security.confirm = ''
}

function showToast(message) {
    toast.message = message
    toast.show = true
    setTimeout(() => (toast.show = false), 1800)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
