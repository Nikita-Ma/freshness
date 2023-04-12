export function imgToBlob(obj) {
  const transformBlob = new Blob([obj.files], {
    type: 'image/jpeg',
  })
  return transformBlob
}
