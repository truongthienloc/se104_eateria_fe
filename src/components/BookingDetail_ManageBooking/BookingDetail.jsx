function BookingDetail({id, tableId, status1, status2, time, numOfClient, clientName, email}) {
    return(
        <tr>
            <td className='py-4 px-4  border-b border-gray-200 text-lg text-primary'>
                <input className='mr-6' type='checkbox' /> {id}
            </td>
            <td className='py-4 px-4 text-center border-b border-gray-200'>
                {tableId}
            </td>
            <td className='py-4 px-4 text-center border-b border-gray-200'>
                <span className='bg-green-100 text-green-800 py-1 px-2 rounded-full text-base'>
                    {status1}
                </span>
                <span className='bg-red-100 text-red-800 py-1 px-2 rounded-full text-base'>
                    {status2}
                </span>
            </td>
            <td className='py-4 px-4 text-center border-b border-gray-200'>
                {time}
            </td>
            <td className='py-4 px-4 text-center border-b border-gray-200'>
                {numOfClient}
            </td>
            <td className='py-4 px-4 text-center border-b border-gray-200'>
                {clientName}
            </td>
            <td className='py-4 px-4 text-center border-b border-gray-200'>
                {email}
            </td>
        </tr>
    )
}
export default BookingDetail