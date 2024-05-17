import { nanoid } from 'nanoid'

export const generateNanoIdLink = () => {
  const randomString = nanoid(6)
  return `${randomString}`
};