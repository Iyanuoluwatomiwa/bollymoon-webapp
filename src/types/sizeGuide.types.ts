interface ClothingSize {
  size: string
  chest: string
  waist: string
  hips: string
  numeric: number
}

interface ShoeSize {
  eu: number
  us: number
  uk: number
  cm: number
}

export type SizeGuideData = {
  clothing: {
    men: ClothingSize[]
    women: ClothingSize[]
    unisex: ClothingSize[]
  }
  shoes: {
    men: ShoeSize[]
    women: ShoeSize[]
    children: ShoeSize[]
  }
}

export type Rect = {
  top: number
  left: number
  bottom: number
  right: number
  width: number
  height: number
  x: number
  y: number
}
