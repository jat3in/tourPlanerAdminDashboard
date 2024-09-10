const fakeData = [
  {
    id: 1,
    customer: "John Doe",
    packageName: "Beach Getaway",
    duration: "7 days",
    phone: "+1 234-567-8901",
    email: "john@example.com",
    price: "₹1,299",
  },
  {
    id: 2,
    customer: "Jane Smith",
    packageName: "Mountain Adventure",
    duration: "5 days",
    phone: "+1 987-654-3210",
    email: "jane@example.com",
    price: "₹999",
  },
  {
    id: 3,
    customer: "Bob Johnson",
    packageName: "City Explorer",
    duration: "4 days",
    phone: "+1 555-123-4567",
    email: "bob@example.com",
    price: "₹799",
  },
  {
    id: 4,
    customer: "Alice Brown",
    packageName: "Tropical Paradise",
    duration: "10 days",
    phone: "+1 111-222-3333",
    email: "alice@example.com",
    price: "₹2,499",
  },
  {
    id: 5,
    customer: "Charlie Wilson",
    packageName: "Historical Tour",
    duration: "6 days",
    phone: "+1 444-555-6666",
    email: "charlie@example.com",
    price: "₹1,099",
  },
  {
    id: 6,
    customer: "Eva Green",
    packageName: "Safari Adventure",
    duration: "8 days",
    phone: "+1 777-888-9999",
    email: "eva@example.com",
    price: "₹3,199",
  },
  {
    id: 7,
    customer: "David Lee",
    packageName: "Ski Resort",
    duration: "5 days",
    phone: "+1 222-333-4444",
    email: "david@example.com",
    price: "₹1,599",
  },
  {
    id: 8,
    customer: "Sophia Rodriguez",
    packageName: "Cultural Immersion",
    duration: "9 days",
    phone: "+1 666-777-8888",
    email: "sophia@example.com",
    price: "₹2,099",
  },
  {
    id: 9,
    customer: "Michael Taylor",
    packageName: "Island Hopping",
    duration: "12 days",
    phone: "+1 999-000-1111",
    email: "michael@example.com",
    price: "₹3,999",
  },
  {
    id: 10,
    customer: "Emma Wilson",
    packageName: "European Tour",
    duration: "14 days",
    phone: "+1 123-456-7890",
    email: "emma@example.com",
    price: "₹4,299",
  },
  {
    id: 11,
    customer: "Liam Johnson",
    packageName: "Cruise Adventure",
    duration: "10 days",
    phone: "+1 987-654-3210",
    email: "liam@example.com",
    price: "₹2,799",
  },
  {
    id: 12,
    customer: "Olivia Davis",
    packageName: "Wilderness Expedition",
    duration: "6 days",
    phone: "+1 456-789-0123",
    email: "olivia@example.com",
    price: "₹1,899",
  },
  {
    id: 13,
    customer: "Noah Martinez",
    packageName: "Tropical Retreat",
    duration: "8 days",
    phone: "+1 789-012-3456",
    email: "noah@example.com",
    price: "₹2,499",
  },
  {
    id: 14,
    customer: "Ava Anderson",
    packageName: "Historical Journey",
    duration: "9 days",
    phone: "+1 234-567-8901",
    email: "ava@example.com",
    price: "₹2,699",
  },
  {
    id: 15,
    customer: "Ethan Thomas",
    packageName: "Eco-Tourism Package",
    duration: "7 days",
    phone: "+1 111-222-3333",
    email: "ethan@example.com",
    price: "₹1,799",
  },
  {
    id: 16,
    customer: "Isabella Clark",
    packageName: "Luxury Spa Getaway",
    duration: "5 days",
    phone: "+1 444-555-6666",
    email: "isabella@example.com",
    price: "₹2,999",
  },
  {
    id: 17,
    customer: "Mason Rodriguez",
    packageName: "Backpacking Adventure",
    duration: "14 days",
    phone: "+1 777-888-9999",
    email: "mason@example.com",
    price: "₹1,599",
  },
  {
    id: 18,
    customer: "Charlotte Lewis",
    packageName: "Wine Country Tour",
    duration: "6 days",
    phone: "+1 222-333-4444",
    email: "charlotte@example.com",
    price: "₹2,199",
  },
  {
    id: 19,
    customer: "William Lee",
    packageName: "Scuba Diving Package",
    duration: "8 days",
    phone: "+1 666-777-8888",
    email: "william@example.com",
    price: "₹2,899",
  },
  {
    id: 20,
    customer: "Amelia Harris",
    packageName: "Photography Tour",
    duration: "10 days",
    phone: "+1 999-000-1111",
    email: "amelia@example.com",
    price: "₹3,299",
  },
  {
    id: 21,
    customer: "James Wilson",
    packageName: "Gourmet Food Tour",
    duration: "7 days",
    phone: "+1 123-456-7890",
    email: "james@example.com",
    price: "₹2,599",
  },
  {
    id: 22,
    customer: "Evelyn Moore",
    packageName: "Yoga Retreat",
    duration: "5 days",
    phone: "+1 987-654-3210",
    email: "evelyn@example.com",
    price: "₹1,499",
  },
  {
    id: 23,
    customer: "Benjamin Taylor",
    packageName: "Golf Vacation",
    duration: "6 days",
    phone: "+1 456-789-0123",
    email: "benjamin@example.com",
    price: "₹2,799",
  },
  {
    id: 24,
    customer: "Harper Brown",
    packageName: "Romantic Getaway",
    duration: "4 days",
    phone: "+1 789-012-3456",
    email: "harper@example.com",
    price: "₹1,999",
  },
  {
    id: 25,
    customer: "Daniel Martinez",
    packageName: "Adventure Sports Package",
    duration: "9 days",
    phone: "+1 234-567-8901",
    email: "daniel@example.com",
    price: "₹3,499",
  },
];

const Table = () => {
  return (
    <div className="mt-4 w-full text-white border-[1px] rounded-md border-neutral-500 overflow-x-auto max-h-[80vh]">
      <table className="w-full">
        <thead className="bg-neutral-800 sticky top-0 z-10">
          <tr className="text-left">
            <th className="px-4 py-2">Customer</th>
            <th className="px-4 py-2">Package Name</th>
            <th className="px-4 py-2">Duration</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {fakeData.map((row) => (
            <tr
              key={row.id}
              className="border-b border-neutral-700 hover:bg-neutral-700"
            >
              <td className="px-4 py-2">{row.customer}</td>
              <td className="px-4 py-2">{row.packageName}</td>
              <td className="px-4 py-2">{row.duration}</td>
              <td className="px-4 py-2">{row.phone}</td>
              <td className="px-4 py-2">{row.email}</td>
              <td className="px-4 py-2">{row.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
