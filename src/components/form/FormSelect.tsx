import { SelectTrigger } from '@radix-ui/react-select'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Select, SelectContent, SelectItem, SelectValue } from '../ui/select'
import type { SelectItems } from '@/utils/types'

function FormSelect({
  form,
  name,
  label,
  placeholder,
  options,
}: {
  form: any
  name: string
  label: string
  placeholder: string
  options: SelectItems[]
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="text-start px-3 border h-12 font text-[14.5px] rounded-md">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map(({ value, label }, index) => {
                return (
                  <SelectItem key={index} value={value}>
                    {label}
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
export default FormSelect
