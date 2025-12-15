import { Loader2Icon, User } from 'lucide-react'
import { Suspense, type JSX } from 'react'
import LazyLoad from 'react-lazyload'
import LoadingIcon from '../components/global/LoadingIcon'

export const lazyload = (Component: JSX.Element) => (
  <LazyLoad>{Component}</LazyLoad>
)
export const pageSuspense = (Component: JSX.Element) => (
  <Suspense
    fallback={
      <div className="min-h-screen flex items-center justify-center">
        <LoadingIcon />
      </div>
    }
  >
    {Component}
  </Suspense>
)

export const sectionSuspense = (Component: JSX.Element) => (
  <LazyLoad>
    <Suspense fallback={<div className="py-20" />}>{Component}</Suspense>
  </LazyLoad>
)

export const nullSuspense = (Component: JSX.Element) => (
  <Suspense fallback={null}>{Component}</Suspense>
)
export const sidebarSuspense = (Component: JSX.Element) => (
  <Suspense fallback={<div className="w-1/3 fixed h-screen" />}>
    {Component}
  </Suspense>
)
export const formSuspense = (Component: JSX.Element) => (
  <Suspense
    fallback={
      <div className="w-[90%] mx-auto max-w-lg flex items-center justify-center py-20">
        <Loader2Icon className="w-6 h-6 animate-spin" />
      </div>
    }
  >
    {Component}
  </Suspense>
)

export const avatarSuspense = (Component: JSX.Element | undefined) => (
  <Suspense
    fallback={
      <div className="w-max rounded-full p-2 bg-muted-foreground">
        <User className="h-4 w-4 text-background" />
      </div>
    }
  >
    {Component}
  </Suspense>
)

export const accountPageSuspense = (Component: JSX.Element) => (
  <Suspense
    fallback={
      <div className="flex items-center justify-center h-[65vh]">
        <Loader2Icon className="w-6 h-6 animate-spin" />
      </div>
    }
  >
    {Component}
  </Suspense>
)

export const advancedFilterSuspense = (Component: JSX.Element | boolean) => (
  <Suspense
    fallback={
      <div className="h-[489px] w-full flex items-center justify-center">
        <Loader2Icon className="w-4 h-4 animate-spin" />
      </div>
    }
  >
    {Component}
  </Suspense>
)

export const sizeGuideSuspense = (Component: JSX.Element) => (
  <Suspense
    fallback={
      <div className="inset-0 fixed flex items-center justify-center z-[100] bg-background/50">
        <Loader2Icon className="w-6 h-6 animate-spin" />
      </div>
    }
  >
    {Component}
  </Suspense>
)
