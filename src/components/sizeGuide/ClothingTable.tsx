import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import { Label } from '../ui/label'
import { sizeGuide } from '@/assets/data'

function ClothingTable() {
  return (
    <div className="space-y-4">
      <div className="text-sm text-muted-foreground">
        Detailed measurements in inches for clothing sizes
      </div>
      <div className="border rounded-lg mb-8">
        <Label className="p-2 text-xl mb-2 font-bold tracking-wider">
          Unisex
        </Label>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Size</TableHead>
              <TableHead className="text-center">Chest</TableHead>
              <TableHead className="text-center">Waist</TableHead>
              <TableHead className="text-center">Hips</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sizeGuide.clothing.unisex.map((size) => (
              <TableRow key={size.size}>
                <TableCell className="font-medium">{size.size}</TableCell>
                <TableCell className="font-medium">{size.chest}</TableCell>
                <TableCell className="font-medium">{size.waist}</TableCell>
                <TableCell className="font-medium">{size.hips}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="border rounded-lg mb-4">
        <Label className="p-2 text-xl mb-2 font-bold tracking-wider">Men</Label>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Size</TableHead>
              <TableHead className="text-center">Chest</TableHead>
              <TableHead className="text-center">Waist</TableHead>
              <TableHead className="text-center">Hips</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sizeGuide.clothing.men.map((size) => (
              <TableRow key={size.size}>
                <TableCell className="font-medium">{size.size}</TableCell>
                <TableCell className="font-medium">{size.chest}</TableCell>
                <TableCell className="font-medium">{size.waist}</TableCell>
                <TableCell className="font-medium">{size.hips}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="border rounded-lg mb-4">
        <Label className="p-2 text-xl mb-2 font-bold tracking-wider">
          Women
        </Label>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Size</TableHead>
              <TableHead className="text-center">Chest</TableHead>
              <TableHead className="text-center">Waist</TableHead>
              <TableHead className="text-center">Hips</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sizeGuide.clothing.women.map((size) => (
              <TableRow key={size.size}>
                <TableCell className="font-medium">{size.size}</TableCell>
                <TableCell className="font-medium">{size.chest}</TableCell>
                <TableCell className="font-medium">{size.waist}</TableCell>
                <TableCell className="font-medium">{size.hips}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default ClothingTable
