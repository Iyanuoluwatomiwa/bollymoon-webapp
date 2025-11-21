import { sizeGuide } from '@/utils/data'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'

function ShoesTable() {
  return (
    <div className="space-y-4">
      <div className="text-sm text-muted-foreground">
        International shoe size conversions
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">EU</TableHead>
            <TableHead className="text-center">US</TableHead>
            <TableHead className="text-center">UK</TableHead>
            <TableHead className="text-center">CM</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sizeGuide.shoes.men.map((size) => (
            <TableRow key={size.eu}>
              <TableCell className="font-medium">{size.eu}</TableCell>
              <TableCell className="font-medium">{size.us}</TableCell>
              <TableCell className="font-medium">{size.uk}</TableCell>
              <TableCell className="font-medium">{size.cm}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
export default ShoesTable
