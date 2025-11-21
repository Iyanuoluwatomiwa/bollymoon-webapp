export type defaultNavLink = {
  name: string
  url: string
}

export type collectionsNavLink = {
  name: string
  url: string
  categories: {
    name: string
    href: string
  }[]
}

export type shopNavLink = {
  name: string
  url: string
  categories: {
    hairs: {
      name: string
      url: string
      subcategories: {
        name: string
        href: string
      }[]
    }
    clothing: {
      name: string
      url: string
      subcategories: {
        name: string
        href: string
      }[]
    }
    accessories: {
      name: string
      url: string
      subcategories: {
        name: string
        href: string
      }[]
    }
  }
}
