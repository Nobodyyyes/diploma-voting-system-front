import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import {useAuthStore} from "../stores/auth.store";

import AuthLayout from "../layouts/AuthLayout.vue";
import AppLayout from "../layouts/AppLayout.vue";
import AdminLayout from "../layouts/AdminLayout.vue";

import LoginPage from "../pages/LoginPage.vue";
import ForbiddenPage from "../pages/system/ForbiddenPage.vue";
import NotFoundPage from "../pages/system/NotFoundPage.vue";

import ElectionsPage from "../pages/app/ElectionsPage.vue";
import ElectionDetailsPage from "../pages/app/ElectionDetailsPage.vue";
import VotePage from "../pages/app/VotePage.vue";
import ReceiptPage from "../pages/app/ReceiptPage.vue";
import ResultsPage from "../pages/app/ResultsPage.vue";

import AdminDashboard from "../pages/admin/AdminDashboard.vue";
import AdminElectionsPage from "../pages/admin/AdminElectionsPage.vue";
import AdminElectionEditPage from "../pages/admin/AdminElectionEditPage.vue";
import AdminCandidatesPage from "../pages/admin/AdminCandidatesPage.vue";
import AdminVotersPage from "../pages/admin/AdminVotersPage.vue";
import AdminAuditPage from "../pages/admin/AdminAuditPage.vue";

type Role = "VOTER" | "ADMIN";

const routes: RouteRecordRaw[] = [
    {
        path: "/login",
        component: AuthLayout,
        children: [{path: "", component: LoginPage}],
        meta: {public: true},
    },
    {path: "/forbidden", component: ForbiddenPage, meta: {public: true}},

    {
        path: "/app",
        component: AppLayout,
        meta: {auth: true, roles: ["VOTER", "ADMIN"] as Role[]},
        children: [
            {path: "elections", component: ElectionsPage},
            {path: "elections/:id", component: ElectionDetailsPage, props: true},
            {path: "elections/:id/vote", component: VotePage, props: true},
            {path: "elections/:id/receipt", component: ReceiptPage, props: true},
            {path: "elections/:id/results", component: ResultsPage, props: true},
        ],
    },

    {
        path: "/admin",
        component: AdminLayout,
        meta: {auth: true, roles: ["ADMIN"] as Role[]},
        children: [
            {path: "", component: AdminDashboard},
            {path: "elections", component: AdminElectionsPage},
            {path: "elections/:id/edit", component: AdminElectionEditPage, props: true},
            {path: "elections/:id/candidates", component: AdminCandidatesPage, props: true},
            {path: "elections/:id/voters", component: AdminVotersPage, props: true},
            {path: "audit", component: AdminAuditPage},
        ],
    },

    {path: "/", redirect: "/app/elections"},
    {path: "/:pathMatch(.*)*", component: NotFoundPage, meta: {public: true}},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to) => {
    const auth = useAuthStore();

    if (to.meta.public) return true;

    // Если нет логина — отправляем на /login
    if (to.meta.auth && !auth.isAuthenticated) {
        return {path: "/login", query: {next: to.fullPath}};
    }

    // Проверка ролей
    const allowedRoles = (to.meta.roles as Role[] | undefined) ?? undefined;
    if (allowedRoles && auth.user) {
        const has = auth.user.roles.some((r) => allowedRoles.includes(r as Role));
        if (!has) return {path: "/forbidden"};
    }

    return true;
});

export default router;