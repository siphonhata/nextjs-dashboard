import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Customers(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {

  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  // const currentPage = Number(searchParams?.page) || 1; 
  const customers = await fetchFilteredCustomers(query);

  return (
    <div className="w-full">
      <div className="mt-8">
        <CustomersTable customers={customers} />
      </div>
    </div>
  );
}