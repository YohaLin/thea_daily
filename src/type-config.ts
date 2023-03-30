// 用在需要更改 RWD 樣式的 props
// 因為在 productOverview 需要用到 isWeb 與其他 props，所以不使用 type，而用 interface 來 extends
export interface IisWebProps  {
  isWeb: boolean
}

// 用在 ProductPeopleMobile, ProductPeopleWeb 的 props
export type productPeopleProps = {
  carousel: Array<any>, 
  carouselId: number, 
  addCarouselId: () => void, 
  reduceCarouselId:() => void
}