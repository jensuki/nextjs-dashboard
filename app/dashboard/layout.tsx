// dashboard: nav that is shared across multiple pages
import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-80 bg-slate-200">
                <SideNav />
            </div>
            {/* render all children automatically since they are nested routes inside /dashboard
             /customers
             /invoices
            */}
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    )
}