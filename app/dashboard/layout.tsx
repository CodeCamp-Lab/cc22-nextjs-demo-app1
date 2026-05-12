export default function DashboardLayout({ children }: {
    children: React.ReactNode;
}) {
    return <section>
        <h2>DashBoard Section</h2>
        {children}
    </section>
}