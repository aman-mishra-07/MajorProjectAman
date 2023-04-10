import { Table } from 'flowbite-react'

export default function Flowtable(props) {
  return (
    <Table className=' h-fit mt-3 mb-3'>
  <Table.Head>
    <Table.HeadCell>
      Service name
    </Table.HeadCell>
    <Table.HeadCell>
      Category(photo/video)
    </Table.HeadCell>
    <Table.HeadCell>
      Price/Day
    </Table.HeadCell>
    <Table.HeadCell>
      <span className="sr-only">
      Book Now 
      </span>
    </Table.HeadCell>
  </Table.Head>
  <Table.Body className="divide-y">
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Wedding
      </Table.Cell>
      <Table.Cell>
      Photo Album
      </Table.Cell>
      <Table.Cell>
       20,000
      </Table.Cell>
      <Table.Cell>
        <a
          href="/contact"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
         Book Now
        </a>
      </Table.Cell>
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Wedding
      </Table.Cell>
      <Table.Cell>
     Video
      </Table.Cell>
      <Table.Cell>
       22,000
      </Table.Cell>
      <Table.Cell>
        <a
          href="/contact"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
         Book Now
        </a>
      </Table.Cell>
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Pre-Wedding
      </Table.Cell>
      <Table.Cell>
      Photo Album
      </Table.Cell>
      <Table.Cell>
       18,000
      </Table.Cell>
      <Table.Cell>
        <a
          href="/contact"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
         Book Now
        </a>
      </Table.Cell>
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Pre-Wedding
      </Table.Cell>
      <Table.Cell>
   Video
      </Table.Cell>
      <Table.Cell>
       20,000
      </Table.Cell>
      <Table.Cell>
        <a
          href="/contact"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
         Book Now
        </a>
      </Table.Cell>
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Potrait Shoot
      </Table.Cell>
      <Table.Cell>
      Photo Album
      </Table.Cell>
      <Table.Cell>
       15,000
      </Table.Cell>
      <Table.Cell>
        <a
          href="/contact"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
         Book Now
        </a>
      </Table.Cell>
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Potrait Shoot
      </Table.Cell>
      <Table.Cell>
      Video/Reels
      </Table.Cell>
      <Table.Cell>
       15,000
      </Table.Cell>
      <Table.Cell>
        <a
          href="/contact"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
         Book Now
        </a>
      </Table.Cell>
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Baby Shoot
      </Table.Cell>
      <Table.Cell>
      Photo Album
      </Table.Cell>
      <Table.Cell>
       15,000
      </Table.Cell>
      <Table.Cell>
        <a
          href="/contact"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
         Book Now
        </a>
      </Table.Cell>
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Baby Shoot
      </Table.Cell>
      <Table.Cell>
      Cinematic Video
      </Table.Cell>
      <Table.Cell>
       15,000
      </Table.Cell>
      <Table.Cell>
        <a
          href="/contact"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
         Book Now
        </a>
      </Table.Cell>
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Product Photography
      </Table.Cell>
      <Table.Cell>
      Photos SoftCopy  
      </Table.Cell>
      <Table.Cell>
       15,000
      </Table.Cell>
      <Table.Cell>
        <a
          href="/contact"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
         Book Now
        </a>
      </Table.Cell>
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Product Photography
      </Table.Cell>
      <Table.Cell>
      Video Advertisement
      </Table.Cell>
      <Table.Cell>
       20,000
      </Table.Cell>
      <Table.Cell>
        <a
          href="/contact"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
         Book Now
        </a>
      </Table.Cell>
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Videography
      </Table.Cell>
      <Table.Cell>
      Cinematic Video
      </Table.Cell>
      <Table.Cell>
       20,000
      </Table.Cell>
      <Table.Cell>
        <a
          href="/contact"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
         Book Now
        </a>
      </Table.Cell>
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Videography
      </Table.Cell>
      <Table.Cell>
      Normal Edited
      </Table.Cell>
      <Table.Cell>
       18,000
      </Table.Cell>
      <Table.Cell>
        <a
          href="/contact"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
         Book Now
        </a>
      </Table.Cell>
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Fashion
      </Table.Cell>
      <Table.Cell>
      Photos Softcopy
      </Table.Cell>
      <Table.Cell>
       16,000
      </Table.Cell>
      <Table.Cell>
        <a
          href="/contact"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
         Book Now
        </a>
      </Table.Cell>
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Fashion
      </Table.Cell>
      <Table.Cell>
      Video Advertisement
      </Table.Cell>
      <Table.Cell>
      20,000
      </Table.Cell>
      <Table.Cell>
        <a
          href="/contact"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
         Book Now
        </a>
      </Table.Cell>
    </Table.Row>
     </Table.Body>  
</Table>
  )
}
