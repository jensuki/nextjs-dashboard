// read the invoice 'id' from page 'params'
import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';

// accept prop 'params' to access the 'id'
export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;

    const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id), // fetch invoice by id
        fetchCustomers() // to fetch customer names in dropdown
    ]);
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Invoices', href: '/dashboard/invoices' },
                    {
                        label: 'Edit Invoice',
                        href: `/dashboard/invoices/${id}/edit`,
                        active: true
                    }
                ]}
            />
            <Form invoice={invoice} customers={customers} />
        </main>
    )
}